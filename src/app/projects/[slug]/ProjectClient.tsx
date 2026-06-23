"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Github as GithubIcon,
  Figma as FigmaIcon,
  Globe,
  Play,
  Video,
} from "lucide-react";
import type { ProjectDetail, ProjectLinks } from "@/types/project";
import { useLanguage } from "@/context/LanguageContext";
import { getProject, getAvailableSlugs } from "@/data/projects";
import Navbar from "@/components/Navbar";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const stagger = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: false, margin: "-60px" },
  variants: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  },
};

const rowVariant = {
  variants: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
};

export default function ProjectClient({ slug }: { slug: string }) {
  const { language, t } = useLanguage();
  const project = getProject(slug, language) || null;

  const nextProject = (() => {
    const slugs = getAvailableSlugs();
    const idx = slugs.indexOf(slug);
    if (slugs.length === 0) return null;
    const nextSlug = slugs[(idx + 1) % slugs.length];
    if (!nextSlug || nextSlug === slug) return null;
    return getProject(nextSlug, language) || null;
  })();

  if (!project) {
    return (
      <main className="bg-white min-h-screen" key={`${slug}-${language}-notfound`}>
        <Navbar mode="project" />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#1D1D1F] mb-4">
              {t("projectDetail.backToProjects")}
            </h1>
            <Link href="/#projects" className="text-[#0071E3] hover:underline">
              {t("projectDetail.backToProjects")}
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const links: ProjectLinks = project.links ?? {};
  const heroLinks = [
    { key: "github" as const, icon: <GithubIcon className="w-4 h-4" />, label: t("projectDetail.github") },
    { key: "figma" as const, icon: <FigmaIcon className="w-4 h-4" />, label: t("projectDetail.figma") },
    { key: "website" as const, icon: <Globe className="w-4 h-4" />, label: t("projectDetail.website") },
    { key: "playstore" as const, icon: <Play className="w-4 h-4" />, label: t("projectDetail.playstore") },
    { key: "video" as const, icon: <Video className="w-4 h-4" />, label: t("projectDetail.video") },
  ].filter((b) => Boolean(links[b.key]));

  const resourceRows = [
    { key: "github" as const, icon: <GithubIcon className="w-5 h-5" />, label: t("projectDetail.github"), href: links.github },
    { key: "figma" as const, icon: <FigmaIcon className="w-5 h-5" />, label: t("projectDetail.figma"), href: links.figma },
    { key: "website" as const, icon: <Globe className="w-5 h-5" />, label: t("projectDetail.website"), href: links.website },
    { key: "playstore" as const, icon: <Play className="w-5 h-5" />, label: t("projectDetail.playstore"), href: links.playstore },
    { key: "video" as const, icon: <Video className="w-5 h-5" />, label: t("projectDetail.video"), href: links.video },
  ].filter((b) => Boolean(b.href));

  const introduction = project.introduction ?? [project.description];

  return (
    <main
      key={`${slug}-${language}`}
      className="bg-white min-h-screen text-[#1D1D1F]"
    >
      <Navbar mode="project" />

      {/* 1. HERO */}
      <section className="pt-24" key={`hero-${language}`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[64vh] md:h-[78vh] w-full overflow-hidden bg-[#1D1D1F]"
        >
          <Image
            src={project.bannerImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/75" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-4xl mx-auto w-full px-6 pb-14 md:pb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-center"
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                  {project.title}
                </h1>
                <p className="text-white/85 mt-6 text-lg md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
                  {project.shortDescription}
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-white/90 text-sm md:text-base">
                  <span className="font-medium">{project.role}</span>
                  <span className="opacity-60">•</span>
                  <span>{project.year}</span>
                </div>
                <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={`${language}-${tech}`}
                      className="px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur text-white text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {heroLinks.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-8 flex flex-wrap items-center justify-center gap-3"
                  >
                    {heroLinks.map((b) => (
                      <a
                        key={`${language}-${b.key}`}
                        href={links[b.key]}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#1D1D1F] text-sm font-medium hover:bg-white/90 transition-colors"
                      >
                        {b.icon}
                        {b.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. INTRODUCTION */}
      <Section
        id="introduction"
        key={`intro-${language}`}
        eyebrow={t("projectDetail.introduction")}
        title={t("projectDetail.introduction")}
      >
        <motion.div
          {...fadeUp}
          className="max-w-2xl space-y-6 text-lg text-gray-600 leading-relaxed"
        >
          {introduction.map((p, i) => (
            <p key={`${language}-intro-${i}`}>{p}</p>
          ))}
        </motion.div>
      </Section>

      {/* 3. THE PROBLEM */}
      <Section
        id="problem"
        key={`problem-${language}`}
        eyebrow={t("projectDetail.theProblem")}
        title={t("projectDetail.theProblem")}
      >
        <motion.p
          {...fadeUp}
          className="max-w-2xl text-lg text-gray-600 leading-relaxed mb-12"
        >
          {project.problem.background}
        </motion.p>
        <motion.div {...stagger} className="border-t border-gray-200" key={`problem-list-${language}`}>
          {project.problem.challenges.map((c, i) => (
            <motion.div
              {...rowVariant}
              key={`${language}-problem-${c}-${i}`}
              className="grid grid-cols-[80px_1fr] gap-8 items-start py-8 border-t border-gray-200 first:border-t-0"
            >
              <span className="text-2xl font-light text-gray-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-lg text-[#1D1D1F] leading-relaxed">{c}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* 4. THE DECISIONS */}
      {project.decisions && project.decisions.length > 0 && (
        <Section
          key={`decisions-${language}`}
          eyebrow={t("projectDetail.theDecisions")}
          title={t("projectDetail.theDecisions")}
        >
          <motion.div {...stagger} className="border-t border-gray-200" key={`decisions-list-${language}`}>
            {project.decisions.map((d, i) => (
              <motion.div
                {...rowVariant}
                key={`${language}-decision-${i}-${d.title}`}
                className="grid grid-cols-[80px_1fr] gap-8 items-start py-8 border-t border-gray-200 first:border-t-0"
              >
                <span className="text-2xl font-light text-gray-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#1D1D1F] tracking-tight">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-lg text-gray-600 leading-relaxed max-w-2xl">
                    {d.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Section>
      )}

      {/* 5. THE SOLUTION */}
      <Section
        id="solution"
        key={`solution-${language}`}
        eyebrow={t("projectDetail.theSolution")}
        title={t("projectDetail.theSolution")}
      >
        <motion.div {...stagger} className="border-t border-gray-200" key={`solution-list-${language}`}>
          {project.result.featuresDelivered.map((feature, i) => (
            <motion.div
              {...rowVariant}
              key={`${language}-feature-${i}-${feature}`}
              className="grid grid-cols-[80px_1fr] gap-8 items-start py-8 border-t border-gray-200 first:border-t-0"
            >
              <span className="text-2xl font-light text-gray-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-lg text-[#1D1D1F] leading-relaxed">{feature}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* OUTCOME */}
      <Section
        id="outcome"
        key={`outcome-${language}`}
        eyebrow={t("projectDetail.outcome")}
        title={t("projectDetail.outcome")}
      >
        <motion.div
          {...fadeUp}
          className="bg-gray-50 rounded-2xl p-12 max-w-3xl"
        >
          <p className="text-2xl md:text-3xl font-light italic text-[#1D1D1F] leading-relaxed">
            “{project.result.outcome}”
          </p>
        </motion.div>
      </Section>

      {/* 6. TECH STACK */}
      <Section
        id="tech-stack"
        key={`tech-${language}`}
        eyebrow={t("projectDetail.techStack")}
        title={t("projectDetail.techStack")}
      >
        <motion.div
          {...fadeUp}
          className="flex flex-wrap gap-3 mb-10"
        >
          {project.techStack.map((tech) => (
            <span
              key={`${language}-tech-${tech}`}
              className="rounded-full border border-gray-300 px-4 py-1 text-sm text-gray-700"
            >
              {tech}
            </span>
          ))}
        </motion.div>
        <motion.div
          {...stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          key={`tech-detail-list-${language}`}
        >
          {project.discussion.technologyStack.map((tech) => (
            <motion.div
              {...rowVariant}
              key={`${language}-tech-detail-${tech.name}`}
            >
              <h4 className="text-lg font-semibold text-[#1D1D1F]">
                {tech.name}
              </h4>
              <p className="text-gray-600 mt-2 leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* 7. PROJECT RESOURCES */}
      {resourceRows.length > 0 && (
        <Section
          key={`resources-${language}`}
          eyebrow={t("projectDetail.projectResources")}
          title={t("projectDetail.projectResources")}
        >
          <motion.ul {...stagger} className="max-w-2xl" key={`resources-list-${language}`}>
            {resourceRows.map((r) => (
              <motion.li
                {...rowVariant}
                key={`${language}-${r.key}`}
              >
                <a
                  href={r.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center gap-4 py-4 border-t border-gray-200"
                >
                  <span className="text-gray-600 group-hover:text-[#0071E3] transition-colors">
                    {r.icon}
                  </span>
                  <span className="flex-1 text-[#1D1D1F] font-medium group-hover:text-[#0071E3] transition-colors">
                    {r.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#0071E3] transition-colors" />
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </Section>
      )}

      {/* 8. LESSONS LEARNED */}
      <Section
        id="lessons-learned"
        key={`lessons-${language}`}
        eyebrow={t("projectDetail.lessonsLearned")}
        title={t("projectDetail.lessonsLearned")}
      >
        <motion.div {...stagger} className="border-t border-gray-200" key={`lessons-list-${language}`}>
          {project.result.lessonsLearned.map((lesson, i) => (
            <motion.div
              {...rowVariant}
              key={`${language}-lesson-${i}-${lesson}`}
              className="grid grid-cols-[80px_1fr] gap-8 items-start py-8 border-t border-gray-200 first:border-t-0"
            >
              <span className="text-2xl font-light text-gray-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-lg text-[#1D1D1F] leading-relaxed">{lesson}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* 9. NEXT PROJECT BANNER */}
      {nextProject && (
        <Link
          href={`/projects/${nextProject.slug}`}
          className="block bg-black text-white"
          key={`next-${language}-${nextProject.slug}`}
        >
          <motion.div
            {...fadeUp}
            className="max-w-4xl mx-auto px-6 py-20 flex items-center justify-between gap-6"
          >
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-white/60 mb-3">
                {t("projectDetail.nextProject")}
              </p>
              <h3 className="text-3xl font-bold text-white tracking-tight">
                {nextProject.title}
              </h3>
            </div>
            <span className="text-3xl text-white/80">→</span>
          </motion.div>
        </Link>
      )}

      <footer className="py-12 px-6 text-center border-t border-gray-200">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Kamilah Falah Syifa. {t("footer.rights")}
        </p>
      </footer>
    </main>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      style={id ? { scrollMarginTop: "100px" } : undefined}
      className="py-24 md:py-32 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-12"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-500">
            {eyebrow}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mt-3 tracking-tight">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}