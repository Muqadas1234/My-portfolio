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

    // Simulate async submission and mailto fallback
    try {
      await new Promise((resolve) => setTimeout(resolve, 800))
      
      // Construct mailto link for direct delivery fallback
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || `Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`

      // Open mail client in background if user prefers
      window.location.href = mailtoLink

      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' })
    setStatus('idle')
  }

  return (
    <SectionWrapper id="contact" className="border-t border-neutral-200 bg-white">
      <SectionHeader
        label="Get in Touch"
        title="Contact"
        description="Have an opportunity, question, or project in mind? Feel free to reach out directly or send a message below."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto mt-8 items-start">
        {/* Left Column: Direct Info & Quick Actions */}
        <div className="lg:col-span-5 space-y-6">
          <div className="card space-y-4">
            <h3 className="text-title-md font-bold text-black">Contact Information</h3>
            <p className="text-body-sm text-neutral-600">
              I am actively looking for software engineering, full-stack, and AI/ML opportunities. Reach out through any of the channels below.
            </p>

            <div className="space-y-3 pt-2">
              {/* Email */}
              <div className="flex items-start justify-between gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-200 hover:border-black transition-colors">
                <a
                  href={`mailto:${personalInfo.email}`}
                  onClick={() => trackEmailClick()}
                  className="flex items-center gap-3 text-body-sm font-medium text-neutral-800 hover:text-black min-w-0"
                >
                  <div className="w-8 h-8 rounded-md bg-black text-white flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-xs" />
                  </div>
                  <span className="truncate">{personalInfo.email}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-xs font-semibold text-neutral-500 hover:text-black py-1 px-2 rounded bg-white border border-neutral-200 flex-shrink-0"
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
                className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-200 hover:border-black transition-colors group"
              >
                <div className="w-8 h-8 rounded-md bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="text-sm" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-neutral-500 font-medium">WhatsApp / Mobile</p>
                  <p className="text-body-sm font-medium text-neutral-900 group-hover:underline truncate">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-200">
                <div className="w-8 h-8 rounded-md bg-neutral-200 text-neutral-800 flex items-center justify-center flex-shrink-0">
                  <HiLocationMarker className="text-base" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-medium">Location</p>
                  <p className="text-body-sm font-medium text-neutral-900">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-3 border-t border-neutral-100 flex items-center gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackLinkedInClick('Contact')}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-md bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackGitHubClick('Contact')}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-md border-2 border-black bg-white text-black text-xs font-semibold hover:bg-neutral-100 transition-colors"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="card p-6 sm:p-8">
            {status === 'success' ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <FaCheckCircle className="text-3xl" />
                </div>
                <h4 className="text-title-lg font-bold text-black">Message Sent!</h4>
                <p className="text-body-sm text-neutral-600 max-w-md mx-auto">
                  Thank you for reaching out, <span className="font-semibold text-black">{formData.name}</span>. I have received your note and will get back to you as soon as possible.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn-secondary text-xs sm:text-sm py-2 px-5"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-title-md font-bold text-black">Send a Message</h3>
                <p className="text-body-sm text-neutral-500">
                  Fill in the details below and I will respond to your email.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full rounded-md border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="w-full rounded-md border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Subject <span className="text-neutral-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Project Inquiry / Job Opportunity"
                    className="w-full rounded-md border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    className="w-full rounded-md border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black transition-colors resize-y min-h-[100px]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full py-3 inline-flex items-center justify-center gap-2 font-semibold shadow-sm mt-2 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-xs" />
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
