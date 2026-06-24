"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t, messages } = useLanguage();
  const about = messages.about as { p1: string; p2: string; p3: string };

  return (
    <section id="about" className="py-24 px-6 bg-[#F5F5F7]">
      <div className="mx-auto" style={{ maxWidth: "760px" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#1D1D1F] tracking-tight mb-8"
        >
          {t("about.title")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-5"
        >
          <p className="text-base md:text-lg text-[#1D1D1F]/85 leading-relaxed">
            {about.p1}
          </p>
          <p className="text-base md:text-lg text-[#1D1D1F]/85 leading-relaxed">
            {about.p2}
          </p>
          <p className="text-base md:text-lg text-[#1D1D1F]/85 leading-relaxed">
            {about.p3}
          </p>
        </motion.div>
      </div>
    </section>
  );
}