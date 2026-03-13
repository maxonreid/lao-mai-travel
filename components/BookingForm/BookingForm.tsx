'use client'

import { useState, FormEvent } from 'react'
import styles from './BookingForm.module.css'

interface FormData {
  firstName: string
  lastName: string
  email: string
  tourType: string
  groupSize: string
  date: string
  message: string
}

const tourTypes  = ['Day Tour', '2-Day Tour', 'Grand Laos Tour', 'Custom Itinerary']
const groupSizes = ['1–2 people', '3–5 people', '6–10 people', '10+ people']

export default function BookingForm() {
  const [form, setForm] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    tourType: tourTypes[0],
    groupSize: groupSizes[0],
    date: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>

        {/* Left — info */}
        <div className={styles.info}>
          <div className={styles.eyebrow}>PLAN YOUR JOURNEY</div>
          <h2 className={styles.title}>
            Book Your<br /><em>Laos Experience</em>
          </h2>
          <p className={styles.desc}>
            Tell us your dream trip — we&apos;ll get back to you within 24 hours with a
            personalised itinerary and quote. No commitment required.
          </p>
          <div className={styles.tagline}>
            &ldquo;Every great journey begins with a single conversation.&rdquo;
          </div>
          <div className={styles.contacts}>
            <div className={styles.contactItem}><span>📍</span><span>Vientiane, Lao PDR</span></div>
            <div className={styles.contactItem}><span>📞</span><span>+856 20 XXXX XXXX</span></div>
            <div className={styles.contactItem}><span>✉</span><span>info@laomaitravel.com</span></div>
          </div>
        </div>

        {/* Right — form */}
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.row}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="firstName">FIRST NAME</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Jean"
                className={styles.input}
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="lastName">LAST NAME</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Dupont"
                className={styles.input}
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.group}>
            <label className={styles.label} htmlFor="email">EMAIL ADDRESS</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="jean@email.com"
              className={styles.input}
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.row}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="tourType">TOUR TYPE</label>
              <select
                id="tourType"
                name="tourType"
                className={styles.input}
                value={form.tourType}
                onChange={handleChange}
              >
                {tourTypes.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="groupSize">GROUP SIZE</label>
              <select
                id="groupSize"
                name="groupSize"
                className={styles.input}
                value={form.groupSize}
                onChange={handleChange}
              >
                {groupSizes.map((g) => <option key={g}>{g}</option>)}
              </select>
            </div>
          </div>

          <div className={styles.group}>
            <label className={styles.label} htmlFor="date">PREFERRED DATE</label>
            <input
              id="date"
              name="date"
              type="date"
              className={styles.input}
              value={form.date}
              onChange={handleChange}
            />
          </div>

          <div className={styles.group}>
            <label className={styles.label} htmlFor="message">YOUR MESSAGE</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your dream trip..."
              className={styles.textarea}
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className={`${styles.submit} ${status === 'sent' ? styles.submitSuccess : ''}`}
            disabled={status === 'sending' || status === 'sent'}
          >
            {status === 'sending' && (
              <span className={styles.spinner} aria-hidden="true" />
            )}
            {status === 'sending' ? 'SENDING...'
              : status === 'sent'    ? '✓ INQUIRY SENT'
              : status === 'error'   ? 'ERROR — TRY AGAIN'
              : 'SEND INQUIRY →'}
          </button>
        </form>

      </div>
    </section>
  )
}
