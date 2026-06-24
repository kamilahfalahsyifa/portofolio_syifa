"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import LogoLoopJsx from "@/components/ui/LogoLoop";
import type { ComponentType, ReactNode } from "react";
import {
  SiFlutter,
  SiDart,
  SiPhp,
  SiMysql,
  SiFigma,
  SiGit,
  SiGithub,
  SiLaravel,
  SiNextdotjs,
  SiReact,
  SiVuedotjs,
  SiTypescript,
  SiPostman,
} from "react-icons/si";

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
  renderItem?: (
    item: { node: ReactNode; title?: string; ariaLabel?: string },
    key: number | string
  ) => ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
};

const LogoLoop = LogoLoopJsx as unknown as ComponentType<LogoLoopProps>;

const techs: { name: string; Icon: ComponentType<{ size?: number; className?: string }> }[] = [
  { name: "Flutter", Icon: SiFlutter },
  { name: "Dart", Icon: SiDart },
  { name: "Laravel", Icon: SiLaravel },
  { name: "PHP", Icon: SiPhp },
  { name: "MySQL", Icon: SiMysql },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: SiReact },
  { name: "Vue.js", Icon: SiVuedotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Figma", Icon: SiFigma },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
  { name: "Postman", Icon: SiPostman },
];

export default function Skills() {
  const { t } = useLanguage();

  const techLogos = techs.map(({ name, Icon }) => ({
    node: (
      <div
        className="flex items-center gap-3 grayscale opacity-70 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
        style={{ color: "#1D1D1F" }}
      >
        <Icon size={36} className="shrink-0" />
        <span className="text-sm font-medium tracking-tight whitespace-nowrap">
          {name}
        </span>
      </div>
    ),
    title: name,
    ariaLabel: name,
  }));

  return (
    <section id="skills" className="pt-12 pb-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] tracking-tight">
            {t("skills.title")}
          </h2>
          <p className="text-[#6E6E73] mt-3 text-base md:text-lg leading-relaxed">
            {t("skills.subtitle")}
          </p>
        </motion.div>

        {/* LogoLoop animation only */}
        <div className="relative overflow-hidden">
          <div className="hidden md:block">
            <LogoLoop
              logos={techLogos}
              speed={90}
              direction="left"
              width="100%"
              logoHeight={48}
              gap={56}
              hoverSpeed={0}
              pauseOnHover
              fadeOut
              fadeOutColor="#ffffff"
              scaleOnHover
              ariaLabel="Tools and Technologies"
            />
          </div>
          <div className="md:hidden">
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="left"
              width="100%"
              logoHeight={36}
              gap={32}
              hoverSpeed={0}
              pauseOnHover
              fadeOut
              fadeOutColor="#ffffff"
              scaleOnHover
              ariaLabel="Tools and Technologies"
            />
          </div>
        </div>
      </div>
    </section>
  );
}