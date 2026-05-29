import { HiAcademicCap } from 'react-icons/hi'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeader from '../ui/SectionHeader'
import { education } from '../../data/portfolioData'

export default function Education() {
  return (
    <SectionWrapper id="education" className="pt-24">
      <SectionHeader
        label="Education"
        title="Academic Background"
        description="Building a strong foundation in computer science and applied AI."
      />

      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-4xl mx-auto">
        <article className="card flex flex-col justify-between gap-6 max-w-md w-full border border-neutral-200">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded border border-neutral-300 flex items-center justify-center flex-shrink-0">
              <HiAcademicCap size={20} className="text-black" />
            </div>
            <div>
              <h3 className="text-title-lg">{education.degree}</h3>
              <p className="text-body font-semibold text-black mt-0">{education.institution}</p>
            </div>
          </div>

          <div className="flex gap-10 ml-14">
            <div>
              <dt className="text-label">CGPA</dt>
              <dd className="text-title-md mt-0">{education.cgpa}</dd>
            </div>
            <div>
              <dt className="text-label">Computer Science</dt>
              <dd className="text-title-md mt-0 font-mono text-black">{education.duration}</dd>
            </div>
          </div>

          <div className="mt-auto">
            <span className="inline-flex items-center rounded-full bg-black px-2.5 py-1 text-body-sm font-semibold text-white">
              Duration: {education.duration}
            </span>
          </div>
        </article>

        <article className="card flex flex-col justify-between gap-6 max-w-md w-full border border-neutral-200">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <img src="/certificates/harvard.jpg" alt="Harvard logo" className="w-10 h-10 object-contain rounded" />
              <div>
                <p className="text-label uppercase tracking-wider text-neutral-500">Online Leadership Program</p>
                <h3 className="text-title-lg">{education.programTitle}</h3>
                <p className="text-body-sm text-neutral-700">{education.programSubtitle}</p>
              </div>
            </div>
            <p className="text-body-sm leading-relaxed text-neutral-700">
              {education.programDescription}
            </p>
          </div>

          <div className="mt-auto">
            <span className="inline-flex items-center rounded-full bg-black px-2.5 py-1 text-body-sm font-semibold text-white">
              Duration: {education.programDuration}
            </span>
          </div>
        </article>
      </div>
    </SectionWrapper>
  )
}
