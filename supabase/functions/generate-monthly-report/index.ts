import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const resendApiKey = Deno.env.get('RESEND_API_KEY')!
const adminEmail = Deno.env.get('ADMIN_EMAIL') || 'admin@astraventa.com'

const supabase = createClient(supabaseUrl, supabaseServiceKey)

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    let month, year
    try {
      const body = await req.json()
      month = body.month
      year = body.year
    } catch {
      // If no body provided, use current month/year
      month = null
      year = null
    }
    const targetMonth = month || new Date().getMonth() + 1
    const targetYear = year || new Date().getFullYear()

    console.log(`Generating monthly report for ${targetMonth}/${targetYear}`)

    // Fetch all monitoring data for the month
    const startDate = new Date(targetYear, targetMonth - 1, 1).toISOString()
    const endDate = new Date(targetYear, targetMonth, 0, 23, 59, 59).toISOString()

    const { data: monitoringData } = await supabase
      .from('infrastructure_monitoring')
      .select('*')
      .gte('created_at', startDate)
      .lte('created_at', endDate)
      .order('created_at', { ascending: true })

    // Fetch aggregate data
    const [
      { data: posts },
      { data: positions },
      { data: applications },
      { data: contactSubmissions },
      { data: demoRequests },
      { data: newsletterSubscribers }
    ] = await Promise.all([
      supabase.from('blog_posts').select('*').gte('created_at', startDate).lte('created_at', endDate),
      supabase.from('career_positions').select('*').gte('created_at', startDate).lte('created_at', endDate),
      supabase.from('career_applications').select('*').gte('created_at', startDate).lte('created_at', endDate),
      supabase.from('contact_submissions').select('*').gte('created_at', startDate).lte('created_at', endDate),
      supabase.from('demo_requests').select('*').gte('created_at', startDate).lte('created_at', endDate),
      supabase.from('newsletter_subscribers').select('*').gte('created_at', startDate).lte('created_at', endDate)
    ])

    // Generate HTML report
    const monthName = new Date(targetYear, targetMonth - 1).toLocaleString('default', { month: 'long' })
    
    const htmlReport = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Astraventa Infrastructure Report - ${monthName} ${targetYear}</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 900px; margin: 0 auto; padding: 40px 20px; }
    .header { text-align: center; margin-bottom: 40px; border-bottom: 3px solid #3b82f6; padding-bottom: 20px; }
    .header h1 { color: #1e293b; margin: 0; font-size: 28px; }
    .header p { color: #64748b; margin: 10px 0 0 0; }
    .section { margin-bottom: 30px; }
    .section h2 { color: #1e293b; font-size: 20px; border-left: 4px solid #3b82f6; padding-left: 15px; margin-bottom: 15px; }
    .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0; }
    .stat-card { background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; }
    .stat-card h3 { color: #64748b; font-size: 12px; text-transform: uppercase; margin: 0 0 10px 0; }
    .stat-card .value { color: #1e293b; font-size: 32px; font-weight: bold; margin: 0; }
    .health-status { padding: 15px; border-radius: 8px; margin: 10px 0; }
    .health-healthy { background: #dcfce7; border: 1px solid #22c55e; color: #166534; }
    .health-warning { background: #fef9c3; border: 1px solid #eab308; color: #854d0e; }
    .health-critical { background: #fee2e2; border: 1px solid #ef4444; color: #991b1b; }
    .issue-card { background: #fef2f2; border: 1px solid #fecaca; padding: 15px; border-radius: 8px; margin: 10px 0; }
    .issue-high { border-left: 4px solid #ef4444; }
    .issue-medium { border-left: 4px solid #f59e0b; }
    .issue-low { border-left: 4px solid #3b82f6; }
    .recommendation { background: #f0fdf4; border: 1px solid #bbf7d0; padding: 15px; border-radius: 8px; margin: 10px 0; }
    .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #64748b; font-size: 12px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Astraventa Infrastructure Report</h1>
    <p>${monthName} ${targetYear} | Monthly Analysis</p>
  </div>

  <div class="section">
    <h2>Executive Summary</h2>
    <div class="stats-grid">
      <div class="stat-card">
        <h3>Blog Posts</h3>
        <p class="value">${posts?.length || 0}</p>
      </div>
      <div class="stat-card">
        <h3>Job Positions</h3>
        <p class="value">${positions?.length || 0}</p>
      </div>
      <div class="stat-card">
        <h3>Applications</h3>
        <p class="value">${applications?.length || 0}</p>
      </div>
      <div class="stat-card">
        <h3>Contact Leads</h3>
        <p class="value">${contactSubmissions?.length || 0}</p>
      </div>
      <div class="stat-card">
        <h3>Demo Requests</h3>
        <p class="value">${demoRequests?.length || 0}</p>
      </div>
      <div class="stat-card">
        <h3>New Subscribers</h3>
        <p class="value">${newsletterSubscribers?.length || 0}</p>
      </div>
    </div>
  </div>

  <div class="section">
    <h2>System Health Analysis</h2>
    ${monitoringData?.map(day => {
      const health = day.system_health
      const statusClass = health?.status === 'healthy' ? 'health-healthy' : health?.status === 'warning' ? 'health-warning' : 'health-critical'
      return `
        <div class="health-status ${statusClass}">
          <strong>${new Date(day.created_at).toLocaleDateString()}</strong> - 
          Status: ${health?.status?.toUpperCase()} | 
          Score: ${health?.score}/100
          <br><em>${health?.details || 'No details available'}</em>
        </div>
      `
    }).join('') || '<p>No monitoring data available for this month.</p>'}
  </div>

  <div class="section">
    <h2>Issues Detected</h2>
    ${monitoringData?.flatMap(day => day.issues_detected || []).map((issue: any, i) => `
      <div class="issue-card issue-${issue.severity}">
        <strong>${issue.severity?.toUpperCase()}: ${issue.category}</strong>
        <p>${issue.description}</p>
      </div>
    `).join('') || '<p>No issues detected this month.</p>'}
  </div>

  <div class="section">
    <h2>Recommendations</h2>
    ${monitoringData?.flatMap(day => day.recommendations || []).map((rec: any, i) => `
      <div class="recommendation">
        <strong>${rec.priority?.toUpperCase()} Priority:</strong> ${rec.action}
        <br><em>${rec.reason}</em>
      </div>
    `).join('') || '<p>No recommendations for this month.</p>'}
  </div>

  <div class="section">
    <h2>Warnings</h2>
    ${monitoringData?.flatMap(day => day.warnings || []).map((warning: any, i) => `
      <div style="background: #fffbeb; border: 1px solid #fcd34d; padding: 15px; border-radius: 8px; margin: 10px 0;">
        <strong>${warning.type}:</strong> ${warning.message}
        <br><em>Suggestion: ${warning.suggestion}</em>
      </div>
    `).join('') || '<p>No warnings this month.</p>'}
  </div>

  <div class="footer">
    <p>This report was automatically generated by Astraventa AI Monitoring System</p>
    <p>Generated on ${new Date().toLocaleString()}</p>
  </div>
</body>
</html>`

    // Send email with HTML report
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'ai@astraventa.com',
        to: adminEmail,
        subject: `Astraventa Infrastructure Report - ${monthName} ${targetYear}`,
        html: htmlReport
      })
    })

    if (!emailResponse.ok) {
      const error = await emailResponse.text()
      throw new Error(`Email sending failed: ${error}`)
    }

    // Log the report generation
    await supabase.from('admin_activity_logs').insert({
      activity_type: 'monthly_report_generated',
      description: `Monthly infrastructure report generated for ${monthName} ${targetYear}`,
      metadata: { month: targetMonth, year: targetYear, sent_to: adminEmail }
    })

    return new Response(JSON.stringify({
      success: true,
      message: 'Monthly report generated and sent successfully',
      month: targetMonth,
      year: targetYear
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })

  } catch (error) {
    console.error('Monthly report generation error:', error)
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})
