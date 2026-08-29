import { useState, useEffect } from 'react'
import { HiDownload, HiLocationMarker } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { personalInfo } from '../../data/portfolioData'
import { trackResumeDownload, trackGitHubClick, trackLinkedInClick } from '../../utils/analytics'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1], delay: 0.3 },
  },
}

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
      className="px-4 sm:px-6 lg:px-8 pt-28 pb-20 border-b border-neutral-200 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,_1.2fr)_minmax(0,_0.9fr)]"
      >
        <div className="text-left space-y-6">
          <motion.h1
            variants={itemVariants}
            className="text-display text-2xl xs:text-3xl sm:text-5xl lg:text-[3.5rem] min-h-[3rem] sm:min-h-[4rem] lg:min-h-[5rem] flex items-center whitespace-nowrap"
          >
            <span>{typedText}</span>
            <span className="animate-pulse ml-1 text-neutral-400 font-light" style={{ animationDuration: '0.8s' }}>|</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-title-sm font-semibold text-black"
          >
            {personalInfo.title}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-4 max-w-2xl"
          >
            {personalInfo.aboutHome.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-body-sm text-justify">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-start"
          >
            <p className="inline-flex items-center gap-2 text-body-sm font-medium text-black">
              <HiLocationMarker className="flex-shrink-0" aria-hidden="true" />
              {personalInfo.location}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start gap-3"
          >
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
          </motion.div>
        </div>

        <motion.div
          variants={imageVariants}
          className="flex items-center justify-center"
        >
          <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-100 shadow-sm">
            <img
              src={personalInfo.heroImage}
              alt={`${personalInfo.name} profile`}
              className="h-full w-full max-w-sm object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
