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

const toBase64 = (value: string) => btoa(unescape(encodeURIComponent(value)))

const escapeHtml = (value: unknown) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')

const parseEmbeddedAnalysis = (value: unknown) => {
  if (!value || typeof value !== 'string') return null
  const cleaned = value
    .replace(/```json/gi, '')
    .replace(/```/g, '')
    .trim()
  try {
    return JSON.parse(cleaned)
  } catch {
    const firstBrace = cleaned.indexOf('{')
    const lastBrace = cleaned.lastIndexOf('}')
    if (firstBrace >= 0 && lastBrace > firstBrace) {
      try {
        return JSON.parse(cleaned.slice(firstBrace, lastBrace + 1))
      } catch {
        return null
      }
    }
    return null
  }
}

const getReportData = (day: any) => {
  const embedded = parseEmbeddedAnalysis(day.ai_analysis)
  return {
    system_health: day.system_health || embedded?.system_health || {},
    database_status: day.database_status || embedded?.database_status || {},
    activity_summary: day.activity_summary || embedded?.activity_summary || {},
    issues_detected: day.issues_detected?.length ? day.issues_detected : embedded?.issues_detected || [],
    recommendations: day.recommendations?.length ? day.recommendations : embedded?.recommendations || [],
    warnings: day.warnings?.length ? day.warnings : embedded?.warnings || [],
    ai_analysis: embedded?.ai_analysis || day.ai_analysis || '',
  }
}

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
    
    // Calculate average health score
    const avgHealthScore = monitoringData?.length > 0 
      ? Math.round(monitoringData.reduce((sum, d) => sum + (d.system_health?.score || 0), 0) / monitoringData.length)
      : 0

    // Simple email with basic summary
    const simpleEmail = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #3b82f6;">
    <h1 style="color: #1e293b; margin: 0; font-size: 24px;">Astraventa Intelligence Report</h1>
    <p style="color: #64748b; margin: 10px 0 0 0; font-size: 14px;">${monthName} ${targetYear}</p>
  </div>
  
  <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
    <h2 style="color: #1e293b; font-size: 16px; margin: 0 0 15px 0;">Quick Summary</h2>
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; font-size: 14px;">
      <div style="padding: 10px; background: white; border-radius: 4px;">
        <strong>Blog Posts:</strong> ${posts?.length || 0}
      </div>
      <div style="padding: 10px; background: white; border-radius: 4px;">
        <strong>Job Positions:</strong> ${positions?.length || 0}
      </div>
      <div style="padding: 10px; background: white; border-radius: 4px;">
        <strong>Applications:</strong> ${applications?.length || 0}
      </div>
      <div style="padding: 10px; background: white; border-radius: 4px;">
        <strong>Contact Leads:</strong> ${contactSubmissions?.length || 0}
      </div>
      <div style="padding: 10px; background: white; border-radius: 4px;">
        <strong>Demo Requests:</strong> ${demoRequests?.length || 0}
      </div>
      <div style="padding: 10px; background: white; border-radius: 4px;">
        <strong>New Subscribers:</strong> ${newsletterSubscribers?.length || 0}
      </div>
    </div>
    <div style="margin-top: 15px; padding: 15px; background: ${avgHealthScore >= 70 ? '#dcfce7' : avgHealthScore >= 40 ? '#fef9c3' : '#fee2e2'}; border-radius: 8px;">
      <strong>Average Health Score:</strong> ${avgHealthScore}/100
    </div>
  </div>
  
  <p style="color: #64748b; font-size: 12px; text-align: center; margin-top: 30px;">
    Detailed report attached.<br>
    Generated on ${new Date().toLocaleString()}
  </p>
