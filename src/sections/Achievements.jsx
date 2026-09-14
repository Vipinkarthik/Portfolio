import React from 'react';
import SpotlightCard from '../components/SpotlightCard';
import DecryptedText from '../components/DecryptedText';

import sihPhoto from '../assets/events/sih1.jpeg';
import infyndPhoto from '../assets/events/infynd1.jpeg';
import codesprintPhoto from '../assets/events/codesprint-2025.jpeg';
import sairamPhoto from '../assets/events/sairam1.jpeg';

const PATENTS = [
  {
    title: 'Frovitrax',
    domain: 'Food Supply Chain & IoT/AI',
    description: 'Autonomous cold-chain monitoring system utilizing multi-sensor telemetry and predictive shelf-life degradation algorithms.'
  },
  {
    title: 'SmartCrateX',
    domain: 'Smart Logistics & Telemetry',
    description: 'Modular intelligent container architecture with integrated shock, tilt, and temperature environmental logging.'
  },
  {
    title: 'eMeterSeva',
    domain: 'Smart Energy & Utility Automation',
    description: 'High-accuracy OCR-based energy meter digitizer and automated distributed billing compute framework.'
  },
  {
    title: 'Nexora',
    domain: 'Pharma Supply Chain & Integrity',
    description: 'Tamper-evident pharmaceutical lifecycle governance platform enforcing role-based verification and compliance audit trails.'
  }
];

const PAPERS = [
  {
    title: 'AI-based IoT Waste Management System',
    conference: 'IEMPOWER 2025',
    year: '2025',
    focus: 'Edge ML, IoT Sensor Integration, Automated Waste Segregation'
  },
  {
    title: 'AI-Powered Railway Track Clip Management with XGBoost',
    conference: 'ICUIS 2026',
    year: '2026',
    focus: 'Custom AI Model, XGBoost, Defect Classification, Railway Infrastructure Maintenance'
  }
];

const HACKATHONS = [
  {
    title: 'Smart India Hackathon (SIH 2025)',
    result: 'National Grand Finalist',
    venue: 'Oriental University, Indore',
    highlight: 'Selected among the top 5 teams nationwide for national innovation in smart systems.'
  },
  {
    title: "AIM'25 Hackathon",
    result: 'Special Mention · Top 4 Finalist',
    venue: 'Regional Innovation Arena',
    highlight: 'Recognized for high-impact autonomous threat analysis architecture.'
  },
  {
    title: 'HackVega 2.0',
    result: 'National Final Round',
    venue: 'National Arena',
    highlight: 'Built and defended full-stack IoT telemetry gateway under intensive 36-hour sprint.'
  },
  {
    title: '15+ Additional Competitions',
    result: 'Multiple Podiums & Laurels',
    venue: 'Infynd, Sairam Codecraft, MCET, Codesprint',
    highlight: 'Active competitive presence across southern India technical hackathons.'
  }
];

const CODING_STATS = [
  {
    platform: 'LeetCode',
    stat: '500+ Solved',
    subtext: 'Rating: 1632',
    accent: '#facc15'
  },
  {
    platform: 'CodeChef',
    stat: 'Gold Badge',
    subtext: 'Rating: 1193',
    accent: '#fb923c'
  },
  {
    platform: 'HackerRank',
    stat: '3★ Java',
    subtext: 'Proficiency Certified',
    accent: '#22c55e'
  }
];

