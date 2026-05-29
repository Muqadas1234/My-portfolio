import { useState, useEffect } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { HiChevronDown, HiChevronUp, HiX } from 'react-icons/hi'

const PLACEHOLDER = '/certificates/placeholder.svg'

export default function CertificateCard({ cert }) {
  const [imgSrc, setImgSrc] = useState(cert.image || PLACEHOLDER)
  const [expanded, setExpanded] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const hasDetails = cert.description || cert.skills?.length > 0
  const canPreviewImage = imgSrc !== PLACEHOLDER

  const openLightbox = () => {
    if (canPreviewImage) setLightboxOpen(true)
  }

  useEffect(() => {
    if (!lightboxOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [lightboxOpen])

  return (
    <>
      <article className="card flex flex-col overflow-hidden p-0 h-full">
        <button
          type="button"
          onClick={openLightbox}
          disabled={!canPreviewImage}
          className={`border-b border-neutral-200 bg-neutral-100 w-full text-left ${
            canPreviewImage ? 'cursor-zoom-in hover:opacity-95' : 'cursor-default'
          }`}
          aria-label={canPreviewImage ? `View ${cert.title} certificate` : undefined}
        >
          <img
            src={imgSrc}
            alt={`${cert.title} certificate`}
            className="w-full h-40 sm:h-44 object-cover object-top bg-white pointer-events-none"
            onError={() => setImgSrc(PLACEHOLDER)}
          />
          {canPreviewImage && (
            <p className="text-center text-xs py-1 text-neutral-600 bg-neutral-50 border-t border-neutral-200">
              Click image to view full certificate
            </p>
          )}
        </button>

        <div className="p-3 flex flex-col flex-1 gap-1.5">
          <div className="min-h-[5.25rem]">
            <p className="text-label">{cert.issuer}</p>
            <h4 className="text-title-md mt-0.5 leading-snug line-clamp-2">{cert.title}</h4>
            {cert.subtitle && (
              <p className="text-body-sm text-neutral-600 mt-1 line-clamp-2">{cert.subtitle}</p>
            )}
            {cert.relatedProject ? (
              <p className="text-body-sm mt-0.5 line-clamp-1">
                <span className="text-neutral-500">Project: </span>
                <span className="font-medium text-black">{cert.relatedProject}</span>
              </p>
            ) : (
              <p className="text-body-sm mt-0.5 invisible" aria-hidden="true">
                &nbsp;
              </p>
            )}
          </div>

          {expanded && (
            <div className="space-y-2">
              {cert.description && <p className="text-body-sm">{cert.description}</p>}

              {cert.skills?.length > 0 && (
                <div>
                  <p className="text-label mb-1.5">Skills & Knowledge</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="skill-tag text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="flex-1 min-h-0" aria-hidden="true" />

          <div className="flex flex-col gap-2 shrink-0">
            {hasDetails && (
              <button
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
                className="inline-flex items-center justify-center gap-2 w-full rounded-md bg-black py-2 text-sm font-semibold text-white hover:bg-neutral-800"
              >
                {expanded ? (
                  <>
                    Read Less
                    <HiChevronUp />
                  </>
                ) : (
                  <>
                    Read More
                    <HiChevronDown />
                  </>
                )}
              </button>
            )}

            {cert.url && (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full rounded-md border-2 border-black py-2 text-sm font-semibold text-black hover:bg-neutral-100"
              >
                {cert.credentialLabel || 'View Credential'}
                <FaExternalLinkAlt className="text-xs" />
              </a>
            )}
          </div>
        </div>
      </article>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80"
          role="dialog"
          aria-modal="true"
          aria-label={`${cert.title} certificate preview`}
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 rounded-full bg-white p-2 text-black hover:bg-neutral-200"
            aria-label="Close preview"
          >
            <HiX size={24} />
          </button>

          <img
            src={imgSrc}
            alt={`${cert.title} certificate full view`}
            className="max-h-[90vh] max-w-full w-auto rounded-lg shadow-2xl object-contain bg-white"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
