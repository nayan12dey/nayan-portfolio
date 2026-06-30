"use client";

import { GraduationCap, BookOpen, Sparkles, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const education = [
    {
        year: "2022 - Present",
        title: "B.Tech in Computer Science & Engineering",
        place: "JIS University, Kolkata",
        desc: "Specializing in software engineering logic, distributed structures, dynamic UI paradigms, and full-stack development cycles.",
        icon: <BookOpen size={22} className="text-cyan-400" />,
        glowColor: "group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
    },
    {
        year: "2021 - 2023",
        title: "Higher Secondary (Science)",
        place: "Sarada Prasad Institution",
        desc: "Core computational mathematics, physics matrix configurations, and analytical core data configurations setup.",
        icon: <GraduationCap size={22} className="text-purple-400" />,
        glowColor: "group-hover:border-purple-400 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
    },
    {
        year: "2019 - 2020",
        title: "Secondary Education",
        place: "Sarada Prasad Institution",
        desc: "Acquired critical fundamental logic analytics, mathematics training, and essential science applications.",
        icon: <GraduationCap size={22} className="text-amber-400" />,
        glowColor: "group-hover:border-amber-400 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]"
    }
];

export default function Education() {
    return (
        <section
            id="education"
            className="relative overflow-hidden bg-[#050816] px-6 py-28 text-white select-none"
        >
            {/* Ambient Background Blur Layer */}
            <div className="absolute left-1/2 top-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[130px] pointer-events-none animate-pulse duration-[6000ms]" />

            {/* Cyber Matrix Space Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-5xl">
                
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-24 text-center"
                >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                        <Sparkles size={14} className="text-cyan-400 animate-pulse" />
                        My Journey
                    </div>

                    <h2 className="text-4xl font-extrabold sm:text-5xl tracking-tight leading-none">
                        Educational{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Background
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
                        A structured timeline of my academic trajectory, forming a solid foundation in computational metrics and engineering frameworks.
                    </p>
                </motion.div>

                {/* Vertical Interactive Timeline */}
                <div className="relative md:mx-auto md:w-4/5 pl-6 md:pl-0">
                    
                    {/* Glowing Accent Timeline Core Axis Line */}
                    <div className="absolute left-0 md:left-4 top-2 bottom-2 w-[2px] bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-white/5 pointer-events-none" />

                    {education.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ type: "spring", stiffness: 80, damping: 20, delay: index * 0.1 }}
                            className="relative mb-14 pl-6 md:pl-16 last:mb-0 group"
                        >
                            {/* Animated Timeline Tracker Bullet Node */}
                            <div className={`absolute -left-[5px] md:left-[11px] top-1.5 flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#050816] border-2 border-white/30 z-20 transition-all duration-500 ${item.glowColor}`}>
                                <div className="h-1.5 w-1.5 rounded-full bg-white/40 group-hover:bg-current transition-colors duration-300" />
                            </div>

                            {/* Main Display Glassmorphic Container Card */}
                            <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 md:p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/15 hover:bg-white/[0.04] shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_40px_rgba(6,182,212,0.05)]">
                                
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        {/* Icon Wrapper Frame */}
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 shadow-inner group-hover:scale-105 transition-transform duration-300">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide transition-colors duration-300 group-hover:text-cyan-300">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm md:text-base text-gray-400 font-medium mt-0.5">{item.place}</p>
                                        </div>
                                    </div>

                                    {/* Structural Timestamp Badge */}
                                    <div className="flex items-center gap-2 rounded-full bg-white/[0.03] border border-white/10 px-4 py-1.5 h-fit w-fit shrink-0">
                                        <Calendar size={14} className="text-gray-400" />
                                        <span className="text-xs font-semibold text-gray-300 tracking-wider">{item.year}</span>
                                    </div>
                                </div>

                                {/* Deep Conceptual Scope Parameters */}
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-6 border-t border-white/[0.05] pt-4 tracking-wide">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}