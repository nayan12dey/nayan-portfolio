"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Sparkles, Code2, Layers, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  // {
  //   title: "Decentralized Image Web3 App",
  //   desc: "A blockchain-based secure application facilitating decentralized image upload and sharing utilizing Solidity smart contracts, Ethereum networks, and IPFS infrastructure.",
  //   tags: ["Solidity", "React", "IPFS", "Tailwind CSS"],
  //   github: "https://github.com",
  //   live: "https://example.com",
  // },
  {
    title: "StudyNook – Smart Study Room Booking Platform",
    desc: "A full-stack MERN web application that allows students and library users to discover, list, and book study rooms with real-time availability and conflict-free scheduling.",
    tags: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "BetterAuth"],
    github: "https://github.com/nayan12dey/studynook",
    live: "https://studynook-alpha.vercel.app/",
  },
  {
    title: "BookSphere – Digital Library Web App",
    desc: "A cryptographic cloud storage vault engineered with advanced data encryption protocols, structural session validation, and multi-tenant isolated database cluster pipelines.",
    tags: ["Next.js", "Tailwind CSS", "HeroUI", "BetterAuth", "MongoDB"],
    github: "https://github.com/nayan12dey/booksphere",
    live: "https://booksphere-swart.vercel.app/",
  },
  {
    title: "KeepKeeper — Keep Your Friendships Alive",
    desc: "A premium business metrics telemetry dashboard delivering operational insights, charts synchronization, data streaming aggregation, and optimized viewport responsiveness.",
    tags: ["React.js", "React Router DOM", "Tailwind CSS", "Recharts"],
    github: "https://github.com/nayan12dey/keen-keeper-website",
    live: "https://keen-keeper-website.vercel.app/",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050816] px-6 py-28 text-white select-none"
    >
      {/* Ambient Background Blur Layer */}
      <div className="absolute right-[-10%] top-[20%] h-[450px] w-[450px] rounded-full bg-blue-500/5 blur-[140px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute left-[-10%] bottom-[10%] h-[450px] w-[450px] rounded-full bg-purple-500/5 blur-[140px] pointer-events-none animate-pulse duration-[10000ms]" />

      {/* Technic Space Matrix Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        
        {/* Animated Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            <Sparkles size={14} className="text-cyan-400" />
            My Project
          </div>

          <h2 className="text-4xl font-extrabold sm:text-5xl tracking-tight leading-none">
            Recent{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Projects &amp; Creations
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            A curated showcase of applications and architectures built with precision engineering and modern technological frameworks.
          </p>
        </motion.div>

        {/* 4 Cards Grid Layout - 1 column on mobile, 2 on medium+ devices */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 grid-cols-1 md:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 md:p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_40px_rgba(6,182,212,0.02)] flex flex-col justify-between"
            >
              <div>
                {/* Header Badge Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.02] border border-white/10 text-cyan-400 group-hover:scale-105 transition-transform duration-300">
                    <Code2 size={20} />
                  </div>
                  
                  {/* Action Link Icons */}
                  <div className="flex items-center gap-4 text-gray-400">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-white transition-colors duration-200 text-lg"
                      title="Source Code"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-white transition-colors duration-200 text-base"
                      title="Live Deployment"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="mt-3.5 text-gray-400 text-sm md:text-base leading-relaxed tracking-wide font-normal">
                  {project.desc}
                </p>
              </div>

              {/* Tag Stack Cloud */}
              <div className="mt-8 pt-5 border-t border-white/[0.05] flex flex-wrap gap-2">
                {project.tags.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx} 
                    className="flex items-center gap-1.5 rounded-lg bg-black/40 border border-white/[0.05] px-3 py-1 text-xs font-semibold text-gray-400 tracking-wider transition-colors duration-300 group-hover:border-cyan-500/10 group-hover:text-gray-300"
                  >
                    <Layers size={10} className="text-cyan-500/60" />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/nayan12dey" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:opacity-95 hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:-translate-y-0.5 group"
          >
            <FaGithub size={18} />
            <span>View More Projects</span>
            <ArrowUpRight size={16} className="text-white/80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}