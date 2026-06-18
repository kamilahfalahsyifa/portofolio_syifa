"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const skills = [
  "Flutter", "Dart", "Firebase", "REST API", "Google ML Kit",
  "Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript",
  "React", "TypeScript", "Next.js", "Tailwind CSS",
  "Git", "Figma", "VS Code", "Android Studio", "Xcode",
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-32 px-6 bg-[#F5F5F7]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-12"
        >
          {t("skills.title")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3"
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-5 py-2.5 bg-white rounded-full text-base text-[#1D1D1F] hover:bg-[#0071E3] hover:text-white transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
