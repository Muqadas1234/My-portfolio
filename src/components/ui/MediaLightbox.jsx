import { useEffect } from 'react'
import { HiX } from 'react-icons/hi'

export default function MediaLightbox({ open, onClose, title, type, src, youtubeId }) {
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

  if (!open) return null

  const watchUrl = youtubeId ? `https://www.youtube.com/watch?v=${youtubeId}` : null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 rounded-full bg-white p-2 text-black hover:bg-neutral-200 z-10"
        aria-label="Close"
      >
        <HiX size={24} />
      </button>

      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        {type === 'image' && (
          <img
            src={src}
            alt={title}
            className="max-h-[90vh] w-full rounded-lg object-contain bg-white"
          />
        )}

        {type === 'youtube' && youtubeId && (
          <div className="aspect-video w-full overflow-hidden rounded-lg border border-neutral-700 bg-black">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
              title={title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        )}

        {watchUrl && (
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-center text-sm font-semibold text-white underline hover:no-underline"
          >
            Open on YouTube
          </a>
        )}
      </div>
    </div>
  )
}
