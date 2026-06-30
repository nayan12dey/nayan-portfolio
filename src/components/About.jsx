"use client";

import {
  User,
  Laptop,
  Layers3,
  Globe,
  Sparkles,
  Terminal,
  Cpu
} from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  // Animation variants for staggered child drop-ins
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 20 } 
    }
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] px-6 py-28 text-white select-none"
    >
      {/* Absolute Dynamic Background Glows */}
      <div className="absolute left-[-10%] top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none animate-pulse duration-[6000ms]"></div>
      <div className="absolute bottom-[-10%] right-[-5%] h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[130px] pointer-events-none animate-pulse duration-[8000ms]"></div>

      {/* Futuristic Technical Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Animated Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            <Sparkles size={14} />
            About Me
          </div>

          <h2 className="text-4xl font-extrabold sm:text-5xl tracking-tight leading-none">
            Passionate About Building
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Modern Web Experiences
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
            I&apos;m a Software Developer and Computer Science student specializing in building high-performance decentralized web applications, turning complex logic into seamless interfaces.
          </p>
        </motion.div>

        {/* Bento Grid with Framer Motion Layouts */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          
          {/* Who I Am Card - Large block */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            className="md:col-span-2 group relative rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 flex flex-col justify-center overflow-hidden hover:border-cyan-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/5 blur-3xl transition-all group-hover:bg-cyan-500/10 pointer-events-none"></div>
            
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/5 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <User size={26} />
            </div>

            <h3 className="mb-4 text-2xl font-bold text-white tracking-wide">Who I Am</h3>
            <p className="text-gray-400 leading-relaxed text-base md:text-lg">
              I specialize in Full Stack Development, distributed ledger architectures, and writing robust algorithmic solutions. With deep command over <strong>React, Next.js, and Tailwind CSS</strong> , I build pixel-perfect interfaces connected to secure modern backends. I thrive on translating structural layout paradigms into clean, fluid interactive states.
            </p>
          </motion.div>

          {/* Stats Card 1: Projects */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 flex flex-col items-center justify-center text-center hover:border-green-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-400 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
              <Layers3 size={28} />
            </div>
            <h3 className="text-5xl font-black bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent tracking-tight mb-2">15+</h3>
            <p className="text-gray-400 font-medium tracking-wide">Projects Deployed</p>
          </motion.div>

          {/* Stats Card 2: Tech Engine / Stack Experience */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 flex flex-col items-center justify-center text-center hover:border-purple-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <Cpu size={28} />
            </div>
            <h3 className="text-5xl font-black bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent tracking-tight mb-2">Web3</h3>
            <p className="text-gray-400 font-medium tracking-wide">&amp; Smart Contracts</p>
          </motion.div>

          {/* What I Do Card - Large block */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            className="md:col-span-2 group relative rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 overflow-hidden hover:border-purple-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          >
            <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl transition-all group-hover:bg-purple-500/10 pointer-events-none"></div>

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/5 text-purple-400 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <Laptop size={26} />
            </div>

            <h3 className="mb-4 text-2xl font-bold text-white tracking-wide">What I Do</h3>
            <p className="text-gray-400 leading-relaxed text-base md:text-lg">
              From crafting complex responsive user layers to implementing decentralized solutions and optimized node architectures, I cover the complete development lifecycle. I focus on technical scalability, absolute type-safety, modular abstraction, and fluid runtime layouts that make complex systems feel intuitive.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}