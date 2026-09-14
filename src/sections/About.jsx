import React from 'react';
import { motion } from 'framer-motion';
import vipinImg from '../assets/vipin.png';
import SpotlightCard from '../components/SpotlightCard';
import DecryptedText from '../components/DecryptedText';

export default function About() {
  return (
    <section id="about" className="relative w-full py-24 px-4 sm:px-6 max-w-6xl mx-auto z-10">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Profile Card with Spotlight & Hover Micro-Interaction */}
        <div className="w-full lg:w-5/12 flex justify-center">
          <SpotlightCard
            className="w-full max-w-xs sm:max-w-sm rounded-3xl border border-white/10 p-4 shadow-2xl bg-charcoal-900/90 transition-transform duration-500 hover:-translate-y-1.5"
            spotlightColor="rgba(0, 240, 255, 0.22)"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-charcoal-950">
              <img
                src={vipinImg}
                alt="Vipin Karthik M B"
                className="w-full h-full object-cover contrast-110 hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest block font-semibold">
                  Engineering Profile
                </span>
                <span className="text-xl font-display font-bold text-white block">
                  Vipin Karthik M B
                </span>
                <span className="text-xs text-slate-300 font-mono">
                  B.E. ECE · AI & Full-Stack Engineer
                </span>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Biography & Unified Engineering Story */}
        <div className="w-full lg:w-7/12 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs uppercase tracking-widest text-accent font-mono font-semibold">
                <DecryptedText text="Engineering Biography" speed={30} />
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Bridging Hardware Intuition with Scalable Software & AI
            </h2>
          </div>

          {/* Bio from Content Data */}
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am an <strong className="text-white font-semibold">Electronics & Communication Engineering undergraduate</strong> at Sri Eshwar College of Engineering transitioning into advanced technology, combining hardware intuition with deep hands-on expertise across full-stack software and machine learning.
            </p>
            <p>
              My track record is built on rigorous execution: architecting <strong className="text-accent font-semibold">4 published patent applications</strong>, presenting peer-reviewed research at IEEE/international conferences, and solving high-stakes challenges as a national finalist in hackathons like <strong className="text-white font-semibold">Smart India Hackathon (SIH 2025)</strong>.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed border-l-2 border-accent/40 pl-4 py-1">
              Active across Computer Vision pipelines, fine-tuned deep learning models, and autonomous agent architectures (MCP) on the intelligence front — complemented by robust MERN web engineering, distributed REST APIs, and performant database architectures.
            </p>
          </div>

          {/* Education Milestone Cards */}
          <div className="pt-2 space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-slate-400 font-mono font-semibold">
              Academic Milestones
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <motion.div
                whileHover={{ y: -3, borderColor: 'rgba(0, 240, 255, 0.4)' }}
                className="p-3.5 rounded-xl bg-charcoal-900/80 border border-charcoal-800 transition-colors"
              >
                <span className="text-[10px] text-accent font-mono block">2023 – 2027</span>
                <span className="text-xs font-bold text-white block mt-0.5 leading-snug">Sri Eshwar College of Engineering</span>
                <span className="text-[11px] text-slate-400 block mt-0.5">B.E. ECE · CGPA 8.2 / 10</span>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, borderColor: 'rgba(0, 240, 255, 0.4)' }}
                className="p-3.5 rounded-xl bg-charcoal-900/80 border border-charcoal-800 transition-colors"
              >
                <span className="text-[10px] text-slate-400 font-mono block">2022 – 2023</span>
                <span className="text-xs font-bold text-white block mt-0.5 leading-snug">Bharatiya Vidya Mandir Higher Secondary School</span>
                <span className="text-[11px] text-slate-400 block mt-0.5">HSC · 82.7%</span>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, borderColor: 'rgba(0, 240, 255, 0.4)' }}
                className="p-3.5 rounded-xl bg-charcoal-900/80 border border-charcoal-800 transition-colors"
              >
                <span className="text-[10px] text-slate-400 font-mono block">2020 – 2021</span>
                <span className="text-xs font-bold text-white block mt-0.5 leading-snug">Bharatiya Vidya Mandir Higher Secondary School</span>
                <span className="text-[11px] text-accent font-mono block mt-1">SSLC · 100%</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
