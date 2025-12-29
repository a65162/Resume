"use client";

import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Portfolio } from "@/components/Portfolio";
import { Footer } from "@/components/Footer";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      <LanguageSwitcher />
      
      <div className="space-y-24 pb-24">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Portfolio />
      </div>

      <Footer />
    </main>
  );
}
