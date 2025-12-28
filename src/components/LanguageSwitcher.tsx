"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Languages } from "lucide-react";

export const LanguageSwitcher = () => {
  const { language, setLanguage, dict } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:bg-slate-800 transition-colors text-sm font-medium"
    >
      <Languages size={16} className="text-blue-400" />
      <span>{language === "zh" ? "English" : "中文"}</span>
    </button>
  );
};
