"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { t, messages } = useLanguage();
  const items = messages.experience.items;

  return (
    <section id="experience" className="py-20 px-6 bg-[#F5F5F7]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#1D1D1F] mb-12 tracking-tight"
        >
          {t("experience.title")}
        </motion.h2>

        <div className="relative">
          {/* Vertical rail */}
          <div className="absolute left-2 top-0 bottom-0 w-px bg-[#E8E8ED] md:left-1/2 md:-translate-x-px" />

          <div className="space-y-10">
            {items.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={`${exp.company}-${exp.role}-${index}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="relative pl-8 md:pl-0"
                >
                  <span
                    className="absolute left-2 top-3 w-3 h-3 rounded-full bg-white border-2 border-[#0071E3] md:left-1/2 md:-translate-x-1/2"
                    aria-hidden
                  />

                  <div className="md:grid md:grid-cols-2 md:gap-10">
                    <div
                      className={`md:pr-8 ${
                        isLeft ? "md:text-right md:order-1" : "md:text-left md:order-2 md:col-start-2"
                      }`}
                    >
                      <p className="text-xs font-medium text-[#0071E3] tracking-wide uppercase">
                        {exp.period}
                      </p>
                      <p className="mt-1 text-base font-semibold text-[#1D1D1F]">
                        {exp.company}
                      </p>
                    </div>

                    <div
                      className={`mt-2 md:mt-0 ${
                        isLeft ? "md:order-2 md:col-start-2 md:pl-8" : "md:order-1 md:pr-8"
                      }`}
                    >
                      <div className="bg-white rounded-2xl p-6 border border-[#E8E8ED]">
                        <h3 className="text-lg font-semibold text-[#1D1D1F] tracking-tight">
                          {exp.role}
                        </h3>
                        <ul className="mt-4 space-y-2">
                          {exp.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex items-start gap-3 text-sm text-[#1D1D1F]/85 leading-relaxed"
                            >
                              <span
                                className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-[#0071E3] shrink-0"
                                aria-hidden
                              />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}