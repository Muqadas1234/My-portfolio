export default function SectionHeader({ label, title, description }) {
  return (
    <header className="mb-6 sm:mb-8 text-center flex flex-col items-center">
      {label && <p className="text-3xl sm:text-4xl font-extrabold text-black mb-1">{label}</p>}
      {title && <h2 className="text-base sm:text-lg font-normal text-neutral-500 uppercase tracking-widest">{title}</h2>}
      {description && <p className="text-base sm:text-lg mt-3 max-w-2xl mx-auto text-neutral-700">{description}</p>}
    </header>
  )
}

