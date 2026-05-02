// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from 'jsr:@supabase/supabase-js@2'

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const resendApiKey = Deno.env.get('RESEND_API_KEY')!

const supabase = createClient(supabaseUrl, supabaseServiceKey)

Deno.serve(async (req) => {
  try {
    // Get unsent demo requests
    const { data: requests, error } = await supabase
      .from('demo_requests')
      .select('*')
      .eq('notification_sent', false)
      .limit(10)

    if (error) throw error

    if (!requests || requests.length === 0) {
      return new Response(JSON.stringify({ message: 'No pending requests' }), {
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Process each request
    for (const request of requests) {
      try {
        // Send email using Resend
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'Astraventa <demo@astraventa.com>',
            to: ['astraventahq@gmail.com'],
            subject: `Inquiry from ${request.email}`,
            html: `
              <!DOCTYPE html>
              <html>
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
              </head>
              <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #ffffff;">
                <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border: 1px solid #e5e7eb; padding: 40px;">
                  <h2 style="color: #111827; margin: 0 0 20px;">New Inquiry</h2>
                  <p style="color: #374151; margin: 0 0 20px;">Someone requested information about your case studies.</p>
                  
                  <div style="background-color: #f9fafb; padding: 20px; border-radius: 4px; margin: 0 0 20px;">
                    <p style="margin: 0 0 8px;"><strong>Email:</strong> ${request.email}</p>
                    ${request.case_study_id ? `<p style="margin: 0 0 8px;"><strong>Interest:</strong> ${request.case_study_id}</p>` : ''}
                    <p style="margin: 0;"><strong>Time:</strong> ${new Date(request.created_at).toLocaleString()}</p>
                  </div>
                  
                  <p style="color: #374151; margin: 0;">Please follow up within 2 hours.</p>
                </div>
              </body>
              </html>
            `
          })
        })

        if (emailResponse.ok) {
          // Mark as sent
          await supabase
            .from('demo_requests')
            .update({ 
              notification_sent: true,
              notification_sent_at: new Date().toISOString()
            })
            .eq('id', request.id)
        }
      } catch (error) {
        console.error('Error processing request:', error)
      }
    }

    return new Response(JSON.stringify({ 
      message: `Processed ${requests.length} requests` 
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
