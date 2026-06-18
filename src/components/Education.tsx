"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-32 px-6 bg-[#F5F5F7]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-12"
        >
          {t("education.title")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl p-8"
        >
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-[#0071E3] rounded-full flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#1D1D1F] mb-1">
                Universitas Dian Nuswantoro
              </h3>
              <p className="text-[#6E6E73] mb-2">Informatics</p>
              <span className="text-sm text-[#0071E3] font-medium">2022 - Present</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
