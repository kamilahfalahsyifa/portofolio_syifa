"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const organizations = [
  {
    id: "1",
    name: "KKO PAUD Kota Semarang",
    role: "Frontend Developer & UI/UX Designer",
    year: "2024",
    description: "Developed the official organization profile website for KKO PAUD Kota Semarang during an internship at Diskominfo Kota Semarang.",
  },
];

export default function Organization() {
  const { t } = useLanguage();

  return (
    <section id="organization" className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-12"
        >
          {t("organization.title")}
        </motion.h2>

        <div className="space-y-6">
          {organizations.map((org, index) => (
            <motion.div
              key={org.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#F5F5F7] rounded-2xl p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-[#1D1D1F]">{org.name}</h3>
                <span className="text-sm text-[#0071E3] font-medium">{org.year}</span>
              </div>
              <p className="text-[#0071E3] mb-3">{org.role}</p>
              <p className="text-[#6E6E73] leading-relaxed">{org.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
