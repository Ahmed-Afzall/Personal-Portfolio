"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/data/portfolio";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-4 text-center">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          {EXPERIENCE.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="relative pl-8 md:pl-12 pb-16 last:pb-0 group"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-indigo-500/50 via-purple-500/50 to-transparent group-last:bg-indigo-500/50" />
              
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-0 w-[11px] h-[11px] rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:scale-150 transition-transform duration-300" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-indigo-400 transition-colors">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 text-foreground/50 font-medium">
                    <Briefcase size={14} className="text-indigo-500" />
                    <span>{item.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-white/5 text-sm font-semibold text-indigo-400">
                  <Calendar size={14} />
                  <span>{item.period}</span>
                </div>
              </div>

              <div className="grid gap-4">
                {item.description.map((desc, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex gap-4 p-4 glass-card border-white/5 hover:border-white/10 transition-colors"
                  >
                    <CheckCircle2 className="text-indigo-500 flex-shrink-0 mt-1" size={18} />
                    <p className="text-foreground/70 leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
