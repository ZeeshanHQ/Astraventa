// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from 'jsr:@supabase/supabase-js@2'

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const resendApiKey = Deno.env.get('RESEND_API_KEY')!

const supabase = createClient(supabaseUrl, supabaseServiceKey)

Deno.serve(async (req) => {
  try {
    const { email, name } = await req.json()

    if (!email) {
      return new Response('Email is required', { status: 400 })
    }

    // Generate confirmation token
    const confirmationToken = crypto.randomUUID()

    // Insert subscriber with pending status
    const { error: insertError } = await supabase
      .from('newsletter_subscribers')
      .insert({
        email,
        name: name || null,
        status: 'pending',
        confirmation_token: confirmationToken
      })

    if (insertError) {
      // Check if email already exists
      if (insertError.code === '23505') {
        return new Response('Email already subscribed', { status: 409 })
      }
      throw insertError
    }

    // Send confirmation email
    const confirmUrl = `${supabaseUrl}/functions/v1/confirm-newsletter?token=${confirmationToken}`

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Astraventa <newsletter@astraventa.com>',
        to: [email],
        subject: 'Confirm your subscription to Astraventa Newsletter',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #050505;">
            <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; overflow-hidden;">
              <div style="background: linear-gradient(135deg, #0d9488 0%, #059669 100%); padding: 40px; text-align: center;">
                <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">Astraventa</h1>
                <p style="margin: 8px 0 0; color: #ccfbf1; font-size: 14px;">Engineering the automated future</p>
              </div>
              
              <div style="padding: 40px;">
                <h2 style="margin: 0 0 16px; color: #1e293b; font-size: 24px; font-weight: 600;">Confirm Your Subscription</h2>
                <p style="margin: 0 0 24px; color: #64748b; line-height: 1.6;">Thanks for signing up! Please confirm your email address to receive our weekly AI automation insights.</p>
                
                <div style="text-align: center; margin: 32px 0;">
                  <a href="${confirmUrl}" style="display: inline-block; background: linear-gradient(135deg, #0d9488 0%, #059669 100%); color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 600;">Confirm Email</a>
                </div>
                
                <p style="margin: 24px 0 0; color: #94a3b8; font-size: 14px;">This link will expire in 24 hours.</p>
              </div>
              
              <div style="background-color: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0;">
                <p style="margin: 0 0 8px; color: #64748b; font-size: 12px;">© 2026 Astraventa. All rights reserved.</p>
              </div>
            </div>
          </body>
          </html>
        `
      })
    })

    if (!emailResponse.ok) {
      throw new Error('Failed to send confirmation email')
    }

    return new Response(JSON.stringify({ message: 'Confirmation email sent' }), {
      headers: { 'Content-Type': 'application/json' }
    })

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
})
