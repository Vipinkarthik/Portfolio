import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '../components/SpotlightCard';
import DecryptedText from '../components/DecryptedText';

import frovitraxImg from '../assets/frovitrax.png';
import bsgImg from '../assets/bsg.png';
import womensSafetyImg from '../assets/ai-project.jpg';
import emeterImg from '../assets/meter-app.jpg';
import nexoraImg from '../assets/Nexora.png';
import railClipImg from '../assets/RailClip.png';

// Unified common list of 6 featured engineering projects
const UNIFIED_PROJECTS = [
  {
    id: 'frovitrax',
    title: 'Frovitrax',
    headline: 'Smart Supply Chain Monitoring Platform (TRL-5)',
    description: 'An enterprise IoT + AI platform transforming cold-chain logistics. Monitors real-time transit environmental parameters, automated SLA compliance tracking, predictive shelf-life degradation algorithms, and intelligent incident reporting.',
    tech: ['IoT Hardware', 'Predictive AI', 'Node.js', 'React', 'MongoDB'],
    image: frovitraxImg,
    isInProgress: false,
    liveUrl: 'https://frovitrax.netlify.app/',
    githubUrl: 'https://github.com/Vipinkarthik/FROVITRAX'
  },
  {
    id: 'bsg',
    title: 'Bharat Surveillance Grid',
    headline: 'AI/ML Tactical Video Surveillance System',
    description: 'High-speed automated threat reconnaissance engine powered by custom Convolutional Neural Networks. Processes concurrent video streams to detect suspicious behaviors, unattended objects, and perimeter breaches with real-time tactical alerts on a MERN dashboard.',
    tech: ['Computer Vision', 'CNNs', 'OpenCV', 'Python', 'MERN Stack'],
    image: bsgImg,
    isInProgress: false,
    liveUrl: null,
    githubUrl: 'https://github.com/Vipinkarthik/NSG'
  },
  {
    id: 'womens-safety',
    title: "Women's Safety",
    headline: 'Real-Time Harassment Detection System',
    description: 'Autonomous vision and safety suite utilizing deep learning pose-estimation and behavioral classification models. Autonomously identifies physical distress or workplace harassment patterns, triggering instant tactical security protocols.',
    tech: ['CNN', 'MERN Stack', 'TensorFlow', 'Pose Classification', 'OpenCV'],
    image: womensSafetyImg,
    isInProgress: false,
    liveUrl: null,
    githubUrl: 'https://github.com/Vipinkarthik/WomensSafety'
  },
  {
    id: 'emeterseva',
    title: 'E-MeterSeva',
    headline: 'OCR-Based Electricity Meter Reader & Bill Calculator',
    description: 'Optical Character Recognition billing utility that digitizes traditional electricity meter readouts from captured imagery, calculating dynamic utility tariffs and eliminating manual recording discrepancy.',
    tech: ['OCR Engine', 'React', 'Node.js', 'Express', 'Tailwind CSS'],
    image: emeterImg,
    isInProgress: false,
    liveUrl: 'https://smartebfrontend.onrender.com/',
    githubUrl: null
  },
  {
    id: 'nexora',
    title: 'Nexora',
    headline: 'Pharmaceutical Distribution & Regulatory Platform',
    description: 'Enterprise pharmaceutical supply platform enforcing multi-tier role-based governance across manufacturers, distributors, and pharmacies with counterfeit mitigation and regulatory compliance audit trails.',
    tech: ['MERN Architecture', 'Role-Based Access Control', 'REST APIs', 'Audit Logging'],
    image: nexoraImg,
    isInProgress: false,
    liveUrl: null,
    githubUrl: 'https://github.com/vikas-ss0407/Nexora'
  },
  {
    id: 'railway-track',
    title: 'AI QR Based Railway Clip Management',
    headline: 'Custom XGBoost AI Model for Track Component Integrity',
    description: 'Engineered a custom AI model using XGBoost to detect railway track clip defects, assess structural component integrity, and automate maintenance workflows via integrated QR code tracking — completely built in-house without relying on pre-existing vision frameworks. Tied to published research in ICUIS 2026.',
    tech: ['Custom AI Model', 'XGBoost', 'Python', 'QR Code Tracking', 'Asset Maintenance'],
    image: railClipImg,
    isInProgress: false,
    liveUrl: null,
    githubUrl: 'https://github.com/Vipinkarthik/RailClip-Demo'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-24 px-4 sm:px-6 max-w-6xl mx-auto z-10">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-xs uppercase tracking-widest text-accent font-mono font-semibold">
            <DecryptedText text="Unified Engineering Track" speed={30} />
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Featured Engineering Projects
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Core engineering systems presented as one common, unified sequence across real-world deployments and research.
        </p>
      </div>

      {/* Unified Common List of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {UNIFIED_PROJECTS.map((proj, idx) => (
          <SpotlightCard
            key={proj.id}
            className="rounded-2xl border border-white/10 hover:border-accent/50 transition-all duration-500 bg-charcoal-900/80 overflow-hidden group shadow-xl hover:-translate-y-1.5"
            spotlightColor="rgba(0, 240, 255, 0.18)"
          >
            {/* Visual Frame */}
            <div className="relative w-full h-56 bg-charcoal-950 overflow-hidden border-b border-white/[0.08] flex items-center justify-center">
              {proj.image ? (
                <>
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/50 via-transparent to-transparent pointer-events-none" />
                </>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-charcoal-900 to-charcoal-950">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-2 font-mono font-bold text-sm group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                    {proj.title}
                  </span>
                </div>
              )}
            </div>

            {/* Content Details */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-accent transition-colors">
                    {proj.title}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500">0{idx + 1}</span>
                </div>
                <h4 className="text-xs font-semibold text-slate-300 leading-snug">{proj.headline}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{proj.description}</p>
              </div>

              {/* Tech Stack and Links */}
              <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-charcoal-950 text-slate-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-1">
                  {proj.liveUrl && (
                    <motion.a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 3 }}
                      className="text-xs font-bold text-accent hover:underline flex items-center gap-1"
                    >
                      Live Demo &rarr;
                    </motion.a>
                  )}
                  {proj.githubUrl && (
                    <motion.a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 3 }}
                      className="text-xs font-mono text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      Repository &rarr;
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
