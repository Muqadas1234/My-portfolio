import SectionWrapper from '../ui/SectionWrapper'
import SectionHeader from '../ui/SectionHeader'
import { achievements } from '../../data/portfolioData'

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" className="section-alt">
      <SectionHeader
        label="Achievements"
        title="Recognition & Competitions"
        description="Research, hackathons, and programming challenges."
      />

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((item) => (
          <li key={item.title} className="card text-center sm:text-left">
            <p className="text-2xl mb-2" aria-hidden="true">
              {item.icon}
            </p>
            <h3 className="text-title-md">{item.title}</h3>
            <p className="text-body-sm mt-1">{item.subtitle}</p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  )
}
