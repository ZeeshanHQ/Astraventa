// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from 'jsr:@supabase/supabase-js@2'

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

const supabase = createClient(supabaseUrl, supabaseServiceKey)

Deno.serve(async (req) => {
  try {
    const url = new URL(req.url)
    const token = url.searchParams.get('token')

    if (!token) {
      return new Response('Missing confirmation token', { status: 400 })
    }

    // Find subscriber by token
    const { data: subscriber, error } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .eq('confirmation_token', token)
      .single()

    if (error || !subscriber) {
      return new Response('Invalid confirmation token', { status: 400 })
    }

    if (subscriber.status === 'confirmed') {
      return new Response('Email already confirmed', { status: 200 })
    }

    // Update status to confirmed
    const { error: updateError } = await supabase
      .from('newsletter_subscribers')
      .update({ 
        status: 'confirmed',
        confirmed_at: new Date().toISOString()
      })
      .eq('id', subscriber.id)

    if (updateError) {
      return new Response('Failed to confirm email', { status: 500 })
    }

    // Return HTML success page
    return new Response(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Confirmed - Astraventa</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #050505;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
          }
          .container {
            text-align: center;
            padding: 40px;
            max-width: 500px;
          }
          .check {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #0d9488 0%, #059669 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 30px;
          }
          h1 {
            font-size: 28px;
            margin: 0 0 15px;
            font-weight: 700;
          }
          p {
            color: #64748b;
            line-height: 1.6;
            margin: 0 0 30px;
          }
          .button {
            display: inline-block;
            background: linear-gradient(135deg, #0d9488 0%, #059669 100%);
            color: white;
            padding: 14px 32px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="check">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h1>Email Confirmed!</h1>
          <p>You've been successfully added to the Astraventa newsletter. Get ready for weekly AI automation insights.</p>
          <a href="https://astraventa.com" class="button">Return to Homepage</a>
        </div>
      </body>
      </html>
    `, {
      headers: { 'Content-Type': 'text/html' }
    })

  } catch (error) {
    return new Response('Server error', { status: 500 })
  }
})
