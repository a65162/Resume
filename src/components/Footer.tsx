"use client";

import { useLanguage } from "@/context/LanguageContext";

export const Footer = () => {
  const { dict } = useLanguage();
  const { Footer: data } = dict;

  return (
    <footer className="py-12 px-6 border-t border-slate-900 text-center">
      <p className="text-slate-500 text-sm mb-2">{data.rights}</p>
      <p className="text-slate-600 text-xs">{data.builtWith}</p>
    </footer>
  );
};
