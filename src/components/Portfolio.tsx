"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Section, Card, Badge } from "./UI";
import { FolderKanban, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Portfolio = () => {
  const { dict } = useLanguage();
  const { Portfolio: data } = dict;

  return (
    <Section id="portfolio">
      <div className="flex items-center gap-3 mb-12">
        <FolderKanban className="text-purple-400" size={28} />
        <h2 className="text-3xl font-bold">{data.title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="group overflow-hidden p-0 border-slate-800/50 hover:border-purple-500/30">
              <div className="relative h-48 w-full bg-slate-800 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-purple-500/5 text-purple-400 border-purple-500/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
