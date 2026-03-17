import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// ── Rate limiting ─────────────────────────────────────────────────────────────
// In-memory store: effective within a single server instance.
// For multi-instance deployments, replace with an Upstash Redis rate limiter.
const rateLimitMap = new Map<string, number[]>()
const WINDOW_MS   = 10 * 60 * 1000 // 10 minutes
const MAX_REQUESTS = 5

function isRateLimited(ip: string): boolean {
  const now       = Date.now()
  const history   = (rateLimitMap.get(ip) ?? []).filter(t => now - t < WINDOW_MS)
  if (history.length >= MAX_REQUESTS) return true
  rateLimitMap.set(ip, [...history, now])
  return false
}

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  )
}

// ── Sanitization ──────────────────────────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function sanitizeText(value: unknown, maxLength = 200): string {
  if (typeof value !== 'string') return ''
  return value
    .trim()
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .slice(0, maxLength)
}

function sanitizeEmail(value: unknown): string | null {
  const str = sanitizeText(value, 254)
  return EMAIL_RE.test(str) ? str : null
}

// ── Handler ───────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  const ip = getClientIp(req)
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  if (typeof body !== 'object' || body === null) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const raw = body as Record<string, unknown>

  const firstName = sanitizeText(raw.firstName)
  const lastName  = sanitizeText(raw.lastName)
  const email     = sanitizeEmail(raw.email)
  const tourType  = sanitizeText(raw.tourType)
  const groupSize = sanitizeText(raw.groupSize)
  const date      = sanitizeText(raw.date, 20)
  const message   = sanitizeText(raw.message, 2000)

  if (!firstName || !lastName || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from:    'Lao Mai Travel <onboarding@resend.dev>',
    to:      'br33m4rk@gmail.com', // TODO: change to info@laomaitravel.com after verifying domain in Resend
    replyTo: email,
    subject: `New Booking Inquiry from ${firstName} ${lastName}`,
    html: `
      <h2>New Booking Inquiry</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Tour Type:</strong> ${tourType || 'Not specified'}</p>
      <p><strong>Group Size:</strong> ${groupSize || 'Not specified'}</p>
      <p><strong>Preferred Date:</strong> ${date || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${message || 'No message provided'}</p>
    `,
  })

  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
