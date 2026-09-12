import { useState, useEffect } from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { personalInfo } from '../../data/portfolioData'
import { logClick } from '../../utils/analytics'
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
      className="min-h-[calc(100vh-4rem)] lg:h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-8 lg:pt-0 lg:pb-0 border-b border-neutral-200 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-6xl mx-auto grid items-center gap-6 lg:gap-10 lg:grid-cols-[minmax(0,_1.25fr)_minmax(0,_0.85fr)] py-2 lg:py-0"
      >
        <div className="text-left space-y-4">
          {/* Greeting Typed Name */}
          <motion.h1
            variants={itemVariants}
            className="text-display text-2xl xs:text-3xl sm:text-4xl lg:text-4xl min-h-[2.5rem] flex items-center whitespace-nowrap"
          >
            <span>{typedText}</span>
            <span className="animate-pulse ml-1 text-neutral-400 font-light" style={{ animationDuration: '0.8s' }}>|</span>
          </motion.h1>

          {/* Tagline Role */}
          <motion.div variants={itemVariants}>
            <span className="inline-block rounded-full border border-neutral-300 bg-neutral-100 px-3 py-0.5 text-xs sm:text-sm font-semibold text-black tracking-wide">
              {personalInfo.title}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-[1.75rem] font-bold text-neutral-900 tracking-tight leading-snug"
          >
            Turning Ideas Into Intelligent Digital Products
          </motion.h2>

          {/* Clean Description Paragraphs (Without Middle Bolding) */}
          <motion.div
            variants={itemVariants}
            className="space-y-2.5 max-w-2xl text-neutral-700 text-xs sm:text-sm leading-relaxed"
          >
            {personalInfo.aboutHome.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-justify">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="flex justify-start"
          >
            <p className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-black">
              <HiLocationMarker className="flex-shrink-0" aria-hidden="true" />
              {personalInfo.location}
            </p>
          </motion.div>

          {/* CTA Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row items-center gap-3 pt-1"
          >
            <button
              type="button"
              onClick={() => {
                logClick('Explore_Portfolio_Hero', 'Explore Portfolio Click')
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary py-2 px-5 text-xs sm:text-sm text-center"
            >
              Explore Portfolio
            </button>
            <button
              type="button"
              onClick={() => {
                logClick('Get_In_Touch_Hero', 'Get In Touch Click')
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-secondary py-2 px-5 text-xs sm:text-sm text-center"
            >
              Get In Touch
            </button>
          </motion.div>
        </div>

        <motion.div
          variants={imageVariants}
          className="flex items-center justify-center"
        >
          <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-100 shadow-sm max-w-[240px] sm:max-w-[280px] lg:max-w-[320px] aspect-square mx-auto">
            <img
              src={personalInfo.heroImage}
              alt={`${personalInfo.name} profile`}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
