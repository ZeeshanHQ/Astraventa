// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from 'jsr:@supabase/supabase-js@2'

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const resendApiKey = Deno.env.get('RESEND_API_KEY')!

const supabase = createClient(supabaseUrl, supabaseServiceKey)

Deno.serve(async (req) => {
  try {
    // Get pending notifications
    const { data: notifications, error } = await supabase
      .from('demo_request_notifications')
      .select('*')
      .eq('notification_status', 'pending')
      .limit(10)

    if (error) throw error

    if (!notifications || notifications.length === 0) {
      return new Response(JSON.stringify({ message: 'No pending notifications' }), {
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Process each notification
    for (const notification of notifications) {
      try {
        // Send email using Resend
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'Astraventa <hello@astraventa.com>',
            to: ['astraventahq@gmail.com'],
            subject: 'New Demo Request - Astraventa',
            html: `
              <!DOCTYPE html>
              <html>
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>New Demo Request - Astraventa</title>
              </head>
              <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8fafc;">
                <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); overflow: hidden;">
                  <!-- Header -->
                  <div style="background: linear-gradient(135deg, #0d9488 0%, #059669 100%); padding: 32px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">Astraventa</h1>
                    <p style="margin: 8px 0 0; color: #ccfbf1; font-size: 14px; font-weight: 500;">Engineering the automated future</p>
                  </div>
                  
                  <!-- Content -->
                  <div style="padding: 40px;">
                    <h2 style="margin: 0 0 16px; color: #1e293b; font-size: 24px; font-weight: 600;">New Demo Request Received</h2>
                    <p style="margin: 0 0 24px; color: #64748b; font-size: 16px; line-height: 1.6;">A potential client has requested a technical deep-dive for one of our case studies.</p>
                    
                    <!-- Details Box -->
                    <div style="background: #f0fdf4; border-left: 4px solid #0d9488; padding: 24px; border-radius: 8px; margin: 24px 0;">
                      <div style="margin-bottom: 16px;">
                        <span style="display: block; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Lead Email</span>
                        <span style="color: #1e293b; font-size: 16px; font-weight: 600;">${notification.email}</span>
                      </div>
                      ${notification.case_study_id ? `
                      <div style="margin-bottom: 16px;">
                        <span style="display: block; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Case Study Interest</span>
                        <span style="color: #1e293b; font-size: 16px; font-weight: 600; text-transform: capitalize;">${notification.case_study_id}</span>
                      </div>
                      ` : ''}
                      <div>
                        <span style="display: block; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Request Time</span>
                        <span style="color: #1e293b; font-size: 16px;">${new Date(notification.created_at).toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</span>
                      </div>
                    </div>
                    
                    <!-- Action Items -->
                    <div style="background: #f1f5f9; padding: 24px; border-radius: 8px; margin: 24px 0;">
                      <h3 style="margin: 0 0 12px; color: #334155; font-size: 16px; font-weight: 600;">Next Steps</h3>
                      <ul style="margin: 0; padding-left: 20px; color: #475569; font-size: 14px; line-height: 1.8;">
                        <li>Review the lead's information</li>
                        <li>Research their company and needs</li>
                        <li>Follow up within 2 hours with a personalized message</li>
                        <li>Schedule a technical deep-dive call</li>
                      </ul>
                    </div>
                    
                    <!-- CTA -->
                    <div style="text-align: center; margin: 32px 0;">
                      <a href="mailto:${notification.email}" style="display: inline-block; background: linear-gradient(135deg, #0d9488 0%, #059669 100%); color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">Reply to Lead</a>
                    </div>
                  </div>
                  
                  <!-- Footer -->
                  <div style="background: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0;">
                    <p style="margin: 0 0 8px; color: #64748b; font-size: 12px;">This is an automated notification from Astraventa</p>
                    <p style="margin: 0; color: #94a3b8; font-size: 11px;">© 2026 Astraventa. All rights reserved.</p>
                  </div>
                </div>
              </body>
              </html>
            `
          })
        })

        if (emailResponse.ok) {
          // Update notification status to sent
          await supabase
            .from('demo_request_notifications')
            .update({ 
              notification_status: 'sent',
              sent_at: new Date().toISOString()
            })
            .eq('id', notification.id)
        } else {
          // Update notification status to failed
          await supabase
            .from('demo_request_notifications')
            .update({ 
              notification_status: 'failed',
              error_message: 'Failed to send email'
            })
            .eq('id', notification.id)
        }
      } catch (error) {
        console.error('Error processing notification:', error)
        await supabase
          .from('demo_request_notifications')
          .update({ 
            notification_status: 'failed',
            error_message: error.message
          })
          .eq('id', notification.id)
      }
    }

    return new Response(JSON.stringify({ 
      message: `Processed ${notifications.length} notifications` 
    }), {
      headers: { 'Content-Type': 'application/json' }
    })

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
})

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/send-demo-notification' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json'

*/
