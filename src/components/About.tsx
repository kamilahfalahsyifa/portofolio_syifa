"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Focus } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const infoCards = [
  { key: "location", icon: MapPin },
  { key: "university", icon: GraduationCap },
  { key: "focus", icon: Focus },
];

const infoValues: Record<string, string> = {
  location: "locationValue",
  university: "universityValue",
  focus: "focusValue",
};

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-6"
        >
          {t("about.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-[#6E6E73] leading-relaxed mb-12"
        >
          {t("about.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {infoCards.map((card) => (
            <div
              key={card.key}
              className="bg-[#F5F5F7] rounded-2xl p-6"
            >
              <card.icon className="w-6 h-6 text-[#0071E3] mb-4" />
              <p className="text-sm text-[#6E6E73] mb-1">{t(`about.${card.key}`)}</p>
              <p className="text-lg font-medium text-[#1D1D1F]">{t(`about.${infoValues[card.key]}`)}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
