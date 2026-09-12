import { useState, useEffect } from 'react'
import { HiDownload, HiLocationMarker } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { personalInfo } from '../../data/portfolioData'
import { trackResumeDownload, trackGitHubClick, trackLinkedInClick, logClick } from '../../utils/analytics'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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
        <div className="text-left space-y-5">
          {/* Greeting Typed Name */}
          <motion.div
            variants={itemVariants}
            className="text-lg sm:text-xl font-mono text-neutral-600 flex items-center min-h-[1.75rem]"
          >
            <span>{typedText}</span>
            <span className="animate-pulse ml-1 text-neutral-400 font-light" style={{ animationDuration: '0.8s' }}>|</span>
          </motion.div>

          {/* Tagline Role */}
          <motion.div variants={itemVariants}>
            <span className="inline-block rounded-full border border-neutral-300 bg-neutral-100 px-3.5 py-1 text-xs sm:text-sm font-semibold text-black tracking-wide">
              {personalInfo.title}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-display text-3xl xs:text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-black leading-tight tracking-tight"
          >
            Turning Ideas Into Intelligent Digital Products
          </motion.h1>

          {/* Detailed Highlighting Descriptions */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 max-w-2xl text-neutral-700 text-sm sm:text-base leading-relaxed"
          >
            <p>
              Specializing in <strong className="font-semibold text-black">AI-powered applications, intelligent chatbots, AI agents, voice assistants, and full-stack web development</strong>, I build digital products that help businesses <strong className="font-semibold text-black">enhance their digital experiences, engage their users, and bring innovative ideas to life.</strong>
            </p>
            <p>
              I combine modern software engineering with AI technologies to create <strong className="font-semibold text-black">intuitive, scalable, and impactful products</strong> — from polished user interfaces and robust backends to intelligent features that add meaningful value to businesses and their customers.
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="flex justify-start"
          >
            <p className="inline-flex items-center gap-2 text-body-sm font-medium text-neutral-600">
              <HiLocationMarker className="flex-shrink-0 text-black" aria-hidden="true" />
              {personalInfo.location}
            </p>
          </motion.div>

          {/* CTA Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <button
              type="button"
              onClick={() => {
                logClick('Explore_Portfolio_Hero', 'Explore Portfolio Click')
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary"
            >
              Explore Portfolio
            </button>
            <button
              type="button"
              onClick={() => {
                logClick('Get_In_Touch_Hero', 'Get In Touch Click')
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-secondary"
            >
              Get In Touch
            </button>
            <a 
              href={personalInfo.resumeUrl} 
              download 
              className="btn-secondary inline-flex items-center gap-2"
              onClick={() => trackResumeDownload()}
            >
              <HiDownload />
              Resume
            </a>
            <div className="flex items-center gap-2 pl-1">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-neutral-300 text-neutral-700 hover:text-black hover:border-black transition-colors"
                onClick={() => trackLinkedInClick('Hero')}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-neutral-300 text-neutral-700 hover:text-black hover:border-black transition-colors"
                onClick={() => trackGitHubClick('Hero')}
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
            </div>
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
