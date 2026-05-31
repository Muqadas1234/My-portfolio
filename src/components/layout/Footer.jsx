import { personalInfo, navLinks } from '../../data/portfolioData'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer id="connect" className="border-t border-neutral-900 bg-black text-neutral-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Personal Info */}
          <div>
            <p className="text-title-md font-semibold text-white">{personalInfo.name}</p>
            <p className="text-body-sm mt-1 text-neutral-400">{personalInfo.subtitle}</p>
          </div>

          {/* Navigation & Location */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Navigation</p>
            <nav className="flex flex-wrap gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-body-sm text-neutral-400 hover:text-white transition-colors font-medium w-fit"
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <p className="text-body-sm text-neutral-400 pt-2 border-t border-neutral-900 w-fit">{personalInfo.location}</p>
          </div>

          {/* Contact Details (Connect Me) */}
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Connect Me</p>
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-body-sm text-neutral-400 hover:text-white transition-colors w-fit">
              <FaEnvelope className="text-neutral-500" /> {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-body-sm text-neutral-400 hover:text-white transition-colors w-fit">
              <FaPhone className="text-neutral-500" /> {personalInfo.phone}
            </a>
            <a href="https://wa.me/923198288490" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-body-sm text-neutral-400 hover:text-white transition-colors w-fit">
              <FaWhatsapp className="text-neutral-500" /> Chat on WhatsApp
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-body-sm text-neutral-400 hover:text-white transition-colors w-fit">
              <FaGithub className="text-neutral-500" /> GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-body-sm text-neutral-400 hover:text-white transition-colors w-fit">
              <FaLinkedin className="text-neutral-500" /> LinkedIn
            </a>
          </div>
        </div>

        <p className="text-body-sm text-center mt-8 pt-8 border-t border-neutral-900 text-neutral-500">
          © {year} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}



