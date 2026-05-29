import SectionWrapper from '../ui/SectionWrapper'
import SectionHeader from '../ui/SectionHeader'
import { personalInfo } from '../../data/portfolioData'

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeader
        label="About"
        title="More About Me"
        description={personalInfo.aboutShort}
      />

      <div className="card max-w-3xl mx-auto">
        <p className="text-body text-justify">{personalInfo.aboutLong}</p>
        <dl className="mt-6 pt-6 border-t border-neutral-200 grid sm:grid-cols-3 gap-4">
          <div>
            <dt className="text-label">Education</dt>
            <dd className="text-body-sm mt-1 font-medium text-black">BSc CS (Honors)</dd>
          </div>
          <div>
            <dt className="text-label">University</dt>
            <dd className="text-body-sm mt-1 font-medium text-black">Sukkur IBA University</dd>
          </div>
          <div>
            <dt className="text-label">Location</dt>
            <dd className="text-body-sm mt-1 font-medium text-black">{personalInfo.location}</dd>
          </div>
        </dl>
      </div>
    </SectionWrapper>
  )
}
