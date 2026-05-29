import { personalInfo, navLinks } from '../../data/portfolioData'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Personal Info */}
          <div>
            <p className="text-title-md font-semibold text-black">{personalInfo.name}</p>
            <p className="text-body-sm mt-1 text-neutral-600">{personalInfo.subtitle}</p>
          </div>

          {/* Contact Details */}
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Connect Me</p>
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-body-sm text-neutral-600 hover:text-black transition-colors">
              <FaEnvelope className="text-neutral-500" /> {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-body-sm text-neutral-600 hover:text-black transition-colors">
              <FaPhone className="text-neutral-500" /> {personalInfo.phone}
            </a>
          </div>

          {/* Navigation & Socials */}
          <div className="space-y-4 md:text-right md:flex md:flex-col md:items-end">
            <nav className="flex flex-wrap gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollTo(link.id)}
                  className="text-body-sm text-neutral-600 hover:text-black transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="space-y-2 md:flex md:flex-col md:items-end">
              <div className="flex gap-4">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-black transition-colors" aria-label="GitHub">
                  <FaGithub size={20} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-black transition-colors" aria-label="LinkedIn">
                  <FaLinkedin size={20} />
                </a>
              </div>
              <p className="text-body-sm text-neutral-500 mt-1">{personalInfo.location}</p>
            </div>
          </div>
        </div>

        <p className="text-body-sm text-center mt-8 pt-8 border-t border-neutral-200 text-neutral-400">
          © {year} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}



