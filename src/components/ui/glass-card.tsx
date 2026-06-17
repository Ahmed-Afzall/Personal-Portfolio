"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
  delay?: number;
}


export function GlassCard({ children, className, animate = true, delay = 0 }: GlassCardProps) {
  const content = (
    <div className={cn(
      "glass-card p-6 relative overflow-hidden group transition-all duration-700",
      "hover:border-indigo-600/30 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/10 hover:brightness-[1.02]",
      "dark:hover:border-indigo-500/30 dark:hover:shadow-indigo-500/10 dark:hover:brightness-100 dark:hover:-translate-y-1",
      className
    )}>
      {/* Premium Light Mode depth layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/30 to-white/50 opacity-100 dark:opacity-0 pointer-events-none transition-opacity" />
      
      {/* Dark mode overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 opacity-0 dark:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10">{children}</div>
    </div>
  );

  if (!animate) return content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {content}
    </motion.div>
  );
}
