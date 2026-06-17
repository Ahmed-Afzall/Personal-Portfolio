"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";
import { GlassCard } from "@/components/ui/glass-card";
import { sendEmail } from "@/lib/email";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    const result = await sendEmail(formRef.current);

    if (result.success) {
      setStatus("success");
      setMessage("Message sent successfully");
      formRef.current.reset();
    } else {
      setStatus("error");
      setMessage("Failed to send message");
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-4 text-center">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-foreground/50 max-w-xl mx-auto text-center">
            Have a project in mind or want to discuss data analytics? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-space mb-8">Contact Information</h3>
            
            <GlassCard className="flex items-center gap-6 group hover:border-indigo-500/50 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-foreground/30 mb-1">Email</p>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-medium hover:text-indigo-400 transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </GlassCard>

            <GlassCard className="flex items-center gap-6 group hover:border-indigo-500/50 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-foreground/30 mb-1">Phone</p>
                <p className="text-lg font-medium">{PERSONAL_INFO.phone}</p>
              </div>
            </GlassCard>

            <GlassCard className="flex items-center gap-6 group hover:border-indigo-500/50 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                <Github size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-foreground/30 mb-1">GitHub</p>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-indigo-400 transition-colors">
                  Ahmed-Afzall
                </a>
              </div>
            </GlassCard>

            <div className="flex gap-4 pt-4">
              {[
                { icon: <Linkedin size={20} />, href: PERSONAL_INFO.linkedin },
                { icon: <Github size={20} />, href: PERSONAL_INFO.github },
                { icon: <Mail size={20} />, href: `mailto:${PERSONAL_INFO.email}` },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 glass-card border-white/5 flex items-center justify-center hover:border-indigo-500/50 hover:text-indigo-400 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <GlassCard className="p-8 mt-10 lg:mt-16">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-foreground/50 ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full px-6 py-4 rounded-2xl glass-card border-white/5 focus:border-indigo-500/50 outline-hidden transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-foreground/50 ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 rounded-2xl glass-card border-white/5 focus:border-indigo-500/50 outline-hidden transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-foreground/50 ml-1">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  placeholder="How can I help you?"
                  className="w-full px-6 py-4 rounded-2xl glass-card border-white/5 focus:border-indigo-500/50 outline-hidden transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full group py-4 bg-linear-to-r from-indigo-600 to-purple-600 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
                {status !== "sending" && (
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                )}
              </button>

              {message && (
                <p className={`text-center text-sm font-medium mt-4 ${status === "success" ? "text-green-400" : "text-red-400"}`}>
                  {message}
                </p>
              )}
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
