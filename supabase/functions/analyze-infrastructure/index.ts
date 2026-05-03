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
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    const githubToken = Deno.env.get('GITHUB_MODELS_TOKEN');

    if (!supabaseUrl || !supabaseServiceKey || !githubToken) {
      console.error('Missing environment variables:', {
        hasSupabaseUrl: !!supabaseUrl,
        hasSupabaseServiceKey: !!supabaseServiceKey,
        hasGithubToken: !!githubToken
      });
      return new Response(JSON.stringify({
        success: false,
        error: 'Missing required environment variables',
        details: {
          hasSupabaseUrl: !!supabaseUrl,
          hasSupabaseServiceKey: !!supabaseServiceKey,
          hasGithubToken: !!githubToken
        }
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    console.log('Starting infrastructure analysis...');

    // Fetch system data
    let contactSubmissions, demoRequests, newsletterSubscribers, blogPosts, careerPositions, careerApplications, activityLogs;
    try {
      const results = await Promise.all([
        supabase.from('contact_submissions').select('*'),
        supabase.from('demo_requests').select('*'),
        supabase.from('newsletter_subscribers').select('*'),
        supabase.from('blog_posts').select('*'),
        supabase.from('career_positions').select('*'),
        supabase.from('career_applications').select('*'),
        supabase.from('admin_activity_logs').select('*').order('created_at', { ascending: false }).limit(100)
      ]);
      [contactSubmissions, demoRequests, newsletterSubscribers, blogPosts, careerPositions, careerApplications, activityLogs] = results;
      console.log('Database queries completed successfully');
    } catch (dbError) {
      console.error('Database query error:', dbError);
      return new Response(JSON.stringify({
        success: false,
        error: 'Database query failed',
        details: dbError.message
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

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
    let githubResponse;
    try {
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

      console.log('Calling GitHub Models API...');
      githubResponse = await fetch('https://models.inference.ai.azure.com/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${githubToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: 'You are an expert infrastructure monitoring AI. Always respond with valid JSON only.' },
            { role: 'user', content: prompt }
          ],
          temperature: 0.3,
          max_tokens: 2000
        }),
      });

      if (!githubResponse.ok) {
        const errorText = await githubResponse.text();
        console.error('GitHub Models API error:', githubResponse.status, errorText);
        throw new Error(`GitHub Models API error: ${githubResponse.status} - ${errorText}`)
      }

      console.log('GitHub API call successful');
    } catch (apiError) {
      console.error('GitHub API call failed:', apiError);
      return new Response(JSON.stringify({
        success: false,
        error: 'GitHub API call failed',
        details: apiError.message
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const githubData = await githubResponse.json()
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
    try {
      console.log('Storing analysis in database...');
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
          model_used: 'gpt-4o-mini'
        }, { onConflict: 'analysis_date' })

      if (insertError) {
        console.error('Error storing analysis:', insertError);
        throw insertError;
      }
      console.log('Analysis stored successfully');
    } catch (dbInsertError) {
      console.error('Database insert error:', dbInsertError);
      return new Response(JSON.stringify({
        success: false,
        error: 'Failed to store analysis in database',
        details: dbInsertError.message
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
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
