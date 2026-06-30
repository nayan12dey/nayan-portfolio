"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import {
  Globe,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

const frontendSkills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
];

const backendSkills = [
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "REST API", icon: <Globe className="text-cyan-400" size={16} /> },
];

const tools = [
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
];

export default function Skills() {
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
      id="skills"
      className="relative overflow-hidden bg-[#050816] px-6 py-28 text-white select-none"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute left-[-5%] top-10 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none animate-pulse duration-[7000ms]" />
      <div className="absolute bottom-[-5%] right-[-5%] h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none animate-pulse duration-[9000ms]" />

      {/* Technic Space Matrix Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
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
            My Stack
          </div>

          <h2 className="text-4xl font-extrabold sm:text-5xl tracking-tight leading-none">
            Technologies I Use To Build{" "}
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Modern Web Applications
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
            I enjoy working with modern technologies and tools to create fast, responsive and visually appealing web applications.
          </p>
        </motion.div>

        {/* Dynamic Responsive Category Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          
          {/* Frontend Category */}
          <motion.div variants={cardVariants} whileHover={{ y: -5 }} className="group rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/5 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
              <Globe size={24} />
            </div>
            <h3 className="mb-5 text-xl font-bold tracking-wide text-white">Frontend</h3>
            <div className="flex flex-wrap gap-2.5">
              {frontendSkills.map((skill) => (
                <motion.div key={skill.name} whileHover={{ scale: 1.04 }} className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-black/40 px-3.5 py-2 text-sm font-medium text-gray-300 transition-colors duration-300 hover:border-cyan-500/30 hover:text-white">
                  <span className="text-base flex items-center shrink-0">{skill.icon}</span>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend Category */}
          <motion.div variants={cardVariants} whileHover={{ y: -5 }} className="group rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/5 text-purple-400 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
              <Server size={24} />
            </div>
            <h3 className="mb-5 text-xl font-bold tracking-wide text-white">Backend</h3>
            <div className="flex flex-wrap gap-2.5">
              {backendSkills.map((skill) => (
                <motion.div key={skill.name} whileHover={{ scale: 1.04 }} className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-black/40 px-3.5 py-2 text-sm font-medium text-gray-300 transition-colors duration-300 hover:border-purple-500/30 hover:text-white">
                  <span className="text-base flex items-center shrink-0">{skill.icon}</span>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools Category */}
          <motion.div variants={cardVariants} whileHover={{ y: -5 }} className="group rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 to-red-500/5 text-pink-400 border border-pink-500/20 shadow-[0_0_15px_rgba(236,72,153,0.1)]">
              <Wrench size={24} />
            </div>
            <h3 className="mb-5 text-xl font-bold tracking-wide text-white">Workflow &amp; Tools</h3>
            <div className="flex flex-wrap gap-2.5">
              {tools.map((tool) => (
                <motion.div key={tool.name} whileHover={{ scale: 1.04 }} className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-black/40 px-3.5 py-2 text-sm font-medium text-gray-300 transition-colors duration-300 hover:border-pink-500/30 hover:text-white">
                  <span className="text-base flex items-center shrink-0">{tool.icon}</span>
                  {tool.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}