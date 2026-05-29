import { useState, useEffect } from 'react'
import { HiDownload, HiLocationMarker } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { personalInfo } from '../../data/portfolioData'

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
          return fullName.slice(0, prev.length + 1)
        } else {
          if (prev === '') {
            setIsDeleting(false)
            return prev
          }
          return fullName.slice(0, prev.length - 1)
        }
      })
    }

    let delay = 100
    if (isDeleting) {
      delay = 50
    }
    if (!isDeleting && typedText === fullName) {
      delay = 2000 // Pause after typing completes
    } else if (isDeleting && typedText === '') {
      delay = 500 // Pause after erasing completes
    }

    timer = setTimeout(tick, delay)
    return () => clearTimeout(timer)
  }, [typedText, isDeleting, fullName])

  return (
    <section
      id="home"
      className="px-4 sm:px-6 lg:px-8 pt-28 pb-20 border-b border-neutral-200"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,_1.2fr)_minmax(0,_0.9fr)]">
        <div className="text-left">
          <h1 className="text-display text-2xl xs:text-3xl sm:text-5xl lg:text-[3.5rem] min-h-[3rem] sm:min-h-[4rem] lg:min-h-[5rem] flex items-center whitespace-nowrap">
            <span>{typedText}</span>
            <span className="animate-pulse ml-1 text-neutral-400 font-light" style={{ animationDuration: '0.8s' }}>|</span>
          </h1>
          <p className="mt-4 text-title-sm font-semibold text-center text-black">
            AI/ML Engineer | Full Stack Developer | Conversational AI Agents | Python Developer | Hackathons Participant
          </p>

          <div className="mt-8 space-y-4 max-w-2xl">
            {personalInfo.aboutHome.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-body-sm text-justify">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <p className="inline-flex items-center gap-2 text-body-sm font-medium text-black">
              <HiLocationMarker className="flex-shrink-0" aria-hidden="true" />
              {personalInfo.location}
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              <FaLinkedin />
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              <FaGithub />
              GitHub
            </a>
            <a href={personalInfo.resumeUrl} download className="btn-secondary w-full sm:w-auto">
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
