"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { t, messages } = useLanguage();
  const items = messages.experience.items;

  return (
    <section id="experience" className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-20 tracking-tight"
        >
          {t("experience.title")}
        </motion.h2>

        <div className="relative">
          {/* Vertical rail */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#E8E8ED] via-[#E8E8ED] to-transparent md:-translate-x-px" />

          <div className="space-y-16 md:space-y-24">
            {items.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-12 md:pl-0"
              >
                {/* Dot on the rail */}
                <span
                  className="absolute left-4 md:left-1/2 top-8 w-3 h-3 rounded-full bg-white border-2 border-[#0071E3] shadow-[0_0_0_4px_rgba(255,255,255,1)] md:-translate-x-1/2"
                  aria-hidden
                />

                <div className="md:grid md:grid-cols-2 md:gap-12">
                  {/* Side column: period + company (anchors the card to the rail on desktop) */}
                  <div
                    className={`md:pr-12 ${
                      index % 2 === 0 ? "md:text-right md:order-1" : "md:text-left md:order-2"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 + 0.1 }}
                      className={`hidden md:flex flex-col ${
                        index % 2 === 0 ? "md:items-end" : "md:items-start"
                      }`}
                    >
                      <span className="text-sm font-medium text-[#0071E3] tracking-wide">
                        {exp.period}
                      </span>
                      <span className="mt-2 text-lg font-semibold text-[#1D1D1F]">
                        {exp.company}
                      </span>
                    </motion.div>
                  </div>

                  {/* Card column */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className={`md:pl-12 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
                  >
                    <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_2px_24px_rgba(0,0,0,0.06)] ring-1 ring-[#E8E8ED]/70 transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
                      {/* Mobile-only header (rail-side header is hidden on mobile) */}
                      <div className="md:hidden">
                        <span className="text-sm font-medium text-[#0071E3] tracking-wide">
                          {exp.period}
                        </span>
                        <p className="mt-1 text-sm text-[#6E6E73]">{exp.company}</p>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-semibold text-[#1D1D1F] mt-4 md:mt-0 tracking-tight">
                        {exp.role}
                      </h3>

                      <p className="text-[#6E6E73] mt-4 leading-relaxed text-base md:text-[17px]">
                        {exp.description}
                      </p>

                      <ul className="mt-6 space-y-2.5">
                        {exp.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-3 text-[#1D1D1F]/85 leading-relaxed"
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
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