</div>`

    // Detailed HTML for PDF
    const detailedHtmlReport = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Astraventa Intelligence Report - ${monthName} ${targetYear}</title>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 900px; margin: 0 auto; padding: 40px 20px; background: #f8fafc; }
    .header { text-align: center; margin-bottom: 40px; padding: 40px; background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); border-radius: 20px; color: white; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    .header h1 { margin: 0; font-size: 32px; font-weight: 700; }
    .header p { margin: 10px 0 0 0; opacity: 0.9; font-size: 16px; }
    .section { background: white; padding: 30px; border-radius: 16px; margin-bottom: 24px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
    .section h2 { color: #1e293b; font-size: 22px; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 3px solid #3b82f6; }
    .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; }
    .stat-card { background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 24px; border-radius: 12px; border: 1px solid #e2e8f0; text-align: center; }
    .stat-card h3 { color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 8px 0; font-weight: 600; }
    .stat-card .value { color: #3b82f6; font-size: 36px; font-weight: 700; margin: 0; }
    .health-status { padding: 22px; border-radius: 16px; margin: 18px 0; border-left: 5px solid; }
    .health-healthy { background: #dcfce7; border-color: #22c55e; }
    .health-warning { background: #fef9c3; border-color: #eab308; }
    .health-critical { background: #fee2e2; border-color: #ef4444; }
    .mini-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; margin-top: 16px; }
    .mini-card { background: rgba(255,255,255,0.72); border: 1px solid rgba(148,163,184,0.25); padding: 16px; border-radius: 12px; }
    .mini-card strong { display: block; color: #334155; font-size: 12px; text-transform: uppercase; letter-spacing: .06em; margin-bottom: 6px; }
    .pill { display: inline-block; padding: 5px 10px; border-radius: 999px; font-size: 11px; font-weight: 800; letter-spacing: .04em; text-transform: uppercase; }
    .pill-healthy { background: #bbf7d0; color: #166534; }
    .pill-warning { background: #fef08a; color: #854d0e; }
    .pill-critical { background: #fecaca; color: #991b1b; }
    .issue-card { background: #fef2f2; border: 1px solid #fecaca; padding: 20px; border-radius: 12px; margin: 12px 0; border-left: 4px solid #ef4444; }
    .issue-medium { background: #fffbeb; border-color: #fcd34d; border-left-color: #f59e0b; }
    .issue-low { background: #eff6ff; border-color: #bfdbfe; border-left-color: #3b82f6; }
    .recommendation { background: #f0fdf4; border: 1px solid #bbf7d0; padding: 20px; border-radius: 12px; margin: 12px 0; border-left: 4px solid #22c55e; }
    .footer { margin-top: 40px; padding: 24px; background: #1e293b; border-radius: 12px; text-align: center; color: #94a3b8; font-size: 12px; }
    .footer a { color: #3b82f6; text-decoration: none; }
  </style>
</head>
<body>
  <div class="header">
    <h1>🚀 Astraventa Intelligence Report</h1>
    <p>${monthName} ${targetYear} | Comprehensive Monthly Analysis</p>
  </div>

  <div class="section">
    <h2>📊 Executive Summary</h2>
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
    <h2>💓 System Health Analysis</h2>
    ${monitoringData?.map(day => {
      const report = getReportData(day)
      const health = report.system_health
      const database = report.database_status
      const activity = report.activity_summary
      const statusClass = health?.status === 'healthy' ? 'health-healthy' : health?.status === 'warning' ? 'health-warning' : 'health-critical'
      const pillClass = health?.status === 'healthy' ? 'pill-healthy' : health?.status === 'warning' ? 'pill-warning' : 'pill-critical'
      const categories = activity?.categories || {}
      return `
        <div class="health-status ${statusClass}">
          <div style="display:flex; justify-content:space-between; gap:16px; align-items:flex-start; flex-wrap:wrap;">
            <div>
              <strong style="font-size:18px;">📅 ${new Date(day.created_at).toLocaleDateString()}</strong>
              <p style="margin:10px 0 0; color:#475569;">${escapeHtml(health?.details || 'No details available')}</p>
            </div>
            <div style="text-align:right;">
              <span class="pill ${pillClass}">${escapeHtml(health?.status || 'unknown')}</span>
              <div style="font-size:34px; font-weight:800; color:#0f172a; margin-top:8px;">${health?.score ?? 0}<span style="font-size:14px; color:#64748b;">/100</span></div>
            </div>
          </div>
          <div class="mini-grid">
            <div class="mini-card"><strong>Tables</strong>${escapeHtml(database?.tables || 'No table details')}</div>
            <div class="mini-card"><strong>Connections</strong>${escapeHtml(database?.connections || 'No connection details')}</div>
            <div class="mini-card"><strong>Performance</strong>${escapeHtml(database?.performance || 'No performance details')}</div>
            <div class="mini-card"><strong>Total Events</strong>${activity?.total_events ?? 0}</div>
          </div>
          <div class="mini-grid">
            ${Object.entries(categories).map(([key, value]) => `
              <div class="mini-card"><strong>${escapeHtml(String(key).replace(/_/g, ' '))}</strong>${escapeHtml(value)}</div>
            `).join('')}
          </div>
        </div>
      `
    }).join('') || '<p style="color: #64748b;">No monitoring data available for this month.</p>'}
  </div>

  <div class="section">
    <h2>⚠️ Issues Detected</h2>
    ${monitoringData?.flatMap(day => getReportData(day).issues_detected || []).map((issue: any, i) => `
      <div class="issue-card issue-${issue.severity}">
        <strong>🔴 ${escapeHtml(issue.severity?.toUpperCase())}: ${escapeHtml(issue.category)}</strong>
        <p>${escapeHtml(issue.description)}</p>
      </div>
    `).join('') || '<p style="color: #64748b;">No issues detected this month. 🎉</p>'}
  </div>

  <div class="section">
    <h2>💡 Recommendations</h2>
    ${monitoringData?.flatMap(day => getReportData(day).recommendations || []).map((rec: any, i) => `
      <div class="recommendation">
        <strong>📌 ${escapeHtml(rec.priority?.toUpperCase())} Priority:</strong> ${escapeHtml(rec.action)}
        <br><em>${escapeHtml(rec.reason)}</em>
      </div>
    `).join('') || '<p style="color: #64748b;">No recommendations for this month.</p>'}
  </div>

  <div class="section">
    <h2>⚡ Warnings</h2>
    ${monitoringData?.flatMap(day => getReportData(day).warnings || []).map((warning: any, i) => `
      <div style="background: #fffbeb; border: 1px solid #fcd34d; padding: 20px; border-radius: 12px; margin: 12px 0; border-left: 4px solid #f59e0b;">
        <strong>⚡ ${escapeHtml(warning.type)}:</strong> ${escapeHtml(warning.message)}
        <br><em>💡 Suggestion: ${escapeHtml(warning.suggestion)}</em>
      </div>
    `).join('') || '<p style="color: #64748b;">No warnings this month. ✅</p>'}
  </div>

  <div class="footer">
    <p>This report was automatically generated by Astraventa Intelligence Monitoring System 🤖</p>
    <p>Generated on ${new Date().toLocaleString()}</p>
  </div>
</body>
</html>`

    // Send email with simple summary and attach detailed HTML
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'reports@astraventa.com',
        to: adminEmail,
        subject: `Astraventa Intelligence Report - ${monthName} ${targetYear}`,
        html: simpleEmail,
        attachments: [
          {
            filename: `astraventa-intelligence-report-${monthName}-${targetYear}.html`,
            content: toBase64(detailedHtmlReport),
            type: 'text/html'
          }
        ]
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
