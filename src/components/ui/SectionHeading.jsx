import { motion } from 'framer-motion';

export default function SectionHeading({ label, title, subtitle }) {
  return (
    <div className="mb-12 text-center md:mb-16">
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent-cyan"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-base text-gray-400 sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
      <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple" />
    </div>
  );
}
