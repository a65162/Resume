"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Section, Card } from "./UI";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export const Experience = () => {
  const { dict } = useLanguage();
  const { Experience: data } = dict;

  return (
    <Section id="experience">
      <div className="flex items-center gap-3 mb-12">
        <Briefcase className="text-blue-400" size={28} />
        <h2 className="text-3xl font-bold">{data.title}</h2>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
        {data.jobs.map((job, index) => (
          <motion.div
            key={job.company + index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            {/* Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 bg-slate-950 text-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <div className="w-2 h-2 rounded-full bg-current"></div>
            </div>

            {/* Content */}
            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-100">{job.title}</h3>
                  <p className="text-blue-400 font-medium">{job.company}</p>
                </div>
                <span className="text-sm text-slate-500 font-mono bg-slate-800/50 px-3 py-1 rounded-full self-start">
                  {job.period}
                </span>
              </div>
              <ul className="space-y-2">
                {job.description.map((item, i) => (
                  <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                    <span className="text-blue-500/50 mt-1.5 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
