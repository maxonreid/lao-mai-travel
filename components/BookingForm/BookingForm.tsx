'use client'

import { useState, FormEvent } from 'react'
import { useTranslations } from 'next-intl'
import { CONTACT } from '@/lib/contact'
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

type FormErrors = Partial<Record<keyof FormData, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function BookingForm() {
  const t = useTranslations('booking')
  const tourTypes  = t.raw('tourTypes')  as string[]
  const groupSizes = t.raw('groupSizes') as string[]

  const [form, setForm] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    tourType:  tourTypes[0],
    groupSize: groupSizes[0],
    date: '',
    message: '',
  })
  const [status,    setStatus]    = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errors,    setErrors]    = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (data: FormData): FormErrors => {
    const errs: FormErrors = {}
    if (!data.firstName.trim()) errs.firstName = t('validation.firstNameRequired')
    if (!data.lastName.trim())  errs.lastName  = t('validation.lastNameRequired')
    if (!data.email.trim())     errs.email     = t('validation.emailRequired')
    else if (!EMAIL_RE.test(data.email)) errs.email = t('validation.emailInvalid')
    return errs
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    const updated = { ...form, [name]: value }
    setForm(updated)
    // Clear the error for this field as the user corrects it
    if (submitted && errors[name as keyof FormData]) {
      const fresh = validate(updated)
      setErrors(prev => ({ ...prev, [name as keyof FormData]: fresh[name as keyof FormData] }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const errs = validate(form)
    setErrors(errs)
    setSubmitted(true)
    if (Object.keys(errs).length > 0) return

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setTimeout(() => {
          setForm({ firstName: '', lastName: '', email: '', tourType: tourTypes[0], groupSize: groupSizes[0], date: '', message: '' })
          setStatus('idle')
          setErrors({})
          setSubmitted(false)
        }, 3000)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>

        {/* Left — info */}
        <div className={styles.info}>
          <div className={styles.eyebrow}>{t('eyebrow')}</div>
          <h2 className={styles.title}>
            {t('titleLine1')}<br /><em>{t('titleLine2')}</em>
          </h2>
          <p className={styles.desc}>{t('desc')}</p>
          <div className={styles.tagline}>{t('tagline')}</div>
          <div className={styles.contacts}>
            <div className={styles.contactItem}><span>📍</span><span>{t('address')}</span></div>
            <div className={styles.contactItem}><span>📞</span><a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phone}</a></div>
            <div className={styles.contactItem}><span>✉</span><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
          </div>
        </div>

        {/* Right — form */}
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.row}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="firstName">{t('labels.firstName')}</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder={t('placeholders.firstName')}
                className={`${styles.input} ${errors.firstName ? styles.inputError : ''}`}
                value={form.firstName}
                onChange={handleChange}
                aria-describedby={errors.firstName ? 'err-firstName' : undefined}
              />
              {errors.firstName && <span id="err-firstName" className={styles.errorMsg} role="alert">{errors.firstName}</span>}
            </div>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="lastName">{t('labels.lastName')}</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder={t('placeholders.lastName')}
                className={`${styles.input} ${errors.lastName ? styles.inputError : ''}`}
                value={form.lastName}
                onChange={handleChange}
                aria-describedby={errors.lastName ? 'err-lastName' : undefined}
              />
              {errors.lastName && <span id="err-lastName" className={styles.errorMsg} role="alert">{errors.lastName}</span>}
            </div>
          </div>

          <div className={styles.group}>
            <label className={styles.label} htmlFor="email">{t('labels.email')}</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder={t('placeholders.email')}
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              value={form.email}
              onChange={handleChange}
              aria-describedby={errors.email ? 'err-email' : undefined}
            />
            {errors.email && <span id="err-email" className={styles.errorMsg} role="alert">{errors.email}</span>}
          </div>

          <div className={styles.row}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="tourType">{t('labels.tourType')}</label>
              <select id="tourType" name="tourType" className={styles.input} value={form.tourType} onChange={handleChange}>
                {tourTypes.map((type) => <option key={type}>{type}</option>)}
              </select>
            </div>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="groupSize">{t('labels.groupSize')}</label>
              <select id="groupSize" name="groupSize" className={styles.input} value={form.groupSize} onChange={handleChange}>
                {groupSizes.map((size) => <option key={size}>{size}</option>)}
              </select>
            </div>
          </div>

          <div className={styles.group}>
            <label className={styles.label} htmlFor="date">{t('labels.date')}</label>
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
            <label className={styles.label} htmlFor="message">{t('labels.message')}</label>
            <textarea
              id="message"
              name="message"
              placeholder={t('placeholders.message')}
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
            {status === 'sending' && <span className={styles.spinner} aria-hidden="true" />}
            {status === 'sending' ? t('submit.sending')
              : status === 'sent'  ? t('submit.sent')
              : status === 'error' ? t('submit.error')
              :                      t('submit.idle')}
          </button>
        </form>

      </div>
    </section>
  )
}
