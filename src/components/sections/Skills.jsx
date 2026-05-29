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

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="group overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/95 p-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_100px_-45px_rgba(15,23,42,0.22)]"
          >
            <div className="mb-6">
              <span className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white shadow-sm">
                {group.category}
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {group.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {skill.icon && <skill.icon className="text-base text-slate-800" />}
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
