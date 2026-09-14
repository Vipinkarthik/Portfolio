import React from 'react';
import { motion } from 'framer-motion';

const RESUME_URL = 'https://drive.google.com/file/d/1SMtZ6CCLEfNURsE9eHtVSVId9iodST1i/view?usp=sharing';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-[85vh] sm:min-h-[88vh] flex flex-col items-center justify-center pt-20 pb-16 px-4 sm:px-6 text-center overflow-hidden">
      {/* Subtle radial ambient glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {/* Unique & Professional Engineering Role Dock */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex flex-wrap items-center justify-center p-1.5 sm:p-2 rounded-2xl sm:rounded-full bg-charcoal-900/90 border border-white/15 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.6),0_0_25px_rgba(0,240,255,0.12)] gap-1.5 sm:gap-2"
        >
          {/* Pillar 1: AI / ML Engineer */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl sm:rounded-full bg-charcoal-950/70 border border-cyan-500/25 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 group">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-xs font-mono font-semibold tracking-wider">
              AI / ML Engineer
            </span>
          </div>

          <span className="hidden sm:inline-block w-px h-4 bg-white/15" />

          {/* Pillar 2: SDE */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl sm:rounded-full bg-charcoal-950/70 border border-accent/40 text-white hover:border-accent hover:bg-accent/10 transition-all duration-300 group shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span className="text-xs font-mono font-bold tracking-widest text-accent">
              SDE
            </span>
          </div>

          <span className="hidden sm:inline-block w-px h-4 bg-white/15" />

          {/* Pillar 3: Full-Stack Developer */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl sm:rounded-full bg-charcoal-950/70 border border-emerald-500/25 text-slate-200 hover:border-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 transition-all duration-300 group">
            <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="text-xs font-mono font-semibold tracking-wider">
              Full-Stack Developer
            </span>
          </div>
        </motion.div>

        {/* Main Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.1]"
        >
          Vipin Karthik <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan-200 to-white">M B</span>
        </motion.h1>

        {/* Clean Cohesive One-Line Tagline featuring SDE and AI */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-sm sm:text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Software Development Engineer (SDE) & AI specialist — architecting autonomous intelligent systems, deep vision models, and scalable distributed architectures.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-center gap-3.5 pt-2"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="px-6 py-3 rounded-xl text-xs font-bold tracking-wider uppercase bg-charcoal-900 hover:bg-charcoal-800 text-slate-200 border border-white/10 hover:border-accent/40 transition-colors shadow-lg"
          >
            Explore Projects
          </motion.a>

          <motion.a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, borderColor: 'rgba(0, 240, 255, 0.5)' }}
            whileTap={{ scale: 0.96 }}
            className="px-6 py-3 rounded-xl text-xs font-bold tracking-wider uppercase bg-charcoal-950 hover:bg-charcoal-900 text-accent border border-accent/30 transition-colors flex items-center gap-2 shadow-lg"
          >
            <span>Resume PDF</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(0,240,255,0.45)' }}
            whileTap={{ scale: 0.96 }}
            className="px-6 py-3 rounded-xl text-xs font-bold tracking-wider uppercase bg-accent text-charcoal-950 hover:bg-accent-hover transition-colors shadow-[0_0_20px_rgba(0,240,255,0.35)]"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
