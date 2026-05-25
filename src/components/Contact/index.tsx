import { motion } from 'framer-motion'
import { CheckCircle2, Mail, MapPin, Phone, Send, X } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { fadeUp, viewport } from '../../animations/motion'
import { config } from '../../services/config'

type FormValues = {
  name: string
  email: string
  message: string
  botcheck: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

type SubmitState = 'idle' | 'success' | 'error'

const initialValues: FormValues = {
  name: '',
  email: '',
  message: '',
  botcheck: '',
}

const validateForm = (values: FormValues): FormErrors => {
  const errors: FormErrors = {}
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!values.name.trim()) {
    errors.name = 'Name is required.'
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.message.trim()) {
    errors.message = 'Message is required.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }

  return errors
}

function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [statusMessage, setStatusMessage] = useState('Ready for a serious build.')
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validateForm(values)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSubmitState('error')
      setStatusMessage('Please fix the highlighted fields.')
      return
    }

    if (values.botcheck.trim()) {
      setSubmitState('success')
      setStatusMessage('Message prepared successfully.')
      return
    }

    const subject = `Portfolio contact from ${values.name.trim()}`
    const body = [
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      '',
      values.message.trim(),
    ].join('\n')
    const mailLink = `mailto:${config.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailLink
    setErrors({})
    setSubmitState('success')
    setStatusMessage('Email draft opened. Please press send.')
    setShowSuccessPopup(true)
  }

  return (
    <section id="contact" className="section-pad bg-paper">
      <div className="container-narrow text-center">
        <div className="section-label">Contact</div>
        <p className="mx-auto max-w-readable text-base leading-7 text-ink/80">
          Send a project idea, internship opportunity, collaboration brief, or
          role requirement. I will respond with a clear next step.
        </p>

        <div className="mt-6 grid min-w-0 gap-6 text-left sm:mt-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-8">
          <div className="space-y-3">
            {[
              { label: 'Email', value: config.contact.email, icon: Mail },
              { label: 'Phone', value: config.contact.phone, icon: Phone, href: `tel:${config.contact.phone}` },
              { label: 'Location', value: config.contact.location, icon: MapPin },
            ].map((item) => {
              const Icon = item.icon
              const content = (
                <>
                  <Icon size={18} />
                  <p className="mt-2 micro-copy">{item.label}</p>
                  <p className="mt-2 break-words text-sm font-bold text-ink">{item.value}</p>
                </>
              )

              return item.href ? (
                <a key={item.label} href={item.href} className="block border-b border-line pb-5">
                  {content}
                </a>
              ) : (
                <div key={item.label} className="border-b border-line pb-5">
                  {content}
                </div>
              )
            })}
          </div>

          <motion.form
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="min-w-0 space-y-4"
            noValidate
          >
            <input
              type="text"
              name="botcheck"
              value={values.botcheck}
              onChange={(event) => updateField('botcheck', event.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <label className="block">
              <span className="sr-only">Name</span>
              <input
                className="field"
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={(event) => updateField('name', event.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
              />
              {errors.name && (
                <span id="contact-name-error" className="mt-2 block text-xs font-semibold text-red-700">
                  {errors.name}
                </span>
              )}
            </label>

            <label className="block">
              <span className="sr-only">Email</span>
              <input
                className="field"
                name="email"
                type="email"
                placeholder="Email"
                value={values.email}
                onChange={(event) => updateField('email', event.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
              />
              {errors.email && (
                <span id="contact-email-error" className="mt-2 block text-xs font-semibold text-red-700">
                  {errors.email}
                </span>
              )}
            </label>

            <label className="block">
              <span className="sr-only">Message</span>
              <textarea
                className="field min-h-28 resize-none"
                name="message"
                placeholder="Message"
                value={values.message}
                onChange={(event) => updateField('message', event.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
              />
              {errors.message && (
                <span id="contact-message-error" className="mt-2 block text-xs font-semibold text-red-700">
                  {errors.message}
                </span>
              )}
            </label>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                type="submit"
                className="primary-button disabled:pointer-events-none disabled:opacity-55"
              >
                Send
                <Send size={14} />
              </button>
              <p
                className={`text-xs font-semibold ${
                  submitState === 'success'
                    ? 'text-green-700'
                    : submitState === 'error'
                      ? 'text-red-700'
                      : 'text-ink/70'
                }`}
                role="status"
                aria-live="polite"
              >
                {statusMessage}
              </p>
            </div>
          </motion.form>
        </div>
      </div>

      {showSuccessPopup && (
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.96 }}
          className="fixed bottom-5 left-1/2 z-[80] w-[min(calc(100vw-2rem),28rem)] -translate-x-1/2 rounded-2xl border border-line bg-white px-5 py-4 text-left shadow-soft"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-start gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-full border border-ink bg-ink text-white">
              <CheckCircle2 size={18} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-ink">Email Draft Ready</p>
              <p className="mt-1 text-sm leading-6 text-ink/72">
                Your message is prepared for {config.contact.email}. Please press send in your email app to deliver it.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowSuccessPopup(false)}
              className="grid size-8 shrink-0 place-items-center rounded-full border border-line text-ink transition hover:border-ink hover:bg-ink hover:text-white"
              aria-label="Close popup"
            >
              <X size={15} />
            </button>
          </div>
        </motion.div>
      )}
    </section>
  )
}

export default Contact
