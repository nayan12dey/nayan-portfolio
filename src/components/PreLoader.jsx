"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

export default function PreLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 600);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  // Name Animation Variants
  const nameLetterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } }
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#050816] select-none text-white overflow-hidden"
        >
          {/* Ambient Background Matrix Dots Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 h-[350px] w-[350px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none animate-pulse" />

          {/* Core Loader Graphics Structure */}
          <div className="relative flex flex-col items-center z-10">
            
            {/* Animated Ring Spinner Frame */}
            <div className="relative flex items-center justify-center h-24 w-24 mb-6">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-cyan-500/20 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                className="absolute inset-2 border border-blue-500/40 border-t-cyan-400 border-b-cyan-400 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.1)]"
              />
              <div className="text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">
                <Terminal size={24} />
              </div>
            </div>

            {/* 🎯 Staggered Letter Branding Animation for Nayan Dey */}
            <motion.div 
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
              className="flex items-center text-2xl font-black tracking-[0.18em] uppercase bg-gradient-to-r from-white via-gray-200 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.25)] mb-1"
            >
              {"NAYANDEY".split("").map((letter, idx) => (
                <motion.span
                  key={idx}
                  variants={nameLetterVariants}
                  className={letter === " " ? "w-3" : ""}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            {/* Dynamic Sub-title Text */}
            <h3 className="text-[10px] font-bold uppercase tracking-[0.45em] text-cyan-400/70 mb-4">
              Initializing Portfolio
            </h3>
            
            {/* Real-time Percentage Indicator */}
            <div className="text-3xl font-black font-mono bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-5 tracking-tight">
              {progress > 100 ? 100 : progress}%
            </div>

            {/* Premium Linear Progress Track Pipeline */}
            <div className="h-[2px] w-48 bg-white/[0.04] border border-white/[0.02] rounded-full overflow-hidden relative">
              <motion.div 
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_10px_#06b6d4]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}