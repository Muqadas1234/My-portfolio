import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { navLinks } from '../../data/portfolioData'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
      const sections = navLinks.map((link) => document.getElementById(link.id))
      const scrollPos = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id) => {
    setIsOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors ${
        scrolled ? 'border-neutral-200 bg-white' : 'border-transparent bg-white/95'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('home')
          }}
          className="text-title-md font-mono"
        >
          MA
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`nav-link ${activeSection === link.id ? 'font-semibold text-black' : ''}`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>



        <button
          type="button"
          className="lg:hidden p-2 text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white">
          <ul className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`block w-full text-left px-3 py-2.5 rounded text-sm ${
                    activeSection === link.id ? 'font-semibold text-black bg-neutral-100' : 'text-neutral-600'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}

          </ul>
        </div>
      )}
    </header>
  )
}
