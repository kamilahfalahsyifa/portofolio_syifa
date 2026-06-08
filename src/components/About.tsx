"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const skills = {
  mobile: ["Flutter", "Dart", "Firebase", "REST API", "Google ML Kit"],
  backend: ["Node.js", "Laravel", "PostgreSQL", "Redis", "REST API"],
  frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  tools: ["Git", "Figma", "VS Code", "Android Studio", "Xcode"],
};

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 px-6 bg-[#F5F5F7]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-12"
        >
          {t("about.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-[#6E6E73] leading-relaxed mb-16"
        >
          {t("about.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-8">
            {t("about.skillsTitle")}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                className="bg-white rounded-2xl p-6"
              >
                <h4 className="text-lg font-semibold text-[#1D1D1F] mb-4 capitalize">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-[#F5F5F7] rounded-full text-sm text-[#6E6E73]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