// Condensed certifications grouped by category in a clean grid/tag layout
const CERTIFICATION_GROUPS = [
  {
    category: 'AI & Agentic Systems',
    badges: [
      'Azure AI Apps & Agents Developer Associate',
      'Azure AI Fundamentals',
      'Oracle Agentic AI Foundations'
    ]
  },
  {
    category: 'Cloud & Industrial IoT',
    badges: [
      'Azure Developer Associate',
      'AWS Cloud Practitioner',
      'NPTEL Industry 4.0 / IIoT'
    ]
  },
  {
    category: 'Core Software & Databases',
    badges: [
      'MongoDB',
      'Learning React',
      'SQL',
      'Git & GitHub',
      'Core Java'
    ]
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative w-full py-24 px-4 sm:px-6 max-w-6xl mx-auto z-10">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-xs uppercase tracking-widest text-accent font-mono font-semibold">
            <DecryptedText text="Honors & Validation" speed={30} />
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Patents, Research, Competitions & Certifications
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Intellectual property generation, peer-reviewed publications, competitive hackathon track record, and verified credentials.
        </p>
      </div>

      {/* 4 Published Patent Applications */}
      <div className="mb-16">
        <div className="flex items-center gap-2.5 mb-6">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-accent/10 text-accent border border-accent/30">
            IP ASSETS
          </span>
          <h3 className="font-display text-xl font-bold text-white">4 Published Patent Applications</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PATENTS.map((pat) => (
            <SpotlightCard
              key={pat.title}
              className="p-5 rounded-2xl border border-white/10 hover:border-accent/40 transition-all duration-300 bg-charcoal-900/80 shadow-lg"
              spotlightColor="rgba(0, 240, 255, 0.16)"
            >
              <div>
                <span className="text-[10px] font-mono text-accent uppercase tracking-wider block mb-1">
                  {pat.domain}
                </span>
                <h4 className="font-display text-lg font-bold text-white mb-2">{pat.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{pat.description}</p>
              </div>
              <div className="pt-4 mt-3 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500">IPO Filed & Published</span>
                <span className="text-[10px] font-semibold text-emerald-400">Official</span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* Conference Papers & Competitive Coding Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Conference Papers */}
        <SpotlightCard
          className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-charcoal-900/80 shadow-lg"
          spotlightColor="rgba(0, 240, 255, 0.14)"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-accent font-bold">PUBLICATIONS</span>
              <h3 className="font-display text-lg font-bold text-white">Conference Research Papers</h3>
            </div>

            <div className="space-y-4">
              {PAPERS.map((paper) => (
                <div key={paper.title} className="p-4 rounded-xl bg-charcoal-950 border border-white/[0.08]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-accent font-mono">{paper.conference}</span>
                    <span className="text-[11px] font-mono text-slate-400">{paper.year}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">{paper.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-mono">Focus: {paper.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </SpotlightCard>

        {/* Competitive Programming */}
        <SpotlightCard
          className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-charcoal-900/80 shadow-lg"
          spotlightColor="rgba(139, 92, 246, 0.16)"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono text-violet-accent font-bold">ALGORITHMS</span>
              <h3 className="font-display text-lg font-bold text-white">Competitive Programming</h3>
            </div>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Algorithmic problem-solving across dynamic programming, graph traversal, and mathematical optimization.
            </p>

            <div className="grid grid-cols-3 gap-3">
              {CODING_STATS.map((item) => (
                <div
                  key={item.platform}
                  className="p-4 rounded-xl bg-charcoal-950 border border-white/[0.08] text-center flex flex-col justify-center"
                >
                  <span className="text-xs font-mono text-slate-400 block mb-1">{item.platform}</span>
                  <span className="text-base sm:text-lg font-display font-black text-white block">
                    {item.stat}
                  </span>
                  <span className="text-[10px] font-mono text-accent mt-1 block">{item.subtext}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-charcoal-950/70 border border-white/5 text-center mt-6">
            <span className="text-xs text-slate-400 font-mono">
              Active algorithmic solver across LeetCode, CodeChef, and HackerRank.
            </span>
          </div>
        </SpotlightCard>
      </div>

      {/* Hackathons & Live Photo Proof */}
      <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-charcoal-900/80 shadow-xl mb-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h3 className="font-display text-xl font-bold text-white">15+ National & Regional Hackathons</h3>
            <p className="text-xs text-slate-400">High-stakes prototyping and technological innovation</p>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
            SIH 2025 National Finalist
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {HACKATHONS.map((hack) => (
            <div key={hack.title} className="p-4 rounded-xl bg-charcoal-950 border border-white/[0.08]">
              <span className="text-[10px] font-mono text-accent block">{hack.result}</span>
              <h4 className="text-xs font-bold text-white mt-1 mb-1">{hack.title}</h4>
              <p className="text-[11px] text-slate-400 leading-snug">{hack.highlight}</p>
            </div>
          ))}
        </div>

        {/* Gallery snapshots from assets/events */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="h-32 rounded-xl overflow-hidden border border-white/10 group relative">
            <img src={sihPhoto} alt="SIH 2025" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent opacity-80" />
            <span className="absolute bottom-2 left-2 text-[10px] font-mono text-white font-medium">SIH Grand Finale</span>
          </div>
          <div className="h-32 rounded-xl overflow-hidden border border-white/10 group relative">
            <img src={infyndPhoto} alt="Infynd" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent opacity-80" />
            <span className="absolute bottom-2 left-2 text-[10px] font-mono text-white font-medium">Infynd Top 4</span>
          </div>
          <div className="h-32 rounded-xl overflow-hidden border border-white/10 group relative">
            <img src={codesprintPhoto} alt="Codesprint" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent opacity-80" />
            <span className="absolute bottom-2 left-2 text-[10px] font-mono text-white font-medium">Codesprint Final</span>
          </div>
          <div className="h-32 rounded-xl overflow-hidden border border-white/10 group relative">
            <img src={sairamPhoto} alt="Sairam" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent opacity-80" />
            <span className="absolute bottom-2 left-2 text-[10px] font-mono text-white font-medium">Codecraft Sprint</span>
          </div>
        </div>
      </div>

      {/* Condensed Certifications List (Grouped by Category in Clean Tag/Grid Layout) */}
      <SpotlightCard
        className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-charcoal-900/80 shadow-xl"
        spotlightColor="rgba(0, 240, 255, 0.15)"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h3 className="font-display text-xl font-bold text-white">Professional Certifications</h3>
            <p className="text-xs text-slate-400">11 industry-verified credentials across AI, Cloud, Databases, and Systems</p>
          </div>
          <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20 w-fit">
            Grouped Overview
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATION_GROUPS.map((group) => (
            <div key={group.category} className="p-4 rounded-xl bg-charcoal-950 border border-white/[0.07] space-y-3">
              <h4 className="text-xs font-mono font-bold text-accent uppercase tracking-wider pb-1 border-b border-white/[0.08]">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.badges.map((cert) => (
                  <span
                    key={cert}
                    className="text-xs font-medium px-2.5 py-1.5 rounded-lg bg-charcoal-900 text-slate-200 border border-white/10 hover:border-accent/40 transition-colors leading-tight"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SpotlightCard>
    </section>
  );
}
