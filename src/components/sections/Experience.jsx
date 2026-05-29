import { useState } from 'react'
import { HiBriefcase, HiAcademicCap, HiX } from 'react-icons/hi'
import SectionWrapper from '../ui/SectionWrapper'
import SectionHeader from '../ui/SectionHeader'
import JourneyLinks from '../ui/JourneyLinks'
import { experience } from '../../data/portfolioData'

const PAPER_TITLE = 'Link Prediction in Bitcoin Transaction Graphs Using Graph Neural Networks'

const ABSTRACT = `This paper presents the application of Graph Neural Networks (GNNs) to blockchain link prediction using the Elliptic2 dataset, which is a blockchain transaction network. We compare the performance results of four GNN architectures, that is, Graph Convolutional Networks (GCN), Graph Attention Networks (GAT), GraphSAGE, and a Hybrid model that combines all three, on the task of predicting links between blockchain transactions. The results show that GraphSAGE performs better than the other models with the best accuracy (96.98%), the F1-Score (97.07%), and the AUC-ROC (98.79%) demonstrating that the model is useful in both the capability to utilize local graph structures and sparse and dynamic networks. The Hybrid model has the highest AUC-ROC (99.17%), but its F1-Score (96.47%) is lower than that of GraphSAGE (97.07%), indicating that the extra complexity may not be justified by the marginal performance gain. The results of these findings help to gain useful insights into the application of the most suitable architecture as far as blockchain link prediction activity is concerned.`

const KEYWORDS = 'Link prediction, Bitcoin, transactions, graphs, GNNs'

function AbstractModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-white p-8 shadow-2xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-black transition-colors"
          aria-label="Close abstract"
        >
          <HiX size={22} />
        </button>

        {/* Paper title */}
        <h2 className="text-title-md font-extrabold text-black leading-snug pr-6">
          {PAPER_TITLE}
        </h2>

        <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-neutral-400">
          iCOMET 2026 · 5th IEEE International Conference · Sukkur IBA University
        </p>

        <hr className="my-5 border-neutral-200" />

        {/* Abstract */}
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">Abstract</p>
        <p className="text-body-sm leading-relaxed text-neutral-700">{ABSTRACT}</p>

        {/* Keywords */}
        <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-1">Keywords</p>
        <p className="text-body-sm text-neutral-600">{KEYWORDS}</p>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center rounded-full bg-black px-5 py-2 text-sm font-semibold text-white hover:bg-neutral-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const [showAbstract, setShowAbstract] = useState(false)

  return (
    <SectionWrapper id="experience" className="section-alt">
      <SectionHeader
        label="Experience"
        title="Work & Training"
        description="Hands-on experience in Python education and applied machine learning."
      />

      <ul className="space-y-6 max-w-4xl mx-auto">
        {experience.map((job) => (
          <li key={`${job.company}-${job.title}`} className="card">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div className="flex items-start gap-3">
                <div className="hidden sm:flex w-10 h-10 rounded border border-neutral-300 items-center justify-center flex-shrink-0">
                  <HiBriefcase size={18} className="text-black" />
                </div>
                <div>
                  <h3 className="text-title-lg">{job.title}</h3>
                  <p className="text-body-sm font-semibold text-black mt-0.5">{job.company}</p>
                </div>
              </div>
              <div className="flex flex-col sm:items-end text-left sm:text-right">
                <span className="text-body-sm font-mono">{job.period}</span>
                {job.location && <p className="text-body-sm text-neutral-500 mt-1">{job.location}</p>}
              </div>
            </div>
            <ul className="space-y-2">
              {job.highlights.map((point) => (
                <li key={point} className="text-body-sm flex gap-2">
                  <span className="text-black">—</span>
                  {point}
                </li>
              ))}
            </ul>
            <JourneyLinks
              github={job.github}
              youtube={job.youtube}
              youtubeLabel={job.youtubeLabel}
              certificateImage={job.certificateImage}
              certificateTitle={job.certificateTitle}
            />
          </li>
        ))}

        {/* Conference Paper — static card */}
        <li className="card">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
            <div className="flex items-start gap-3">
              <div className="hidden sm:flex w-10 h-10 rounded border border-neutral-300 items-center justify-center flex-shrink-0">
                <HiAcademicCap size={18} className="text-black" />
              </div>
              <div>
                <h3 className="text-title-lg">Conference Paper Presenter at iCOMET 2026</h3>
                <p className="text-body-sm font-semibold text-black mt-0.5">
                  5th IEEE International Conference on Computing, Mathematics &amp; Engineering Technologies
                </p>
                <p className="text-body-sm text-neutral-500 mt-0.5">Sukkur IBA University, Pakistan</p>
              </div>
            </div>
            <span className="text-body-sm font-mono whitespace-nowrap">22–23 May 2026</span>
          </div>

          <ul className="space-y-2">
            <li className="text-body-sm flex gap-2">
              <span className="text-black">—</span>
              Presented the research paper <span className="font-semibold text-black">&ldquo;{PAPER_TITLE}&rdquo;</span> as an author at iCOMET 2026.
            </li>
          </ul>

          <div className="mt-5 pt-4 border-t border-neutral-100 flex flex-wrap gap-3">
            {/* Abstract button */}
            <button
              type="button"
              onClick={() => setShowAbstract(true)}
              className="inline-flex items-center gap-2 rounded-md border-2 border-black bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-neutral-100 transition-colors"
            >
              📄 Abstract
            </button>

            {/* Certificate button — disabled */}
            <button
              type="button"
              disabled
              className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-400 cursor-not-allowed"
              title="Certificate coming soon"
            >
              🎓 Certificate (Coming Soon)
            </button>
          </div>
        </li>
      </ul>

      {/* Abstract modal */}
      {showAbstract && <AbstractModal onClose={() => setShowAbstract(false)} />}
    </SectionWrapper>
  )
}


