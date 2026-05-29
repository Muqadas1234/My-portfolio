import { useState } from 'react'
import { FaGithub, FaYoutube, FaExternalLinkAlt, FaCertificate } from 'react-icons/fa'
import MediaLightbox from './MediaLightbox'

export default function JourneyLinks({
  github,
  youtube,
  youtubeLabel = 'Watch on YouTube',
  certificateImage,
  certificateTitle = 'Internship Certificate',
}) {
  const [certOpen, setCertOpen] = useState(false)

  if (!github && !youtube && !certificateImage) return null

  return (
    <>
      <div className="flex flex-col sm:flex-row flex-wrap gap-2 mt-4">
        {certificateImage && (
          <button
            type="button"
            onClick={() => setCertOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
          >
            <FaCertificate />
            View Certificate
          </button>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-black px-4 py-2 text-sm font-semibold text-black hover:bg-neutral-100"
          >
            <FaGithub />
            View GitHub
            <FaExternalLinkAlt className="text-[10px]" />
          </a>
        )}
        {youtube && (
          <a
            href={youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-black px-4 py-2 text-sm font-semibold text-black hover:bg-neutral-100"
          >
            <FaYoutube />
            {youtubeLabel}
            <FaExternalLinkAlt className="text-[10px]" />
          </a>
        )}
      </div>

      {certificateImage && (
        <MediaLightbox
          open={certOpen}
          onClose={() => setCertOpen(false)}
          type="image"
          src={certificateImage}
          title={certificateTitle}
        />
      )}
    </>
  )
}
