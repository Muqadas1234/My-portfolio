import { motion } from 'framer-motion'

export default function SectionWrapper({ id, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`py-10 sm:py-12 px-4 sm:px-6 lg:px-8 ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </motion.section>
  )
}
