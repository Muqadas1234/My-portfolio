import { useState } from 'react'
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa'
import SectionWrapper from '../ui/SectionWrapper'
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
    <SectionWrapper id="contact" className="border-t border-neutral-200 bg-white py-8 sm:py-10">
      <div className="max-w-md mx-auto">
        {/* Minimalist Compact Header */}
        <div className="text-center mb-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Get In Touch</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black mt-1">Let's Connect</h2>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1 max-w-xs mx-auto">
            Got an opportunity or project? Drop a quick note below.
          </p>
        </div>

        {/* Ultra-Clean Compact Form Card */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
          {status === 'success' ? (
            <div className="py-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center mx-auto shadow-sm">
                <FaCheckCircle className="text-xl text-emerald-400" />
              </div>
              <h4 className="text-base font-bold text-black">Message Delivered!</h4>
              <p className="text-xs text-neutral-600 max-w-xs mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-black">{formData.name}</span>. I've received your note and will get back to you shortly.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-lg border border-neutral-300 bg-white px-4 py-1.5 text-xs font-semibold text-neutral-800 hover:border-black hover:text-black transition-colors"
                >
                  Send Another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-medium text-neutral-600 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full rounded-lg border border-neutral-200 bg-neutral-50/70 px-3 py-2 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[11px] font-medium text-neutral-600 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@email.com"
                    className="w-full rounded-lg border border-neutral-200 bg-neutral-50/70 px-3 py-2 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-[11px] font-medium text-neutral-600 mb-1">
                  Subject <span className="text-neutral-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Project Inquiry"
                  className="w-full rounded-lg border border-neutral-200 bg-neutral-50/70 px-3 py-2 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] font-medium text-neutral-600 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  className="w-full rounded-lg border border-neutral-200 bg-neutral-50/70 px-3 py-2 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-all resize-y min-h-[70px]"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full rounded-lg bg-black py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-neutral-800 transition-colors inline-flex items-center justify-center gap-2 shadow-sm disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-[10px]" />
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
