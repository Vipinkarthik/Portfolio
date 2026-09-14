import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Subtle initial mount timeout allowing WebGL canvas to instantiate
    const timer = setTimeout(() => {
      setLoading(false);
    }, 650);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal-950 pointer-events-none"
        >
          <div className="relative flex flex-col items-center">
            {/* Pulsing ambient halo */}
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute w-24 h-24 rounded-full bg-accent/20 blur-xl pointer-events-none"
            />

            {/* Monogram Box */}
            <div className="w-14 h-14 rounded-2xl bg-charcoal-900 border border-accent/40 flex items-center justify-center shadow-[0_0_25px_rgba(0,240,255,0.3)]">
              <span className="font-display font-extrabold text-accent text-xl tracking-wider">
                VK
              </span>
            </div>

            {/* Subtle loading indicator line */}
            <div className="w-28 h-0.5 bg-charcoal-800 rounded-full mt-5 overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="w-14 h-full bg-accent rounded-full shadow-[0_0_8px_rgba(0,240,255,0.8)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
