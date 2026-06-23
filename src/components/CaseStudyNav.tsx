"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ChevronDown } from "lucide-react";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "outcome", label: "Outcome" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "lessons", label: "Lessons" },
];

export default function CaseStudyNav() {
  const router = useRouter();
  const [activeId, setActiveId] = useState<string>("introduction");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
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

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleBack = () => {
    router.push("/#projects");
  };

  const activeLabel =
    sections.find((s) => s.id === activeId)?.label ?? "Overview";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Back button */}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back to Projects</span>
        </button>

        {/* Desktop section nav */}
        <ul className="hidden md:flex items-center gap-7">
          {sections.map((s) => {
            const isActive = activeId === s.id;
            return (
              <li key={s.id}>
                <button
                  onClick={() => handleNavClick(s.id)}
                  className={`text-sm tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "text-black font-medium"
                      : "text-gray-400 hover:text-gray-700"
                  }`}
                >
                  {s.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile dropdown trigger */}
        <div className="md:hidden relative">
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex items-center gap-1.5 text-sm text-black font-medium"
          >
            {activeLabel}
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                mobileOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {mobileOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setMobileOpen(false)}
              />
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl border border-gray-200 z-50 overflow-hidden">
                {sections.map((s) => {
                  const isActive = activeId === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => handleNavClick(s.id)}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        isActive
                          ? "text-black font-medium bg-gray-50"
                          : "text-gray-500 hover:text-black hover:bg-gray-50"
                      }`}
                    >
                      {s.label}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}