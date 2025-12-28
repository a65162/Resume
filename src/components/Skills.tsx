"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Section, Badge, Card } from "./UI";
import { Code2 } from "lucide-react";
import { motion } from "framer-motion";

export const Skills = () => {
  const { dict } = useLanguage();
  const { Skills: data } = dict;

  return (
    <Section id="skills">
      <div className="flex items-center gap-3 mb-12">
        <Code2 className="text-emerald-400" size={28} />
        <h2 className="text-3xl font-bold">{data.title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(data.categories).map(([category, skills], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full border-slate-800/50 hover:border-emerald-500/30">
              <h3 className="text-lg font-semibold mb-4 text-emerald-400/90">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-emerald-500/5 text-emerald-400 border-emerald-500/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
