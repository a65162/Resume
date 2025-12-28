"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Section } from "./UI";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  const { dict, language } = useLanguage();
  const { Hero: data } = dict;

  return (
    <Section className="min-h-[70vh] flex flex-col justify-center items-center text-center pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        {language === "zh" && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mb-8 relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-xl shadow-blue-500/10"
          >
            <Image
              src="/my-photo.webp"
              alt={data.name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        )}

        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          <span className="text-gradient">{data.name}</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-8 font-light">
          {data.tagline}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {data.qualities.map((quality, index) => (
            <motion.span
              key={quality}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-sm text-slate-300"
            >
              {quality}
            </motion.span>
          ))}
        </div>

        <div className="flex gap-6">
          <a
            href={data.socials.email}
            className="text-slate-400 hover:text-blue-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href={data.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href={data.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </motion.div>
    </Section>
  );
};
