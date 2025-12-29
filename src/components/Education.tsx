"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Section, Card } from "./UI";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export const Education = () => {
  const { dict } = useLanguage();
  const { Education: data } = dict;

  return (
    <Section id="education">
      <div className="flex items-center gap-3 mb-12">
        <GraduationCap className="text-emerald-400" size={28} />
        <h2 className="text-3xl font-bold">{data.title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.schools.map((item, index) => (
          <motion.div
            key={item.school + index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full hover:border-emerald-500/50 transition-colors group">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                    <GraduationCap size={24} />
                  </div>
                  <span className="text-sm text-slate-500 font-mono bg-slate-800/50 px-3 py-1 rounded-full">
                    {item.period}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-emerald-400 transition-colors">
                  {item.school}
                </h3>
                <p className="text-slate-400 font-medium">
                  {item.major}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
