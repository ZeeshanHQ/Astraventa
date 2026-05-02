import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const githubToken = Deno.env.get('GITHUB_MODELS_TOKEN')!;

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Fetch system data
    const [
      { data: contactSubmissions },
      { data: demoRequests },
      { data: newsletterSubscribers },
      { data: blogPosts },
      { data: careerPositions },
      { data: careerApplications },
      { data: activityLogs }
    ] = await Promise.all([
      supabase.from('contact_submissions').select('*'),
      supabase.from('demo_requests').select('*'),
      supabase.from('newsletter_subscribers').select('*'),
      supabase.from('blog_posts').select('*'),
      supabase.from('career_positions').select('*'),
      supabase.from('career_applications').select('*'),
      supabase.from('admin_activity_logs').select('*').order('created_at', { ascending: false }).limit(100)
    ]);

    const today = new Date().toISOString().split('T')[0]
    const systemData = {
      posts: blogPosts?.length || 0,
      positions: careerPositions?.length || 0,
      applications: careerApplications?.length || 0,
      contactSubmissions: contactSubmissions?.length || 0,
      demoRequests: demoRequests?.length || 0,
      newsletterSubscribers: newsletterSubscribers?.length || 0,
      recentActivity: activityLogs?.length || 0,
      analysisDate: today
    }

    // Call GitHub Models API
    const prompt = `You are an infrastructure monitoring AI for Astraventa.com. Analyze the following system data and provide a comprehensive report:

System Data:
- Blog Posts: ${systemData.posts}
- Career Positions: ${systemData.positions}
- Career Applications: ${systemData.applications}
- Contact Submissions: ${systemData.contactSubmissions}
- Demo Requests: ${systemData.demoRequests}
- Newsletter Subscribers: ${systemData.newsletterSubscribers}
- Recent Activities: ${systemData.recentActivity}
- Analysis Date: ${systemData.analysisDate}

Provide analysis in JSON format with these fields:
{
  "system_health": { "status": "healthy|warning|critical", "score": 0-100, "details": "..." },
  "database_status": { "tables": "...", "connections": "...", "performance": "..." },
  "activity_summary": { "total_events": "...", "categories": "...", "trends": "..." },
  "issues_detected": [{ "severity": "low|medium|high", "description": "...", "category": "..." }],
  "recommendations": [{ "priority": "low|medium|high", "action": "...", "reason": "..." }],
  "warnings": [{ "type": "...", "message": "...", "suggestion": "..." }],
  "ai_analysis": "Detailed narrative analysis of the infrastructure..."
}`;

    const response = await fetch('https://models.inference.ai.azure.com/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${githubToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mistralai/Mistral-7B-Instruct-v0.3',
        messages: [
          { role: 'system', content: 'You are an expert infrastructure monitoring AI. Always respond with valid JSON only.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.3,
        max_tokens: 2000
      }),
    });

    if (!response.ok) {
      throw new Error(`GitHub Models API error: ${response.statusText}`)
    }

    const githubData = await response.json()
    const aiResponse = githubData.choices[0].message.content

    // Parse AI response
    let analysisResult
    try {
      analysisResult = JSON.parse(aiResponse)
    } catch (e) {
      // Fallback if AI didn't return valid JSON
      analysisResult = {
        system_health: { status: 'warning', score: 75, details: aiResponse },
        database_status: { tables: 'Active', connections: 'Normal', performance: 'Good' },
        activity_summary: { total_events: systemData.recentActivity, categories: 'Mixed', trends: 'Normal' },
        issues_detected: [],
        recommendations: [],
        warnings: [],
        ai_analysis: aiResponse
      }
    }

    // Store analysis in database
    const { error: insertError } = await supabase
      .from('infrastructure_monitoring')
      .upsert({
        analysis_date: today,
        system_health: analysisResult.system_health,
        database_status: analysisResult.database_status,
        activity_summary: analysisResult.activity_summary,
        issues_detected: analysisResult.issues_detected,
        recommendations: analysisResult.recommendations,
        warnings: analysisResult.warnings,
        ai_analysis: analysisResult.ai_analysis,
        model_used: 'mistralai/Mistral-7B-Instruct-v0.3'
      }, { onConflict: 'analysis_date' })

    if (insertError) {
      console.error('Error storing analysis:', insertError)
      throw insertError
    }

    return new Response(JSON.stringify({
      success: true,
      analysis: analysisResult,
      systemData
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })

  } catch (error) {
    console.error('Infrastructure analysis error:', error)
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})
