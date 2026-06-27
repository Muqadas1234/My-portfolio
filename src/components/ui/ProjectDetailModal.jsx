import { useEffect } from 'react'
import { HiX } from 'react-icons/hi'
import { FaGithub, FaExternalLinkAlt, FaYoutube, FaGlobe } from 'react-icons/fa'
import { logClick } from '../../utils/analytics'

export default function ProjectDetailModal({ project, open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  if (!open || !project) return null

  // Helper to parse description dynamically with sub-bullets and bold Roman numerals
  const renderFormattedDescription = (desc) => {
    if (!desc) return null;
    return desc.split('\n').map((line, idx) => {
      const trimmed = line.trim();
      
      // Render general section header if it ends with a colon (e.g. "Key Features:")
      if (trimmed.endsWith(':')) {
        return (
          <h5 key={idx} className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mt-5 mb-2">
            {trimmed}
          </h5>
        );
      }

      // Check if line starts with Roman numerals (e.g., I, II, III, IV, etc.)
      const romanRegex = /^(I|II|III|IV|V|VI|VII|VIII|IX|X)\b/;
      if (romanRegex.test(trimmed)) {
        const colonIndex = trimmed.indexOf(':');
        if (colonIndex !== -1) {
          const boldText = trimmed.substring(0, colonIndex + 1);
          const normalText = trimmed.substring(colonIndex + 1);
          
          // Split Roman numeral and Title
          const firstDot = boldText.indexOf('.');
          const roman = firstDot !== -1 ? boldText.substring(0, firstDot).trim() : '•';
          const title = firstDot !== -1 ? boldText.substring(firstDot + 1).trim() : boldText;

          return (
            <div key={idx} className="flex gap-3 rounded-xl border border-neutral-200 bg-neutral-50/50 p-4 transition-colors hover:border-neutral-450 text-left my-2">
              {/* Roman circular badge */}
              <span className="flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-black text-white text-[10px] font-bold mt-0.5">
                {roman}
              </span>
              <div className="flex-1">
                <span className="font-bold text-black text-sm block">{title}</span>
                <span className="text-neutral-600 text-xs leading-relaxed mt-1 block">{normalText}</span>
              </div>
            </div>
          );
        } else {
          // Roman numeral without colon
          const firstDot = trimmed.indexOf('.');
          const roman = firstDot !== -1 ? trimmed.substring(0, firstDot).trim() : '•';
          const title = firstDot !== -1 ? trimmed.substring(firstDot + 1).trim() : trimmed;

          return (
            <div key={idx} className="flex gap-3 rounded-xl border border-neutral-200 bg-neutral-50/50 p-4 transition-colors hover:border-neutral-400 text-left my-2">
              <span className="flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-black text-white text-[10px] font-bold mt-0.5">
                {roman}
              </span>
              <div className="flex-1">
                <span className="font-bold text-black text-sm block">{title}</span>
              </div>
            </div>
          );
        }
      }

      // Format sub-bullets (lines starting with - or •)
      if (trimmed.startsWith('-') || trimmed.startsWith('•')) {
        return (
          <div key={idx} className="pl-8 -indent-4 text-xs leading-relaxed text-neutral-600 text-left my-1">
            <span className="font-bold text-black mr-2">•</span>
            <span>{trimmed.substring(1).trim()}</span>
          </div>
        );
      }

      // Empty line spacer
      if (!trimmed) {
        return <div key={idx} className="h-1.5" />;
      }

      // Default line paragraph
      return (
        <p key={idx} className="text-xs sm:text-sm leading-relaxed text-neutral-650 text-left">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col gap-5 border border-neutral-200 animate-in fade-in zoom-in-95 duration-200 overflow-y-auto max-h-[85vh] no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-black transition-colors z-10 p-1 rounded-full hover:bg-neutral-100"
          aria-label="Close details"
        >
          <HiX size={20} />
        </button>

        {/* Header */}
        <div className="space-y-1.5 pr-8 text-left">
          {project.badge && (
            <span className="inline-block rounded border border-black px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-black">
              {project.badge}
            </span>
          )}
          <h3 className="text-2xl font-bold text-black tracking-tight leading-snug">
            {project.title}
          </h3>
        </div>

        {/* Body Content */}
        <div className="space-y-3 border-t border-neutral-200 pt-4">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 text-left">
            Project Overview
          </h4>
          <div className="space-y-2 pr-1">
            {renderFormattedDescription(project.description)}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-3 border-t border-neutral-200 pt-4 text-left">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Technology Stack
          </h4>
          
          <div className="grid sm:grid-cols-2 gap-4 text-xs">
            {project.frontend && project.frontend.length > 0 && (
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                  Frontend
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.frontend.map((tech) => (
                    <span 
                      key={tech} 
                      className="rounded border border-neutral-300 bg-neutral-50 px-2.5 py-1 text-xs text-neutral-800 transition-colors hover:border-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.backend && project.backend.length > 0 && (
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                  Backend & AI
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.backend.map((tech) => (
                    <span 
                      key={tech} 
                      className="rounded border border-neutral-300 bg-neutral-50 px-2.5 py-1 text-xs text-neutral-800 transition-colors hover:border-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Links / Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 border-t border-neutral-200 pt-4 mt-1">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 py-2 text-sm inline-flex items-center justify-center gap-2"
              onClick={() => logClick('Modal_Live_App_' + project.title, 'Open Live App in Modal ' + project.title)}
            >
              <FaGlobe className="text-xs" />
              Open Live App
              <FaExternalLinkAlt className="text-[10px]" />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex-1 py-2 text-sm inline-flex items-center justify-center gap-2"
              onClick={() => logClick('Modal_GitHub_Repo_' + project.title, 'Open GitHub Repo in Modal ' + project.title)}
            >
              <FaGithub className="text-xs" />
              GitHub
              <FaExternalLinkAlt className="text-[10px]" />
            </a>
          )}

          {project.youtube && (
            <a
              href={`https://www.youtube.com/watch?v=${project.youtube}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-300 bg-white px-6 py-2 text-sm font-semibold text-neutral-700 hover:border-black hover:text-black flex-1 transition-colors"
              onClick={() => logClick('Modal_Watch_Youtube_' + project.title, 'Watch Video Demo in Modal ' + project.title)}
            >
              <FaYoutube className="text-red-600 text-xs" />
              Video Demo
              <FaExternalLinkAlt className="text-[10px]" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
