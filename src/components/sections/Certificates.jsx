import { useState } from 'react'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeader from '../ui/SectionHeader'
import CertificateCard from './CertificateCard'
import { certificateGroups } from '../../data/portfolioData'

export default function Certificates() {
  const [showAll, setShowAll] = useState(false)
  const allCertificates = certificateGroups.flatMap((group) =>
    group.items.map((cert) => ({ ...cert, category: group.category }))
  )
  const visibleCertificates = showAll ? allCertificates : allCertificates.slice(0, 6)

  const groupedCertificates = visibleCertificates.reduce((groups, cert) => {
    if (!groups[cert.category]) groups[cert.category] = []
    groups[cert.category].push(cert)
    return groups
  }, {})

  return (
    <SectionWrapper id="certificates" className="section-alt">
      <SectionHeader
        label="Certificates & Credentials"
        description="Click Read More to view description and skills."
      />

      <div className="space-y-12 max-w-5xl mx-auto">
        {Object.entries(groupedCertificates).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-title-md mb-5">{category}</h3>
            <ul className="grid sm:grid-cols-3 gap-4 auto-rows-fr">
              {items.map((cert) => (
                <li key={cert.id} className="h-full">
                  <CertificateCard cert={cert} />
                </li>
              ))}
            </ul>
          </div>
        ))}

        {allCertificates.length > 6 && (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="btn-secondary"
            >
              {showAll ? 'Show less certificates' : 'See more certificates'}
            </button>
          </div>
        )}
      </div>
    </SectionWrapper>
  )
}
