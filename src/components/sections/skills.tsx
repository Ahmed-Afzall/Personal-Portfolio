"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/data/portfolio";
import { Code2, BarChart, Database, Terminal, Workflow, Brain } from "lucide-react";

const SKILL_ICONS: Record<string, any> = {
  "Python": <Terminal className="text-yellow-400" />,
  "Machine Learning": <Brain className="text-pink-500" />,
  "Data Analysis": <BarChart className="text-blue-400" />,
  "Power BI": <BarChart className="text-yellow-500" />,
  "Data Visualization": <Code2 className="text-indigo-400" />,
  "SQL": <Database className="text-purple-400" />,
  "GitHub": <Code2 className="text-white" />,
  "Healthcare Analytics": <Workflow className="text-red-400" />,
  "Predictive Modeling": <Brain className="text-green-400" />,
  "Excel": <BarChart className="text-green-500" />,
  "Tableau": <BarChart className="text-blue-500" />,
  "Statistics": <Database className="text-indigo-500" />,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-indigo-500/[0.02]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-foreground/50 max-w-xl mx-auto">
            A comprehensive set of tools and technologies used to solve complex data problems.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-6 glass-card border-white/5 hover:border-indigo-500/30 flex flex-col items-center gap-4 text-center cursor-default"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-indigo-500/10 transition-colors duration-500">
                {SKILL_ICONS[skill] || <Code2 size={32} />}
              </div>
              <h3 className="font-bold text-foreground/80 group-hover:text-indigo-400 transition-colors">
                {skill}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
