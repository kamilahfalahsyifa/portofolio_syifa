"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ProjectDetail } from "@/types/project";
import { useLanguage } from "@/context/LanguageContext";
import { getProject } from "@/data/projects";
import Navbar from "@/components/Navbar";

export default function ProjectClient({ slug }: { slug: string }) {
  const { language, t } = useLanguage();
  const project = useMemo(() => getProject(slug, language) || null, [slug, language]);

  if (!project) {
    return (
      <main className="bg-white min-h-screen">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#1D1D1F] mb-4">Loading...</h1>
            <Link href="/#projects" className="text-[#0071E3] hover:underline">Back to Projects</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <section className="pt-24">
        <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
          <Image src={project.bannerImage} alt={project.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        </div>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/#projects" className="inline-flex items-center gap-2 text-[#6E6E73] hover:text-[#0071E3] transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              {t("projectDetail.backToProjects")}
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D1D1F] mb-6">{project.title}</h1>
            <div className="flex flex-wrap gap-8 mb-12">
              <div>
                <span className="text-sm text-[#6E6E73] block mb-1">{t("projectDetail.role")}</span>
                <span className="text-lg font-medium text-[#1D1D1F]">{project.role}</span>
              </div>
              <div>
                <span className="text-sm text-[#6E6E73] block mb-1">{t("projectDetail.year")}</span>
                <span className="text-lg font-medium text-[#1D1D1F]">{project.year}</span>
              </div>
              <div>
                <span className="text-sm text-[#6E6E73] block mb-1">{t("projectDetail.techStack")}</span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-[#F5F5F7] rounded-full text-sm text-[#6E6E73]">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <ProblemSection project={project} t={t} />
          <DiscussionSection project={project} t={t} />
          <ResultSection project={project} t={t} />
        </div>
      </section>
      <footer className="py-8 px-6 text-center border-t border-[#E8E8ED]">
        <p className="text-sm text-[#6E6E73]">© {new Date().getFullYear()} Kamilah Falah Syifa. {t("footer.rights")}</p>
      </footer>
    </main>
  );
}

function ProblemSection({ project, t }: { project: ProjectDetail; t: (key: string) => string }) {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-16">
      <h2 className="text-2xl font-bold text-[#1D1D1F] mb-6">{t("projectDetail.problemTitle")}</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-[#1D1D1F] mb-3">{t("projectDetail.background")}</h3>
          <p className="text-lg text-[#6E6E73] leading-relaxed">{project.problem.background}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1D1D1F] mb-3">{t("projectDetail.challenges")}</h3>
          <ul className="space-y-2">
            {project.problem.challenges.map((c, i) => (
              <li key={i} className="flex items-start gap-3 text-lg text-[#6E6E73]">
                <span className="w-2 h-2 rounded-full bg-[#0071E3] mt-2.5 flex-shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1D1D1F] mb-3">{t("projectDetail.objectives")}</h3>
          <ul className="space-y-2">
            {project.problem.objectives.map((o, i) => (
              <li key={i} className="flex items-start gap-3 text-lg text-[#6E6E73]">
                <span className="w-2 h-2 rounded-full bg-[#0071E3] mt-2.5 flex-shrink-0" />
                {o}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

function DiscussionSection({ project, t }: { project: ProjectDetail; t: (key: string) => string }) {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-16">
      <h2 className="text-2xl font-bold text-[#1D1D1F] mb-6">{t("projectDetail.discussionTitle")}</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-[#1D1D1F] mb-3">{t("projectDetail.requirements")}</h3>
          <ul className="space-y-2">
            {project.discussion.requirements.map((r, i) => (
              <li key={i} className="flex items-start gap-3 text-lg text-[#6E6E73]">
                <span className="w-2 h-2 rounded-full bg-[#0071E3] mt-2.5 flex-shrink-0" />
                {r}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1D1D1F] mb-3">{t("projectDetail.architecture")}</h3>
          <p className="text-lg text-[#6E6E73] leading-relaxed">{project.discussion.architecture}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1D1D1F] mb-3">{t("projectDetail.technologyStack")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.discussion.technologyStack.map((tech) => (
              <div key={tech.name} className="bg-[#F5F5F7] rounded-xl p-4">
                <h4 className="font-semibold text-[#1D1D1F]">{tech.name}</h4>
                <p className="text-sm text-[#6E6E73]">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1D1D1F] mb-3">{t("projectDetail.developmentProcess")}</h3>
          <p className="text-lg text-[#6E6E73] leading-relaxed">{project.discussion.developmentProcess}</p>
        </div>
      </div>
    </motion.section>
  );
}

function ResultSection({ project, t }: { project: ProjectDetail; t: (key: string) => string }) {
  return (
    <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
      <h2 className="text-2xl font-bold text-[#1D1D1F] mb-6">{t("projectDetail.resultTitle")}</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-[#1D1D1F] mb-3">{t("projectDetail.outcome")}</h3>
          <p className="text-lg text-[#6E6E73] leading-relaxed">{project.result.outcome}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1D1D1F] mb-3">{t("projectDetail.featuresDelivered")}</h3>
          <ul className="space-y-2">
            {project.result.featuresDelivered.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-lg text-[#6E6E73]">
                <span className="w-2 h-2 rounded-full bg-[#0071E3] mt-2.5 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1D1D1F] mb-3">{t("projectDetail.lessonsLearned")}</h3>
          <ul className="space-y-2">
            {project.result.lessonsLearned.map((l, i) => (
              <li key={i} className="flex items-start gap-3 text-lg text-[#6E6E73]">
                <span className="w-2 h-2 rounded-full bg-[#0071E3] mt-2.5 flex-shrink-0" />
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}