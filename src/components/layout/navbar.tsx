"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/utils/cn";



const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-100 transition-all duration-500 py-4",
      scrolled 
  ? "bg-gradient-to-r from-white/20 via-white/10 to-white/0 backdrop-blur-3xl backdrop-saturate-150 border-b border-white/20 shadow-sm py-3 dark:bg-background/80 dark:border-white/5" 
  : "bg-transparent"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold font-space text-gradient"
        >
          AAS.
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-semibold text-foreground/70 hover:text-indigo-600 transition-colors dark:hover:text-indigo-400"
            >
              {item.name}
            </motion.a>
          ))}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-full glass-card border-black/5 hover:border-indigo-500/20 transition-all duration-300 dark:border-white/5 dark:hover:border-indigo-500/50"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} className="text-slate-700" />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
           <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-full glass-card border-black/5 dark:border-white/5"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} className="text-slate-700" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground/80">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/90 backdrop-blur-3xl border-b border-black/5 dark:bg-background/95 dark:border-white/5"
          >
            <div className="flex flex-col gap-4 p-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold py-2 border-b border-black/5 text-foreground/80 dark:border-white/5"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
