"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import LogoLoopJsx from "@/components/ui/LogoLoop";
import type { ComponentType, ReactNode } from "react";
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiPhp,
  SiMysql,
  SiFigma,
  SiGit,
  SiGithub,
  SiVscodium,
  SiSwagger,
  SiLaravel,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

type ToolEntry = { name: string; slug: string };

/**
 * Typed wrapper around the `.jsx` LogoLoop. The component ships as JSX so
 * TypeScript would otherwise infer `object` for the imported value; this
 * declaration restores full type-checking on the call site.
 */
type LogoLoopProps = {
  logos: { node: ReactNode; title?: string; ariaLabel?: string; href?: string }[];
  speed?: number;
  direction?: "left" | "right" | "up" | "down";
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (item: { node: ReactNode; title?: string; ariaLabel?: string }, key: number | string) => ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
};

const LogoLoop = LogoLoopJsx as unknown as ComponentType<LogoLoopProps>;

/** Map a message-tool slug to its Simple Icons component. */
const ICON_MAP: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  flutter: SiFlutter,
  dart: SiDart,
  firebase: SiFirebase,
  php: SiPhp,
  mysql: SiMysql,
  figma: SiFigma,
  git: SiGit,
  github: SiGithub,
  // react-icons no longer ships an "SiVscode" export; VSCodium is the closest
  // available mark, used here to represent the "VS Code" entry.
  vscode: SiVscodium,
  // Simple Icons has no canonical "REST API" brand; Swagger is the closest
  // widely-recognized mark, used here as the icon for the "REST API" entry.
  restapi: SiSwagger,
  laravel: SiLaravel,
  javascript: SiJavascript,
  typescript: SiTypescript,
  tailwindcss: SiTailwindcss,
  nextdotjs: SiNextdotjs,
};

export default function Skills() {
  const { t, messages } = useLanguage();
  const tools = messages.skills.tools as ToolEntry[];

  const techLogos = tools.map((tool) => {
    const Icon = ICON_MAP[tool.slug];
    return {
      node: (
        <div
          className="flex items-center gap-3 text-[#1D1D1F] opacity-75 transition-all duration-300 ease-out hover:opacity-100 hover:scale-110"
          style={{ color: "#1D1D1F" }}
        >
          {Icon ? <Icon size={42} className="shrink-0" /> : null}
          <span className="text-base font-medium tracking-tight whitespace-nowrap">
            {tool.name}
          </span>
        </div>
      ),
      title: tool.name,
      ariaLabel: tool.name,
    };
  });

  return (
    <section id="skills" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] tracking-tight">
            {t("skills.title")}
          </h2>
          <p className="text-[#6E6E73] mt-5 text-base md:text-lg leading-relaxed">
            {t("skills.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          {/* Desktop loop */}
          <div className="hidden md:block">
            <LogoLoop
              logos={techLogos}
              speed={90}
              direction="left"
              width="100%"
              logoHeight={42}
              gap={56}
              hoverSpeed={0}
              fadeOut
              fadeOutColor="#ffffff"
              scaleOnHover
              ariaLabel="Tools and Technologies"
            />
          </div>

          {/* Mobile loop (reduced size + gap) */}
          <div className="md:hidden">
            <LogoLoop
              logos={techLogos}
              speed={90}
              direction="left"
              width="100%"
              logoHeight={32}
              gap={32}
              hoverSpeed={0}
              fadeOut
              fadeOutColor="#ffffff"
              scaleOnHover
              ariaLabel="Tools and Technologies"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
