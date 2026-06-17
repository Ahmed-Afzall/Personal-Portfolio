"use client";

import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Terminal } from "@/components/sections/terminal";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">


      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
  <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-indigo-300/30 rounded-full blur-3xl" />
  <div className="absolute top-[200px] right-[-100px] w-[400px] h-[400px] bg-purple-300/30 rounded-full blur-3xl" />
  <div className="absolute bottom-[-100px] left-[30%] w-[400px] h-[400px] bg-pink-300/20 rounded-full blur-3xl" />
</div>


      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Terminal />
      <Contact />
      
      {/* Simple Footer */}
      <footer className="py-12 border-t border-white/5 bg-background/50 backdrop-blur-md">
        <div className="container mx-auto px-6 text-center">
          <p className="text-foreground/30 text-sm font-medium">
            © {new Date().getFullYear()} Afzal Ahmed Siddiqui. All rights reserved.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-foreground/20 mt-2 font-bold">
            Built with Next.js, Framer Motion & Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  );
}
