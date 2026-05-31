import SectionWrapper from '../ui/SectionWrapper'
import SectionHeader from '../ui/SectionHeader'

const workflowSteps = [
  {
    number: '01',
    phase: 'Analyze',
    detail: 'Define goals and outline the architecture.',
  },
  {
    number: '02',
    phase: 'Design',
    detail: 'Architect clean interfaces and secure workflows.',
  },
  {
    number: '03',
    phase: 'Develop',
    detail: 'Build robust solutions using modern stacks.',
  },
  {
    number: '04',
    phase: 'Validate',
    detail: 'Ensure premium quality and stable performance.',
  },
  {
    number: '05',
    phase: 'Deploy',
    detail: 'Launch production services with live monitoring.',
  },
  {
    number: '06',
    phase: 'Optimize',
    detail: 'Refine, scale, and improve continuously.',
  },
]

export default function Workflow() {
  return (
    <SectionWrapper id="workflow" className="border-t border-neutral-200 bg-white py-16 sm:py-20 overflow-hidden">
      <div className="text-center mb-10 sm:mb-12">
        <p className="text-3xl sm:text-4xl font-extrabold text-black mb-2">How I Build</p>
        <h2 className="text-xs sm:text-sm font-semibold text-neutral-500 uppercase tracking-widest">My Engineering Workflow</h2>
        <p className="text-sm sm:text-base mt-4 max-w-2xl mx-auto text-neutral-600">
          A structured, rigorous methodology focused on transforming complex business problems into production-ready software solutions.
        </p>
      </div>

      {/* Self-contained CSS to hide horizontal scrollbar track on Webkit browsers */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />

      <div 
        className="mt-8 flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory lg:grid lg:grid-cols-6 lg:gap-4 lg:overflow-visible max-w-6xl mx-auto no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {workflowSteps.map((step) => (
          <div
            key={step.number}
            className="group relative flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-900 p-5 transition-all duration-300 hover:border-black hover:bg-black hover:shadow-lg min-w-[270px] sm:min-w-[290px] lg:min-w-0 flex-shrink-0 snap-start"
          >
            <div>
              {/* Step Number (Stark White) */}
              <span className="block text-3xl font-extrabold text-white transition-transform duration-300 group-hover:scale-105">
                {step.number}
              </span>
              
              {/* Phase Title (White) */}
              <h3 className="mt-4 text-base font-bold text-white tracking-tight">
                {step.phase}
              </h3>
              
              {/* Detailed Explanation (Muted Gray to Light Gray on Hover) */}
              <p className="mt-2 text-xs leading-relaxed text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300">
                {step.detail}
              </p>
            </div>

            {/* Premium Stark White bottom accent line that slides in on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-xl bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
