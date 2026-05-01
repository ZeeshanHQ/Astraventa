// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from 'jsr:@supabase/supabase-js@2'

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const resendApiKey = Deno.env.get('RESEND_API_KEY')!

const supabase = createClient(supabaseUrl, supabaseServiceKey)

Deno.serve(async (req) => {
  try {
    // Get pending contact submissions
    const { data: submissions, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .eq('status', 'pending')
      .limit(10)

    if (error) throw error

    if (!submissions || submissions.length === 0) {
      return new Response(JSON.stringify({ message: 'No pending submissions' }), {
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Process each submission
    for (const submission of submissions) {
      try {
        // Send email to admin
        const adminEmailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'Astraventa <hello@astraventa.com>',
            to: ['astraventahq@gmail.com'],
            subject: `New Contact Inquiry - ${submission.name}`,
            html: `
              <!DOCTYPE html>
              <html>
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>New Contact Inquiry - Astraventa</title>
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
                    <h2 style="margin: 0 0 16px; color: #1e293b; font-size: 24px; font-weight: 600;">New Contact Inquiry Received</h2>
                    <p style="margin: 0 0 24px; color: #64748b; font-size: 16px; line-height: 1.6;">A potential client has reached out through the contact form.</p>
                    
                    <!-- Contact Details -->
                    <div style="background: #f0fdf4; border-left: 4px solid #0d9488; padding: 24px; border-radius: 8px; margin: 24px 0;">
                      <div style="margin-bottom: 16px;">
                        <span style="display: block; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Name</span>
                        <span style="color: #1e293b; font-size: 16px; font-weight: 600;">${submission.name}</span>
                      </div>
                      <div style="margin-bottom: 16px;">
                        <span style="display: block; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Email</span>
                        <span style="color: #1e293b; font-size: 16px; font-weight: 600;">${submission.email}</span>
                      </div>
                      ${submission.company ? `
                      <div style="margin-bottom: 16px;">
                        <span style="display: block; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Company</span>
                        <span style="color: #1e293b; font-size: 16px; font-weight: 600;">${submission.company}</span>
                      </div>
                      ` : ''}
                      ${submission.phone ? `
                      <div style="margin-bottom: 16px;">
                        <span style="display: block; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Phone</span>
                        <span style="color: #1e293b; font-size: 16px; font-weight: 600;">${submission.phone}</span>
                      </div>
                      ` : ''}
                      <div style="margin-bottom: 16px;">
                        <span style="display: block; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Service Needed</span>
                        <span style="color: #1e293b; font-size: 16px; font-weight: 600;">${submission.service}</span>
                      </div>
                      ${submission.budget ? `
                      <div style="margin-bottom: 16px;">
                        <span style="display: block; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Budget Range</span>
                        <span style="color: #1e293b; font-size: 16px; font-weight: 600;">${submission.budget}</span>
                      </div>
                      ` : ''}
                      ${submission.timeline ? `
                      <div style="margin-bottom: 16px;">
                        <span style="display: block; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Timeline</span>
                        <span style="color: #1e293b; font-size: 16px; font-weight: 600;">${submission.timeline}</span>
                      </div>
                      ` : ''}
                      <div>
                        <span style="display: block; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Message</span>
                        <p style="color: #1e293b; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${submission.message}</p>
                      </div>
                    </div>
                    
                    <!-- Action Items -->
                    <div style="background: #f1f5f9; padding: 24px; border-radius: 8px; margin: 24px 0;">
                      <h3 style="margin: 0 0 12px; color: #334155; font-size: 16px; font-weight: 600;">Next Steps</h3>
                      <ul style="margin: 0; padding-left: 20px; color: #475569; font-size: 14px; line-height: 1.8;">
                        <li>Review the inquiry details</li>
                        <li>Research the prospect's company</li>
                        <li>Follow up within 2 hours with a personalized response</li>
                        <li>Schedule a discovery call if appropriate</li>
                      </ul>
                    </div>
                    
                    <!-- CTA -->
                    <div style="text-align: center; margin: 32px 0;">
                      <a href="mailto:${submission.email}" style="display: inline-block; background: linear-gradient(135deg, #0d9488 0%, #059669 100%); color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">Reply to ${submission.name}</a>
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

        // Send confirmation email to user
        const userEmailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'Astraventa <hello@astraventa.com>',
            to: [submission.email],
            subject: 'Thank you for contacting Astraventa',
            html: `
              <!DOCTYPE html>
              <html>
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Thank you for contacting Astraventa</title>
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
                    <h2 style="margin: 0 0 16px; color: #1e293b; font-size: 24px; font-weight: 600;">Thank You, ${submission.name}!</h2>
                    <p style="margin: 0 0 24px; color: #64748b; font-size: 16px; line-height: 1.6;">We've received your inquiry and our team is reviewing it now.</p>
                    
                    <!-- Summary -->
                    <div style="background: #f0fdf4; border-left: 4px solid #0d9488; padding: 24px; border-radius: 8px; margin: 24px 0;">
                      <h3 style="margin: 0 0 16px; color: #1e293b; font-size: 16px; font-weight: 600;">Your Inquiry Summary</h3>
                      <div style="margin-bottom: 12px;">
                        <span style="display: block; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Service</span>
                        <span style="color: #1e293b; font-size: 15px; font-weight: 600;">${submission.service}</span>
                      </div>
                      ${submission.budget ? `
                      <div style="margin-bottom: 12px;">
                        <span style="display: block; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Budget Range</span>
                        <span style="color: #1e293b; font-size: 15px; font-weight: 600;">${submission.budget}</span>
                      </div>
                      ` : ''}
                      ${submission.timeline ? `
                      <div>
                        <span style="display: block; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Timeline</span>
                        <span style="color: #1e293b; font-size: 15px; font-weight: 600;">${submission.timeline}</span>
                      </div>
                      ` : ''}
                    </div>
                    
                    <!-- What's Next -->
                    <div style="background: #f1f5f9; padding: 24px; border-radius: 8px; margin: 24px 0;">
                      <h3 style="margin: 0 0 12px; color: #334155; font-size: 16px; font-weight: 600;">What Happens Next</h3>
                      <ul style="margin: 0; padding-left: 20px; color: #475569; font-size: 14px; line-height: 1.8;">
                        <li>Our team reviews your inquiry within 2 hours</li>
                        <li>We'll send you a personalized response</li>
                        <li>If appropriate, we'll schedule a discovery call</li>
                        <li>We'll provide a detailed proposal tailored to your needs</li>
                      </ul>
                    </div>
                    
                    <!-- Contact Info -->
                    <div style="text-align: center; margin: 32px 0; padding: 24px; background: #f8fafc; border-radius: 8px;">
                      <p style="margin: 0 0 8px; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Need to reach us sooner?</p>
                      <a href="mailto:contact@astraventa.com" style="color: #0d9488; font-size: 16px; font-weight: 600; text-decoration: none;">contact@astraventa.com</a>
                    </div>
                  </div>
                  
                  <!-- Footer -->
                  <div style="background: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0;">
                    <p style="margin: 0 0 8px; color: #64748b; font-size: 12px;">Follow us on social media for updates</p>
                    <p style="margin: 0; color: #94a3b8; font-size: 11px;">© 2026 Astraventa. All rights reserved.</p>
                  </div>
                </div>
              </body>
              </html>
            `
          })
        })

        if (adminEmailResponse.ok && userEmailResponse.ok) {
          // Update submission status to contacted
          await supabase
            .from('contact_submissions')
            .update({ status: 'contacted' })
            .eq('id', submission.id)
        } else {
          // Update submission status to failed
          await supabase
            .from('contact_submissions')
            .update({ status: 'pending' })
            .eq('id', submission.id)
        }
      } catch (error) {
        console.error('Error processing submission:', error)
      }
    }

    return new Response(JSON.stringify({ 
      message: `Processed ${submissions.length} submissions` 
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

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/send-contact-notification' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type': application/json'

*/
