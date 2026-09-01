import { useState } from 'react'
import { FaEnvelope, FaPhone, FaWhatsapp, FaGithub, FaLinkedin, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeader from '../ui/SectionHeader'
import { personalInfo } from '../../data/portfolioData'
import { trackContactFormSubmit, trackEmailClick, trackWhatsAppClick, trackGitHubClick, trackLinkedInClick } from '../../utils/analytics'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [copied, setCopied] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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
        // Fallback to direct mailto if external endpoint has issues
        window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
          formData.subject || `Message from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`
        setStatus('success')
      }
    } catch {
      // Direct mailto fallback on network error
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
    <SectionWrapper id="contact" className="border-t border-neutral-200 bg-white py-10 sm:py-12">
      <SectionHeader
        label="Get in Touch"
        title="Contact"
        description="Have an opportunity or project in mind? Feel free to reach out directly or send a quick message."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-4xl mx-auto mt-6 items-start">
        {/* Left Column: Direct Info & Quick Actions */}
        <div className="lg:col-span-5 space-y-4">
          <div className="card p-4 sm:p-5 space-y-3">
            <h3 className="text-title-sm font-bold text-black">Contact Information</h3>
            <p className="text-body-sm text-neutral-600 text-xs sm:text-sm">
              I am open to software engineering, full-stack, and AI/ML opportunities. Reach out anytime.
            </p>

            <div className="space-y-2 pt-1">
              {/* Email */}
              <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-neutral-50 border border-neutral-200 hover:border-black transition-colors">
                <a
                  href={`mailto:${personalInfo.email}`}
                  onClick={() => trackEmailClick()}
                  className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-neutral-800 hover:text-black min-w-0"
                >
                  <div className="w-7 h-7 rounded bg-black text-white flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-[10px]" />
                  </div>
                  <span className="truncate">{personalInfo.email}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-[11px] font-semibold text-neutral-500 hover:text-black py-0.5 px-2 rounded bg-white border border-neutral-200 flex-shrink-0"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>

              {/* WhatsApp / Phone */}
              <a
                href="https://wa.me/923198288490"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick()}
                className="flex items-center gap-2.5 p-2.5 rounded-lg bg-neutral-50 border border-neutral-200 hover:border-black transition-colors group"
              >
                <div className="w-7 h-7 rounded bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="text-xs" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-neutral-500 font-medium leading-none mb-0.5">WhatsApp / Phone</p>
                  <p className="text-xs sm:text-sm font-medium text-neutral-900 group-hover:underline truncate">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-neutral-50 border border-neutral-200">
                <div className="w-7 h-7 rounded bg-neutral-200 text-neutral-800 flex items-center justify-center flex-shrink-0">
                  <HiLocationMarker className="text-sm" />
                </div>
                <div>
                  <p className="text-[10px] text-neutral-500 font-medium leading-none mb-0.5">Location</p>
                  <p className="text-xs sm:text-sm font-medium text-neutral-900">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-2 border-t border-neutral-100 flex items-center gap-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackLinkedInClick('Contact')}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
              >
                <FaLinkedin className="text-xs" /> LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackGitHubClick('Contact')}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded border border-black bg-white text-black text-xs font-semibold hover:bg-neutral-100 transition-colors"
              >
                <FaGithub className="text-xs" /> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="card p-4 sm:p-6">
            {status === 'success' ? (
              <div className="py-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <FaCheckCircle className="text-2xl" />
                </div>
                <h4 className="text-title-md font-bold text-black">Message Sent!</h4>
                <p className="text-body-sm text-neutral-600 max-w-sm mx-auto text-xs sm:text-sm">
                  Thank you, <span className="font-semibold text-black">{formData.name}</span>. I have received your message and will respond shortly.
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
                  <p className="text-[11px] sm:text-xs text-neutral-500 mt-0.5">
                    Fill in the form and I will get back to your email directly.
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
      </div>
    </SectionWrapper>
  )
}
