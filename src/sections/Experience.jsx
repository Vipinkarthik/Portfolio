import React from 'react';
import SpotlightCard from '../components/SpotlightCard';
import DecryptedText from '../components/DecryptedText';

const EXPERIENCES = [
  {
    role: 'MERN Stack Developer (Intern)',
    company: 'Better Tomorrow',
    period: 'January 2025',
    type: 'Full-Stack MERN App · Backend-Focused',
    highlights: [
      'Engineered backend server logic and architected scalable RESTful API endpoints utilizing Node.js, Express.js, and MongoDB.',
      'Designed structured database schema models with Mongoose, ensuring data integrity, payload validation, and sub-millisecond query performance.',
      'Integrated frontend client reactivity with backend services, implementing robust error-handling pipelines and secure HTTP request lifecycles.',
      'Collaborated within an agile team workflow, conducting API contract validation via Postman and version control through Git.'
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'REST APIs', 'Postman', 'Git']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-24 px-4 sm:px-6 max-w-6xl mx-auto z-10">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-xs uppercase tracking-widest text-accent font-mono font-semibold">
            <DecryptedText text="Industry Track" speed={30} />
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Practical Industry Experience
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Professional engineering contributions in full-stack web and backend infrastructure development.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-4 w-4 h-4 rounded-full bg-charcoal-950 border-2 border-accent group-hover:scale-125 transition-transform duration-300 shadow-[0_0_12px_rgba(0,240,255,0.4)]" />

              <SpotlightCard
                className="p-6 sm:p-8 rounded-2xl border border-white/10 group-hover:border-accent/40 transition-all duration-300 bg-charcoal-900/80 shadow-xl"
                spotlightColor="rgba(0, 240, 255, 0.16)"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-sm text-accent font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-xs font-mono text-slate-200 block">{exp.period}</span>
                    <span className="text-[11px] text-slate-400 block">{exp.type}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 my-4 text-xs sm:text-sm text-slate-300 list-disc list-outside pl-4 leading-relaxed">
                  {exp.highlights.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 mt-2 border-t border-white/[0.08]">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-charcoal-950 text-slate-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
