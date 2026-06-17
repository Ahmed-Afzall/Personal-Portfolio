"use client";

import { motion } from "framer-motion";
import { Terminal as TerminalIcon, Circle } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export function Terminal() {
  const commands = [
    { cmd: "whoami", output: PERSONAL_INFO.name },
    { cmd: "role", output: "Data Analyst" },
    { cmd: "skills", output: "Python | ML | Power BI | Analytics" },
    { cmd: "focus", output: "Building data-driven systems" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto glass-card border-black/5 shadow-2xl shadow-black/5 dark:border-indigo-500/20 dark:shadow-none"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-200/20 border-b border-black/5 dark:bg-white/5 dark:border-white/10">
            <div className="flex gap-2">
              <Circle size={12} className="fill-red-400 text-red-400 dark:fill-red-500 dark:text-red-500" />
              <Circle size={12} className="fill-yellow-400 text-yellow-400 dark:fill-yellow-500 dark:text-yellow-500" />
              <Circle size={12} className="fill-green-400 text-green-400 dark:fill-green-500 dark:text-green-500" />
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-foreground/30">
              <TerminalIcon size={12} />
              <span>zsh — portfolio</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-8 font-mono text-sm md:text-base leading-relaxed">
            {commands.map((item, i) => (
              <div key={i} className="mb-6 last:mb-0">
                <div className="flex items-center gap-3 text-indigo-500 mb-1 dark:text-indigo-400">
                  <span className="text-green-500">➜</span>
                  <span className="text-purple-500 dark:text-purple-400">~</span>
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "auto" }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.5 }}
                    className="overflow-hidden whitespace-nowrap font-bold"
                  >
                    {item.cmd}
                  </motion.span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1 + i * 0.5 }}
                  className="text-slate-600 pl-6 dark:text-foreground/70"
                >
                  {item.output}
                </motion.div>
              </div>
            ))}
            <div className="flex items-center gap-3 text-indigo-500 mt-6 dark:text-indigo-400">
              <span className="text-green-500">➜</span>
              <span className="text-purple-500 dark:text-purple-400">~</span>
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2 h-5 bg-indigo-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
