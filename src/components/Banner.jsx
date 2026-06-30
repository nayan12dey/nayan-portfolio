"use client";

import { ArrowRight, LogoGithub, LogoLinkedin } from "@gravity-ui/icons";
import { Download, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export default function Banner() {
    const titles = ["MERN Developer", "Frontend Engineer", "Next.js Specialist", "UI/UX Enthusiast"];
    const [titleIndex, setTitleIndex] = useState(0);
    
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) => titles[titleIndex].slice(0, latest));

    useEffect(() => {
        const controls = animate(count, titles[titleIndex].length, {
            type: "tween",
            duration: 1.5,
            ease: "easeInOut",
            onComplete: () => {
                setTimeout(() => {
                    const reverseControls = animate(count, 0, {
                        type: "tween",
                        duration: 1,
                        ease: "easeInOut",
                        onComplete: () => {
                            setTitleIndex((prev) => (prev + 1) % titles.length);
                        }
                    });
                }, 1500);
            }
        });
        return controls.stop;
    }, [titleIndex]);

    // Tech Icons config layout with custom position & brand color borders
    const techLogos = [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", x: "-18%", y: "8%", delay: 0 },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", x: "-22%", y: "32%", delay: 0.4 },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", x: "-16%", y: "58%", delay: 0.8 },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", x: "-12%", y: "82%", delay: 1.2 },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", x: "104%", y: "12%", delay: 0.2, isDark: true },
        { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", x: "108%", y: "36%", delay: 0.6 },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", x: "106%", y: "62%", delay: 1.0 },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", x: "102%", y: "86%", delay: 1.4 }
    ];

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030014] px-6 pt-24 text-white selection:bg-cyan-500/30">
            
            {/* Ambient Background Glows */}
            <motion.div
                animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/0 blur-[120px] pointer-events-none"
            />

            <motion.div
                animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/0 blur-[120px] pointer-events-none"
            />

            {/* Cyber Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0b_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 py-12 w-full">

                {/* Left Content Column */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 50, damping: 15, duration: 0.8 }}
                    className="flex flex-col items-start justify-center text-left"
                >
                    {/* Animated Premium Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 to-blue-950/40 px-4 py-2 text-sm font-medium text-cyan-400 backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,0.1)]"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        Available For Internship
                        <Sparkles size={14} className="text-cyan-400 animate-pulse" />
                    </motion.div>

                    {/* Main Title Heading */}
                    <div className="flex flex-col space-y-3 w-full">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 60 }}
                            className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-tight"
                        >
                            Hi, I’m{" "}
                            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(34,211,238,0.2)]">
                                Nayan
                            </span>
                        </motion.h1>

                        <div className="flex flex-wrap items-baseline gap-x-3 text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-400 leading-none py-1">
                            <span>A Passionate</span>
                            <span className="relative inline-flex font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 drop-shadow-[0_2px_8px_rgba(255,255,255,0.05)]">
                                <motion.span>{displayText}</motion.span>
                                <motion.span
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                                    className="ml-1 w-[4px] h-[1.1em] bg-cyan-400 self-center"
                                />
                            </span>
                        </div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
                    >
                        I engineer modern, high-fidelity, and fluid web experiences using 
                        <span className="text-cyan-300 font-medium"> Next.js</span>, 
                        <span className="text-cyan-300 font-medium"> React</span>, and scalable architecture. Focused on rendering pixel-perfect interactivity.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 }}
                        className="mt-8 flex flex-wrap items-center gap-4"
                    >
                        <Link
                            href="#projects"
                            className="group relative flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 font-semibold text-black transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_20px_rgba(6,182,212,0.25)]"
                        >
                            <div className="absolute inset-0 w-1/2 h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine" />
                            View Projects
                            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/resume.pdf"
                            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-8 py-4 font-semibold text-slate-200 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/[0.06] hover:text-white"
                        >
                            <Download size={18} className="text-slate-400 group-hover:text-cyan-400" />
                            Download CV
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="mt-10 flex items-center gap-4"
                    >
                        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-slate-700" />
                        <Link
                            href="https://github.com/nayan12dey"
                            target="_blank"
                            className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-cyan-950/30 hover:text-cyan-400"
                        >
                            <LogoGithub size={20} />
                        </Link>

                        <Link
                            href="https://www.linkedin.com/in/nayandey26/"
                            target="_blank"
                            className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-cyan-950/30 hover:text-cyan-400"
                        >
                            <LogoLinkedin size={20} />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Presentation Column (Vertical Frame + Real Tech Logos) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 40, damping: 15, duration: 0.9 }}
                    className="relative flex items-center justify-center lg:justify-end w-full"
                >
                    {/* Visual Focal Aura */}
                    <motion.div
                        animate={{ scale: [1, 1.03, 1] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute h-[480px] w-[400px] rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-[90px] pointer-events-none"
                    />

                    {/* Compact Width + Tall Height Container */}
                    <div className="relative group p-4 w-[340px] h-[400px] sm:w-[380px] sm:h-[460px] flex items-center justify-center">
                        
                        {/* Real Floating Tech Logos dynamically rendered with devicons */}
                        {techLogos.map((tech, index) => (
                            <motion.div
                                key={index}
                                style={{ position: "absolute", left: tech.x, top: tech.y }}
                                animate={{ y: [0, -6, 0] }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    delay: tech.delay,
                                    ease: "easeInOut"
                                }}
                                className="z-20 hidden sm:flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 p-2.5 backdrop-blur-md shadow-[0_8px_16px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:border-cyan-500/40 group-hover:scale-110"
                                title={tech.name}
                            >
                                <img 
                                    src={tech.icon} 
                                    alt={tech.name}
                                    className={`w-full h-full object-contain ${tech.isDark ? 'invert' : ''}`}
                                />
                            </motion.div>
                        ))}

                        <motion.div
                            className="relative z-10 w-full h-full select-none"
                            whileHover={{ rotateY: 3, rotateX: -3, scale: 1.02 }}
                            animate={{ y: [0, -4, 0] }}
                            transition={{
                                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                                transform: { type: "spring", stiffness: 150, damping: 20 }
                            }}
                        >
                            {/* Outer Neon Glow */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-500 opacity-20 blur-sm transition-all duration-500 group-hover:opacity-60 group-hover:scale-[1.01]" />

                            {/* Vertical Frame Image */}
                            <div className="relative w-full h-full overflow-hidden rounded-2xl border border-cyan-400/20 p-1 bg-[#030014]/80 backdrop-blur-3xl shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-500 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_50px_rgba(6,182,212,0.3)]">
                                <Image
                                    src="/portfolio_profile.jpg"
                                    alt="Nayan - Full Stack Developer Portrait"
                                    fill
                                    priority
                                    className="rounded-xl object-cover transition-transform duration-700 group-hover:scale-[1.01] grayscale-[3%] hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-30" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}