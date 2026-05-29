import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaYoutube, FaPlay, FaGlobe } from 'react-icons/fa'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeader from '../ui/SectionHeader'
import MediaLightbox from '../ui/MediaLightbox'
import { projects } from '../../data/portfolioData'

function StackRow({ label, items }) {
  if (!items?.length) return null
  return (
    <p className="text-body-sm">
      <span className="font-semibold text-black">{label}: </span>
      {items.join(' · ')}
    </p>
  )
}

function ProjectDemoButton({ videoId, title }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-black py-2 text-sm font-semibold text-white hover:bg-neutral-800"
      >
        <FaPlay className="text-xs" />
        Watch Demo
      </button>
      <MediaLightbox
        open={open}
        onClose={() => setOpen(false)}
        type="youtube"
        youtubeId={videoId}
        title={`${title} demo`}
      />
    </>
  )
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeader label="Projects" title="Featured Work" />

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((project) => (
          <article key={project.id} className="card-hover flex flex-col gap-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-title-md leading-snug">{project.title}</h3>
              {project.badge && (
                <span className="flex-shrink-0 rounded border border-black px-2 py-0.5 text-[10px] font-semibold uppercase">
                  FYP
                </span>
              )}
            </div>

            <div className="space-y-1.5">
              <StackRow label="Frontend" items={project.frontend} />
              <StackRow label="Backend" items={project.backend} />
            </div>

            <div className="mt-auto grid grid-rows-3 gap-2">
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-black py-2 text-sm font-semibold text-white hover:bg-neutral-800"
                >
                  <FaGlobe className="text-xs" />
                  Open Live App
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              ) : project.youtube ? (
                <ProjectDemoButton videoId={project.youtube} title={project.title} />
              ) : (
                <div className="invisible" aria-hidden="true">
                  placeholder
                </div>
              )}

              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-black py-2 text-sm font-semibold text-black hover:bg-neutral-100"
                >
                  <FaGithub />
                  GitHub
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              ) : (
                <div className="invisible" aria-hidden="true">
                  placeholder
                </div>
              )}

              {project.youtube ? (
                <a
                  href={`https://www.youtube.com/watch?v=${project.youtube}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-black py-2 text-sm font-semibold text-black hover:bg-neutral-100"
                >
                  <FaYoutube />
                  Watch on YouTube
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              ) : (
                <div className="invisible" aria-hidden="true">
                  placeholder
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}
