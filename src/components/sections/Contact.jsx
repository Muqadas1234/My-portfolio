import { useState } from 'react'
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeader from '../ui/SectionHeader'
import { personalInfo } from '../../data/portfolioData'
import { trackContactFormSubmit } from '../../utils/analytics'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setStatus('submitting')
    trackContactFormSubmit(formData.subject)

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Portfolio Message from ${formData.name}`,
          message: formData.message,
          _subject: formData.subject ? `[Portfolio] ${formData.subject}` : `New Portfolio Inquiry from ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      if (response.ok) {
        setStatus('success')
      } else {
        window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
          formData.subject || `Message from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`
        setStatus('success')
      }
    } catch {
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || `Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`
      setStatus('success')
    }
  }

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' })
    setStatus('idle')
  }

  return (
    <SectionWrapper id="contact" className="border-t border-neutral-200 bg-white !pt-6 !pb-12 sm:!pt-8 sm:!pb-14">
      <SectionHeader
        label="Have a Project in Mind?"
        title="Get in Touch"
        description="Tell me about the product you're building, the AI features you'd like to integrate, or where you need full-stack expertise. I'll get back to you with the best way to bring your ideas to life."
      />

      <div className="max-w-xl mx-auto mt-4">
        <div className="card p-5 sm:p-6 shadow-sm border border-neutral-200">
          {status === 'success' ? (
            <div className="py-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <FaCheckCircle className="text-2xl" />
              </div>
              <h4 className="text-title-md font-bold text-black">Message Sent!</h4>
              <p className="text-body-sm text-neutral-600 max-w-sm mx-auto text-xs sm:text-sm">
                Thank you, <span className="font-semibold text-black">{formData.name}</span>. I have received your message and will respond to your email shortly.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn-secondary text-xs py-1.5 px-4"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <h3 className="text-title-sm font-bold text-black">Send a Message</h3>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Share your project details or requirements below and I'll get back to your email directly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded border border-neutral-300 bg-white px-3 py-1.5 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded border border-neutral-300 bg-white px-3 py-1.5 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                  Subject <span className="text-neutral-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Job Opportunity"
                  className="w-full rounded border border-neutral-300 bg-white px-3 py-1.5 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  className="w-full rounded border border-neutral-300 bg-white px-3 py-1.5 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-colors resize-y min-h-[75px]"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary w-full py-2.5 inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold shadow-sm mt-1 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-[11px]" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  )
}
