"use client";

import { motion } from "framer-motion";
import { GraduationCap, Database, BrainCircuit, Target } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";
import { GlassCard } from "@/components/ui/glass-card";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-8">
              Data-Driven <span className="text-gradient">Mindset</span>
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              {PERSONAL_INFO.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 p-4 glass-card border-white/5">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-500 flex-shrink-0">
                  <Database size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Analytics</h4>
                  <p className="text-sm text-foreground/50">Raw data to insight</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 glass-card border-white/5">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 flex-shrink-0">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Impact</h4>
                  <p className="text-sm text-foreground/50">Real-world results</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
             <h3 className="text-2xl font-bold font-space flex items-center gap-3 mb-6">
                <GraduationCap className="text-indigo-500" /> Education
             </h3>
             {PERSONAL_INFO.education.map((edu, index) => (
                <GlassCard key={index} delay={index * 0.1}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-indigo-400">{edu.degree}</h4>
                    <span className="text-xs font-mono px-2 py-1 glass-card border-white/10 uppercase tracking-wider">
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-foreground/60">{edu.institution}</p>
                </GlassCard>
             ))}

             <div className="pt-6">
                <div className="p-6 glass-card border-indigo-500/20 bg-indigo-500/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 text-indigo-500 opacity-20 group-hover:scale-110 transition-transform">
                    <BrainCircuit size={64} />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Ongoing Learning</h4>
                  <p className="text-sm text-foreground/60">
                    Currently specializing in advanced Data Science and Machine Learning to stay ahead of the evolving data landscape.
                  </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
