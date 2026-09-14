import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '../components/SpotlightCard';
import DecryptedText from '../components/DecryptedText';

const SKILL_GROUPS = [
  {
    id: 'ai-ml',
    category: 'AI & Machine Learning',
    description: 'Neural networks, computer vision, predictive algorithms, and generative AI models',
    skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'XGBoost', 'OpenCV', 'Pandas', 'NumPy', 'CNNs', 'LLM Fundamentals', 'Prompt Engineering', 'RAG'],
    badge: 'Core Focus'
  },
  {
    id: 'exploring',
    category: 'Currently Exploring',
    description: 'Autonomous agents, retrieval architectures, and agentic protocols',
    skills: ['LangChain', 'Vector Databases', 'MCP (Model Context Protocol)', 'Fine-tuning'],
    badge: 'Active Lab'
  },
  {
    id: 'languages',
    category: 'Programming Languages',
    description: 'Core problem solving, scripting, and system logic',
    skills: ['Python', 'Java', 'JavaScript', 'SQL']
  },
  {
    id: 'web',
    category: 'Web & Distributed Systems',
    description: 'Responsive user interfaces and resilient backend web services',
    skills: ['HTML', 'CSS', 'React.js', 'Node.js', 'Express.js', 'REST APIs']
  },
  {
    id: 'databases',
    category: 'Databases & Storage',
    description: 'Document, relational, and structured data stores',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL']
  },
  {
    id: 'cs-core',
    category: 'CS Fundamentals',
    description: 'Architectural patterns, scalable data structures, and algorithms',
    skills: ['DSA', 'OOP', 'System Design']
  },
  {
    id: 'tools',
    category: 'Developer Tools & Workflow',
    description: 'Version control, API validation, and development environments',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Eclipse IDE']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-24 px-4 sm:px-6 max-w-6xl mx-auto z-10">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-xs uppercase tracking-widest text-accent font-mono font-semibold">
            <DecryptedText text="Technical Arsenal" speed={30} />
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Categorized Engineering Toolsets
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Core competencies spanning machine learning research, agentic protocols, and full-stack software architecture.
        </p>
      </div>

      {/* Grid of Skill Groups powered by SpotlightCard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_GROUPS.map((group) => (
          <SpotlightCard
            key={group.id}
            className="p-6 rounded-2xl border border-white/10 hover:border-accent/40 transition-all duration-300 bg-charcoal-900/80 group h-full shadow-lg"
            spotlightColor="rgba(0, 240, 255, 0.18)"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display font-bold text-base text-white group-hover:text-accent transition-colors">
                  {group.category}
                </h3>
                {group.badge && (
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20 shrink-0">
                    {group.badge}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed min-h-[32px]">
                {group.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-white/[0.08]">
              {group.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(0, 240, 255, 0.45)' }}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-charcoal-950 text-slate-200 border border-white/5 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
