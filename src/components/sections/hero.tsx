"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Light mode background blobs */}
      <div className="absolute top-1/4 -left-20 w-[40rem] h-[40rem] bg-indigo-500/5 rounded-full blur-[128px] animate-pulse dark:hidden" />
      <div className="absolute bottom-1/4 -right-20 w-[40rem] h-[40rem] bg-purple-500/5 rounded-full blur-[128px] animate-pulse delay-700 dark:hidden" />
      
      {/* Name glow highlight - Light Mode only */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-indigo-500/3 blur-[100px] rounded-full dark:hidden pointer-events-none" />

      {/* Dark mode background blobs */}
      <div className="hidden dark:block absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px] animate-pulse" />
      <div className="hidden dark:block absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] animate-pulse delay-700" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-5 py-2 mb-8 glass-card border-indigo-500/20 text-indigo-700 text-sm font-bold shadow-indigo-500/5 dark:border-indigo-500/20 dark:text-indigo-400 dark:shadow-none"
        >
          Data Analyst & MSc Scholar
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold font-space mb-8 tracking-tight leading-tight text-slate-900 dark:text-white drop-shadow-sm"
        >
          Afzal{" "}
          <br className="md:hidden" />
          <span className="text-black dark:text-transparent dark:bg-gradient-to-r dark:from-indigo-500 dark:to-pink-500 dark:bg-clip-text">
            Ahmed Siddiqui
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto mb-12 leading-relaxed dark:text-slate-400 font-medium"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#projects"
            className="group relative px-10 py-4.5 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-full font-bold transition-all duration-300 flex items-center gap-2 overflow-hidden shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">View Projects</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="resume.pdf"
            className="px-10 py-4.5 glass-card border-black/10 hover:border-indigo-500/30 transition-all duration-300 flex items-center gap-2 font-bold text-slate-800 dark:text-slate-200 dark:border-white/10 dark:hover:border-indigo-500/50 shadow-md"
          >
            <span>Download Resume</span>
            <Download size={18} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] text-slate-500 font-black dark:text-slate-600">Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-indigo-600 to-transparent dark:from-indigo-900" />
      </motion.div>
    </section>
  );
}
