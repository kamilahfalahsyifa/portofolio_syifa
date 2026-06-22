"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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

const CATEGORY_LABEL_KEY: Record<ProjectCategory, string> = {
  mobile: "projects.filters.mobile",
  web: "projects.filters.web",
  uiux: "projects.filters.uiux",
};

export default function Projects() {
  const { t, language } = useLanguage();
  const projects: ProjectCard[] = getAllProjectCards(language);
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const visibleProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] tracking-tight">
            {t("projects.title")}
          </h2>
          <p className="text-[#6E6E73] mt-5 text-base md:text-lg leading-relaxed">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          role="tablist"
          aria-label="Project category filter"
          className="flex flex-wrap items-center gap-2 mb-12"
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
                  "px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 " +
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block h-full bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-shadow duration-300"
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

                <div className="p-7">
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wide rounded-full bg-[#F5F5F7] text-[#1D1D1F] capitalize">
                    {t(CATEGORY_LABEL_KEY[project.category])}
                  </span>

                  <h3 className="text-xl md:text-2xl font-semibold text-[#1D1D1F] capitalize tracking-tight">
                    {project.slug.replace(/-/g, " ")}
                  </h3>

                  <p className="text-[#6E6E73] mt-3 text-sm leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#F5F5F7] rounded-full text-xs text-[#6E6E73]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <p className="text-center text-[#6E6E73] mt-12">
            {t("projects.viewDetails")}
          </p>
        )}
      </div>
    </section>
  );
}
