import SectionWrapper from '../ui/SectionWrapper'
import SectionHeader from '../ui/SectionHeader'
import { skillGroups } from '../../data/portfolioData'

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="section-alt bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <SectionHeader
        label="Skills"
        title="Technology Stack"
        description="Tools and frameworks I use to build intelligent, production-ready applications."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="group overflow-hidden rounded-2xl border border-slate-200/70 bg-white/95 p-5 shadow-[0_16px_48px_-24px_rgba(15,23,42,0.15)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-28px_rgba(15,23,42,0.18)]"
          >
            <div className="mb-4">
              <span className="rounded-full bg-slate-900 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-sm">
                {group.category}
              </span>
            </div>
 
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm"
                >
                  {skill.icon && <skill.icon className="text-sm text-slate-800" />}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
