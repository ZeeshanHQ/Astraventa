import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from 'jsr:@supabase/supabase-js@2'

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const resendApiKey = Deno.env.get('RESEND_API_KEY')!

const supabase = createClient(supabaseUrl, supabaseServiceKey)

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const uniqueEmails = (emails: Array<string | null | undefined>) =>
  [...new Set(emails.filter((email): email is string => Boolean(email)).map((email) => email.trim().toLowerCase()))]

const getRecipients = async (audience: string) => {
  const groups: string[][] = []

  if (audience === 'all' || audience === 'newsletter') {
    const { data } = await supabase
      .from('newsletter_subscribers')
      .select('email')
      .in('status', ['confirmed', 'pending'])
    groups.push((data || []).map((item) => item.email))
  }

  if (audience === 'all' || audience === 'leads') {
    const { data: contacts } = await supabase
      .from('contact_submissions')
      .select('email')
    const { data: demos } = await supabase
      .from('demo_requests')
      .select('email')
    groups.push((contacts || []).map((item) => item.email))
    groups.push((demos || []).map((item) => item.email))
  }

  if (audience === 'all' || audience === 'applicants') {
    const { data } = await supabase
      .from('career_applications')
      .select('email')
    groups.push((data || []).map((item) => item.email))
  }

  return uniqueEmails(groups.flat())
}

const createHtml = (kind: 'blog' | 'career', item: any) => {
  const isBlog = kind === 'blog'
  const title = isBlog ? item.title : item.title
  const subtitle = isBlog ? item.excerpt : `${item.team || 'Astraventa'} · ${item.location || 'Remote'} · ${item.type || 'Open role'}`
  const description = isBlog ? 'We just published a new insight from Astraventa.' : 'A new career opportunity is now open at Astraventa.'
  const buttonText = isBlog ? 'Read the post' : 'View open roles'
  const buttonUrl = isBlog ? `https://astraventa.com/blog/${item.id}` : 'https://astraventa.com/careers'

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
      </head>
      <body style="margin:0;padding:0;background:#050505;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
        <div style="max-width:640px;margin:40px auto;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 24px 80px rgba(0,0,0,0.18);">
          <div style="background:#000000;padding:38px 40px;text-align:left;">
            <div style="color:#ffffff;font-size:13px;letter-spacing:0.18em;text-transform:uppercase;font-weight:700;margin-bottom:18px;">Astraventa</div>
            <h1 style="margin:0;color:#ffffff;font-size:32px;line-height:1.1;letter-spacing:-0.04em;font-weight:750;">${title}</h1>
            <p style="margin:16px 0 0;color:rgba(255,255,255,0.72);font-size:15px;line-height:1.6;">${description}</p>
          </div>
          <div style="padding:40px;">
            <p style="margin:0 0 28px;color:#334155;font-size:16px;line-height:1.7;">${subtitle || description}</p>
            ${!isBlog && item.description ? `<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:22px;margin-bottom:28px;color:#475569;font-size:15px;line-height:1.7;">${item.description}</div>` : ''}
            <a href="${buttonUrl}" style="display:inline-block;background:#000000;color:#ffffff;text-decoration:none;border-radius:999px;padding:14px 24px;font-size:13px;font-weight:700;letter-spacing:0.04em;">${buttonText}</a>
          </div>
          <div style="padding:24px 40px;background:#f8fafc;border-top:1px solid #e2e8f0;">
            <p style="margin:0;color:#64748b;font-size:12px;line-height:1.6;">You received this because your email exists in Astraventa website records. If this was not expected, you can ignore this email.</p>
          </div>
        </div>
      </body>
    </html>
  `
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { kind, audience = 'all', item } = await req.json()

    if (!['blog', 'career'].includes(kind)) {
      return new Response(JSON.stringify({ error: 'Invalid broadcast type' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
    }

    if (!item?.title) {
      return new Response(JSON.stringify({ error: 'Title is required' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
    }

    const recipients = await getRecipients(audience)

    if (recipients.length === 0) {
      return new Response(JSON.stringify({ sent: 0, message: 'No recipients found' }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
    }

    const fromEmail = kind === 'blog' ? 'Astraventa <newsletter@astraventa.com>' : 'Astraventa <careers@astraventa.com>'
    const subject = kind === 'blog' ? `New from Astraventa: ${item.title}` : `New role at Astraventa: ${item.title}`
    const html = createHtml(kind, item)
    let sent = 0

    for (let i = 0; i < recipients.length; i += 50) {
      const batch = recipients.slice(i, i + 50)
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          bcc: batch,
          to: ['astraventahq@gmail.com'],
          subject,
          html,
        }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(errorText)
      }

      sent += batch.length
    }

    return new Response(JSON.stringify({ sent }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
  }
})
