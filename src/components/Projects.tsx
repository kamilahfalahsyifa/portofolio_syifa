"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  getAllProjectCards,
  type ProjectCard,
} from "@/data/projects";
import type { ProjectCategory } from "@/types/project";

type FilterKey = "all" | ProjectCategory;

const FILTER_KEYS: { key: FilterKey; labelKey: string }[] = [
  { key: "all", labelKey: "projects.filters.all" },
  { key: "mobile", labelKey: "projects.filters.mobile" },
  { key: "web", labelKey: "projects.filters.web" },
  { key: "uiux", labelKey: "projects.filters.uiux" },
];

const CATEGORY_LABEL_KEY = {
  mobile: "projects.filters.mobile",
  web: "projects.filters.web",
  uiux: "projects.filters.uiux",
} as const;

export default function Projects() {
  const { t, language } = useLanguage();
  const allProjects: ProjectCard[] = getAllProjectCards(language).slice(0, 6);
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const visibleProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((p) => p.categories?.includes(activeFilter));

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] tracking-tight">
            {t("projects.title")}
          </h2>
          <p className="text-[#6E6E73] mt-4 text-base md:text-lg leading-relaxed">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          role="tablist"
          aria-label="Project category filter"
          className="flex flex-wrap items-center gap-2 mb-8"
        >
          {FILTER_KEYS.map(({ key, labelKey }) => {
            const isActive = activeFilter === key;
            return (
              <button
                key={key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(key)}
                className={
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 " +
                  (isActive
                    ? "bg-[#1D1D1F] text-white"
                    : "bg-transparent text-[#6E6E73] hover:text-[#1D1D1F]")
                }
              >
                {t(labelKey)}
              </button>
            );
          })}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => {
              const cats = project.categories ?? [project.category];
              return (
                <motion.div
                  layout
                  key={project.slug}
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.97 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  className="h-full"
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group block h-full bg-white rounded-3xl overflow-hidden border border-[#E8E8ED] hover:shadow-md transition-shadow duration-300"
                    aria-label={project.slug}
                  >
                    <div className="relative aspect-video overflow-hidden bg-[#F5F5F7]">
                      <Image
                        src={project.image}
                        alt={project.slug}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-6">
                      {/* Category badges */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-3">
                        {cats.map((cat) => (
                          <span
                            key={cat}
                            className="inline-block px-2.5 py-0.5 text-[10px] font-semibold tracking-wide rounded-full bg-[#F5F5F7] text-[#1D1D1F] uppercase"
                          >
                            {t(CATEGORY_LABEL_KEY[cat])}
                          </span>
                        ))}
                        <span className="text-[10px] text-[#6E6E73] uppercase tracking-wide ml-1">
                          {project.year}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-[#1D1D1F] capitalize tracking-tight">
                        {project.slug.replace(/-/g, " ")}
                      </h3>

                      <p className="text-sm text-[#6E6E73] mt-2 leading-relaxed line-clamp-2">
                        {project.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 bg-[#F5F5F7] rounded-full text-[11px] text-[#6E6E73]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}