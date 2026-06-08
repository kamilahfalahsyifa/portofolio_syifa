"use client";

import { useLanguage, type Language } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "id", label: "ID" },
];

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-[#F5F5F7] rounded-full p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className="relative px-3 py-1.5 text-sm font-medium transition-colors duration-200"
        >
          {language === lang.code && (
            <motion.div
              layoutId="activePill"
              className="absolute inset-0 bg-white rounded-full shadow-sm"
              transition={{ type: "spring", duration: 0.4 }}
            />
          )}
          <span className="relative z-10">
            {lang.label}
          </span>
        </button>
      ))}
    </div>
  );
}
