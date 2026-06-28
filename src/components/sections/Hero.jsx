import { useState, useEffect } from 'react'
import { HiDownload, HiLocationMarker } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { personalInfo } from '../../data/portfolioData'
import { trackResumeDownload, trackGitHubClick, trackLinkedInClick } from '../../utils/analytics'

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const fullName = `Hi, I am ${personalInfo.name}`

  useEffect(() => {
    let timer

    const tick = () => {
      setTypedText((prev) => {
        if (!isDeleting) {
          if (prev === fullName) {
            setIsDeleting(true)
            return prev
          }
          return fullName.substring(0, prev.length + 1)
        } else {
          if (prev === '') {
            setIsDeleting(false)
            return prev
          }
          return fullName.substring(0, prev.length - 1)
        }
      })
    }

    timer = setTimeout(tick, isDeleting ? 75 : 120)

    return () => clearTimeout(timer)
  }, [typedText, isDeleting, fullName])

  return (
    <section id="home" className="pt-24 pb-16 bg-white text-black min-h-[90vh] flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-neutral-50 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Open to opportunities
          </div>

          <div className="space-y-4">
            <h1 className="text-display-md md:text-display-lg font-bold tracking-tight text-neutral-900 min-h-[4.5rem]">
              {typedText}
              <span className="inline-block w-[3px] h-[2.5rem] bg-black ml-1 animate-pulse" />
            </h1>
            <p className="text-title-lg text-neutral-800 font-semibold leading-relaxed">
              {personalInfo.title}
            </p>
            <p className="text-body-lg text-neutral-500 leading-relaxed">
              {personalInfo.aboutShort}
            </p>
          </div>

          <div className="flex items-center gap-2 text-body-sm text-neutral-500 font-medium">
            <HiLocationMarker className="text-neutral-400 text-lg" />
            {personalInfo.location}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
              onClick={() => trackLinkedInClick('Hero')}
            >
              <FaLinkedin />
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto"
              onClick={() => trackGitHubClick('Hero')}
            >
              <FaGithub />
              GitHub
            </a>
            <a 
              href={personalInfo.resumeUrl} 
              download 
              className="btn-secondary w-full sm:w-auto"
              onClick={() => trackResumeDownload()}
            >
              <HiDownload />
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-100 shadow-sm">
            <img
              src={personalInfo.heroImage}
              alt={`${personalInfo.name} profile`}
              className="h-full w-full max-w-sm object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
