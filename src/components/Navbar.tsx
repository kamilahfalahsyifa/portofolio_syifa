"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "./LanguageToggle";

interface NavbarProps {
  mode?: "portfolio" | "project";
}

const projectSections = [
  { id: "introduction", key: "projectDetail.nav.introduction" },
  { id: "problem", key: "projectDetail.nav.problem" },
  { id: "solution", key: "projectDetail.nav.solution" },
  { id: "outcome", key: "projectDetail.nav.outcome" },
  { id: "tech-stack", key: "projectDetail.nav.techStack" },
  { id: "lessons-learned", key: "projectDetail.nav.lessonsLearned" },
];

export default function Navbar({ mode = "portfolio" }: NavbarProps) {
  const { t } = useLanguage();
  const router = useRouter();
  const [activeId, setActiveId] = useState<string>("introduction");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.85)"]
  );
  const backdropBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(20px)"]);
  const boxShadow = useTransform(
    scrollY,
    [0, 50],
    ["none", "0 1px 3px rgba(0, 0, 0, 0.05)"]
  );

  useEffect(() => {
    if (mode !== "project") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    projectSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [mode]);

  const handleSectionClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleBackToProjects = () => {
    router.push("/#projects");
  };

  return (
    <motion.header
      style={{ backgroundColor, backdropFilter: backdropBlur, boxShadow }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {mode === "project" ? (
          <>
            {/* Project mode: Back button on the left */}
            <button
              onClick={handleBackToProjects}
              className="flex items-center gap-2 text-sm font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">
                {t("projectDetail.backToProjects")}
              </span>
            </button>

            {/* Project mode: Centered section nav (desktop) */}
            <ul className="hidden md:flex items-center gap-7">
              {projectSections.map((s) => {
                const isActive = activeId === s.id;
                return (
                  <li key={s.id} className="relative">
                    <button
                      onClick={() => handleSectionClick(s.id)}
                      className={`text-sm tracking-wide transition-colors duration-200 ${
                        isActive
                          ? "text-[#1D1D1F] font-medium"
                          : "text-[#6E6E73] hover:text-[#1D1D1F]"
                      }`}
                    >
                      {t(s.key)}
                    </button>
                    {isActive && (
                      <motion.span
                        layoutId="navbar-underline"
                        className="absolute -bottom-[18px] left-0 right-0 h-px bg-[#1D1D1F]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Project mode: Mobile hamburger */}
            <div className="md:hidden flex items-center gap-3">
              <LanguageToggle />
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="p-2 text-[#1D1D1F]"
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Project mode: Desktop language toggle on the right */}
            <div className="hidden md:block">
              <LanguageToggle />
            </div>
          </>
        ) : (
          <>
            {/* Portfolio mode: section links (desktop) */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#about"
                className="text-sm font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
              >
                {t("nav.about")}
              </a>
              <a
                href="#projects"
                className="text-sm font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
              >
                {t("nav.projects")}
              </a>
              <a
                href="#experience"
                className="text-sm font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
              >
                {t("nav.experience")}
              </a>
              <a
                href="#skills"
                className="text-sm font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
              >
                {t("nav.skills")}
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
              >
                {t("nav.contact")}
              </a>
            </div>
            <div className="md:hidden flex items-center gap-3">
              <LanguageToggle />
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="p-2 text-[#1D1D1F]"
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
            <div className="hidden md:block">
              <LanguageToggle />
            </div>
          </>
        )}
      </nav>

      {/* Mobile dropdown sheet (shared by both modes) */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 right-0 top-16 bg-white border-b border-gray-200 z-50 md:hidden">
            {mode === "project" ? (
              <ul className="px-6 py-4 space-y-1">
                {projectSections.map((s) => {
                  const isActive = activeId === s.id;
                  return (
                    <li key={s.id}>
                      <button
                        onClick={() => handleSectionClick(s.id)}
                        className={`w-full text-left px-3 py-2.5 text-sm rounded-lg transition-colors ${
                          isActive
                            ? "text-[#1D1D1F] font-medium bg-[#F5F5F7]"
                            : "text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]"
                        }`}
                      >
                        {t(s.key)}
                      </button>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <ul className="px-6 py-4 space-y-1">
                <li>
                  <a
                    href="#about"
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 text-sm text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] rounded-lg"
                  >
                    {t("nav.about")}
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 text-sm text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] rounded-lg"
                  >
                    {t("nav.projects")}
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 text-sm text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] rounded-lg"
                  >
                    {t("nav.experience")}
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 text-sm text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] rounded-lg"
                  >
                    {t("nav.skills")}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 text-sm text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] rounded-lg"
                  >
                    {t("nav.contact")}
                  </a>
                </li>
              </ul>
            )}
          </div>
        </>
      )}
    </motion.header>
  );
}