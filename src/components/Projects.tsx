"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getAllMetadata } from "@/data/projects";

export default function Projects() {
  const { t } = useLanguage();
  const projects = getAllMetadata();

  return (
    <section id="projects" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-16"
        >
          {t("projects.title")}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="group bg-[#F5F5F7] rounded-3xl overflow-hidden cursor-pointer">
                  <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.slug}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-8 md:p-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl md:text-3xl font-semibold text-[#1D1D1F] capitalize">
                        {project.slug.replace(/-/g, " ")}
                      </h3>
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-[#0071E3] transition-colors duration-200">
                        <ArrowRight className="w-5 h-5 text-[#1D1D1F] group-hover:text-white transition-colors duration-200" />
                      </div>
                    </div>

                    <p className="text-[#6E6E73] text-sm">
                      {project.role}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white rounded-full text-sm text-[#6E6E73]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
