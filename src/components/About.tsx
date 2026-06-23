"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Building2, Target, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const cardKeys = [
  { icon: MapPin, label: "cards.locationLabel", value: "cards.locationValue" },
  { icon: GraduationCap, label: "cards.universityLabel", value: "cards.universityValue" },
  { icon: Target, label: "cards.focusLabel", value: "cards.focusValue" },
  { icon: Briefcase, label: "cards.roleLabel", value: "cards.roleValue" },
  { icon: Building2, label: "cards.orgLabel", value: "cards.orgValue" },
] as const;

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-6 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] mb-5 tracking-tight">
            {t("about.title")}
          </h2>
          <p className="text-base md:text-lg text-[#1D1D1F]/85 leading-relaxed max-w-2xl mb-3">
            {t("about.summary")}
          </p>
          <p className="text-base md:text-lg text-[#6E6E73] leading-relaxed max-w-2xl">
            {t("about.intro")}
          </p>
        </motion.div>

        {/* Info cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {cardKeys.map((c, i) => (
            <motion.div
              key={c.value}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-white rounded-2xl p-5 flex flex-col gap-2"
            >
              <c.icon className="w-5 h-5 text-[#0071E3]" />
              <p className="text-xs text-[#6E6E73] tracking-wide uppercase">
                {t(`about.${c.label}`)}
              </p>
              <p className="text-base font-medium text-[#1D1D1F] leading-snug">
                {t(`about.${c.value}`)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Education + Organization note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="bg-white rounded-2xl p-6 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-[#F5F5F7] flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5 text-[#1D1D1F]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-[#6E6E73]">Education</p>
              <h3 className="text-lg font-semibold text-[#1D1D1F] mt-1">
                Universitas Dian Nuswantoro
              </h3>
              <p className="text-sm text-[#6E6E73] mt-1">Informatics · 2022 – Present</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-[#F5F5F7] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-[#1D1D1F]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-[#6E6E73]">Organization</p>
              <h3 className="text-lg font-semibold text-[#1D1D1F] mt-1">
                KKO PAUD Kota Semarang
              </h3>
              <p className="text-sm text-[#0071E3] font-medium mt-1">
                Front End Developer & UI/UX Designer
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}