"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { ArrowRight, LogoGithub, LogoLinkedin } from "@gravity-ui/icons";
import { motion, AnimatePresence } from "framer-motion";

// Link-er order change kora holo: Education -> Skills -> Projects -> Contact
const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeSection, setActiveSection] = useState("Home");

  // Scroll position tracking for dynamic highlight
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      if (window.scrollY < 100) {
        setActiveSection("Home");
        return;
      }

      for (const link of navLinks) {
        if (link.href === "#") continue;
        const el = document.getElementById(link.href.replace("#", ""));
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full pointer-events-none">
      <div className="mx-auto mt-4 w-[95%] max-w-7xl pointer-events-auto">
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-6 py-3.5 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-300">
          
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={() => setActiveSection("Home")}
            className="group text-2xl font-extrabold tracking-wide text-white flex items-center gap-0.5"
          >
            Nayan
            <span className="h-2 w-2 rounded-full bg-cyan-400 inline-block shadow-[0_0_12px_rgba(34,211,238,0.8)] transition-transform duration-300 group-hover:scale-125" />
          </Link>

          {/* Desktop Navigation with Smooth Hover & Persistent Click Highlight */}
          <div className="hidden items-center gap-1 md:flex bg-white/[0.02] p-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.name;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setActiveSection(link.name)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-500 rounded-xl ${
                    isActive ? "text-cyan-400 font-semibold" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {/* Smooth Background Hover Bubble */}
                  {hoveredIndex === idx && (
                    <motion.span
                      layoutId="navHoverBubble"
                      className="absolute inset-0 rounded-xl bg-white/[0.07]"
                      transition={{ type: "spring", stiffness: 300, damping: 28 }}
                    />
                  )}

                  {/* Active Highlight Border/Indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="navActiveIndicator"
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              href="#contact"
              onClick={() => setActiveSection("Contact")}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_4px_20px_rgba(6,182,212,0.25)]"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine" />
              Let&apos;s Talk
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition duration-300 hover:bg-white/10 md:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mt-2 w-full md:hidden"
            >
              <div className="rounded-2xl border border-white/10 bg-black/90 p-6 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
                <div className="flex flex-col gap-3">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.name;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => {
                          setActiveSection(link.name);
                          setIsOpen(false);
                        }}
                        className={`group flex items-center justify-between rounded-xl px-4 py-2.5 text-base font-medium transition-all duration-300 ${
                          isActive 
                            ? "bg-cyan-500/10 text-cyan-400 font-bold border-l-4 border-cyan-400 pl-3" 
                            : "text-gray-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {link.name}
                        <ArrowRight 
                          size={16} 
                          className={`transition-all duration-300 ${
                            isActive ? "opacity-100 translate-x-0 text-cyan-400" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-gray-400"
                          }`} 
                        />
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Mobile Social Links */}
                <div className="mt-5 flex items-center justify-center gap-4">
                  <Link
                    href="https://github.com/"
                    target="_blank"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:scale-110 hover:border-cyan-500/30 hover:bg-cyan-950/40 hover:text-cyan-400"
                  >
                    <LogoGithub size={18} />
                  </Link>

                  <Link
                    href="https://linkedin.com/"
                    target="_blank"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:scale-110 hover:border-cyan-500/30 hover:bg-cyan-950/40 hover:text-cyan-400"
                  >
                    <LogoLinkedin size={18} />
                  </Link>

                  <Link
                    href="mailto:example@gmail.com"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:scale-110 hover:border-cyan-500/30 hover:bg-cyan-950/40 hover:text-cyan-400"
                  >
                    <Mail size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}