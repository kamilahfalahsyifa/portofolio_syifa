"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const experiences = [
  {
    id: "1",
    title: "Mobile Development Projects",
    company: "Freelance",
    period: "2024 - Present",
    description: "Developing cross-platform mobile applications for clients across various industries.",
  },
  {
    id: "2",
    title: "POS Mobile Application",
    company: "Academic Project",
    period: "2025",
    description: "Built a comprehensive Point of Sale application using Flutter with real-time inventory management.",
  },
  {
    id: "3",
    title: "OCR Receipt Scanner",
    company: "Academic Project",
    period: "2025",
    description: "Developed a receipt scanning app with Google ML Kit integration for automatic expense tracking.",
  },
  {
    id: "4",
    title: "Web Development",
    company: "Self-taught",
    period: "2024 - Present",
    description: "Learning and building web applications using React, Next.js, and various modern frameworks.",
  },
];

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-16"
        >
          {t("experience.title")}
        </motion.h2>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#E8E8ED] transform md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-12"
              >
                <div className="flex-1 md:text-right">
                  {index % 2 === 0 ? <div className="md:pl-12" /> : <div className="md:pr-12" />}
                </div>

                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[#0071E3] transform md:-translate-x-1/2 -translate-y-1" />

                <div className="flex-1 md:pl-12">
                  <div className="bg-[#F5F5F7] rounded-2xl p-6 md:ml-0">
                    <span className="text-sm font-medium text-[#0071E3]">{exp.period}</span>
                    <h3 className="text-xl font-semibold text-[#1D1D1F] mt-2">{exp.title}</h3>
                    <p className="text-[#6E6E73] text-sm mt-1">{exp.company}</p>
                    <p className="text-[#6E6E73] mt-4 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
