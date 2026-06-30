"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle2 } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Apnar backend ba form service pipeline ekhane integrate korte parben
    console.log("Form Data Submitted:", formState);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 4000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] px-6 py-28 text-white select-none"
    >
      {/* Ambient Background Blur Layer */}
      <div className="absolute left-[-10%] top-[30%] h-[450px] w-[450px] rounded-full bg-blue-500/5 blur-[140px] pointer-events-none" />
      <div className="absolute right-[-10%] bottom-[20%] h-[450px] w-[450px] rounded-full bg-purple-500/5 blur-[140px] pointer-events-none" />

      {/* Technic Space Matrix Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        
        {/* Animated Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            <Sparkles size={14} className="text-cyan-400" />
            Get In Touch
          </div>

          <h2 className="text-4xl font-extrabold sm:text-5xl tracking-tight leading-none">
            Let's Collaborate On{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Something Great
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Have a project in mind, looking for a developer, or just want to say hello? Drop a message!
          </p>
        </motion.div>

        {/* Dual Column Layout Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-12 lg:grid-cols-5 items-start"
        >
          
          {/* Left Column: Contact Cards & Socials (2 Columns wide) */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            
            <h3 className="text-2xl font-bold tracking-wide mb-4">Contact Information</h3>
            
            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-5 rounded-xl border border-white/[0.06] bg-white/[0.01] backdrop-blur-xl">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Me</p>
                  <a href="mailto:your.email@example.com" className="text-sm md:text-base text-gray-300 hover:text-cyan-400 transition-colors duration-200">ndeynayan123@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-xl border border-white/[0.06] bg-white/[0.01] backdrop-blur-xl">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Call Me</p>
                  <a href="tel:+1234567890" className="text-sm md:text-base text-gray-300 hover:text-purple-400 transition-colors duration-200">+91 6291838357</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-xl border border-white/[0.06] bg-white/[0.01] backdrop-blur-xl">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-pink-500/10 text-pink-400 border border-pink-500/20">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Location</p>
                  <p className="text-sm md:text-base text-gray-300">Kolkata, India</p>
                </div>
              </div>
            </div>

            {/* Social Connect Networking Cloud */}
            <div className="pt-6">
              <p className="text-sm text-gray-400 mb-4 font-medium tracking-wide">Connect with me on social platforms:</p>
              <div className="flex items-center gap-3">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-gray-400 hover:text-white hover:border-white/30 transition-all duration-300 hover:-translate-y-0.5">
                  <FaGithub size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5">
                  <FaLinkedin size={18} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-gray-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-0.5">
                  <FaFacebook size={18} />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Premium Interactive Contact Form (3 Columns wide) */}
          <motion.div variants={itemVariants} className="lg:col-span-3 w-full">
            <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 md:p-8 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              
              {isSubmitted ? (
                /* Success Feedback Notification state */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 flex flex-col items-center justify-center text-center"
                >
                  <CheckCircle2 size={50} className="text-green-400 mb-4 animate-bounce" />
                  <h4 className="text-xl font-bold mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-400 max-w-sm text-sm">Thank you for reaching out. I have received your transmission and will respond shortly.</p>
                </motion.div>
              ) : (
                /* Form Layer Standard Layout */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Your Name</label>
                      <input 
                        type="text" 
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe" 
                        className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors duration-300 focus:border-cyan-500/50 focus:bg-black/50"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com" 
                        className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors duration-300 focus:border-cyan-500/50 focus:bg-black/50"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Your Message</label>
                    <textarea 
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi, I'd love to talk about a potential project..." 
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors duration-300 focus:border-cyan-500/50 focus:bg-black/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:opacity-95 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:-translate-y-0.5 group active:translate-y-0"
                  >
                    <span>Send Message</span>
                    <Send size={14} className="text-white/80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

