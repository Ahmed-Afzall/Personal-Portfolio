"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/data/portfolio";
import { Github, ExternalLink, Zap } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-purple-500/[0.02]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-4 text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-foreground/50 max-w-xl mx-auto text-center">
            Turning data into impactful solutions through engineering and analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <GlassCard key={index} delay={index * 0.1} className="h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-500">
                  <Zap size={24} />
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="text-foreground/30 hover:text-indigo-400 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-foreground/30 hover:text-indigo-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-foreground/60 mb-6 flex-grow">
                {project.description}
              </p>

              <div className="space-y-4 pt-6 border-t border-white/5 mt-auto">
                <div className="flex items-center gap-2 text-sm text-green-400 font-medium">
                  <Zap size={14} className="fill-green-400/20" />
                  <span>{project.impact}</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 glass-card border-white/10 text-foreground/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
