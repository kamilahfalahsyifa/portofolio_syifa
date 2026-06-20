"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );
  const backdropBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(20px)"]);
  const boxShadow = useTransform(scrollY, [0, 50], ["none", "0 1px 3px rgba(0, 0, 0, 0.05)"]);

  return (
    <motion.header
      style={{ backgroundColor, backdropFilter: backdropBlur, boxShadow }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* <Link
          href="/"
          className="text-lg font-semibold text-[#1D1D1F] hover:text-[#0071E3] transition-colors"
        >
          Kamilah Falah Syifa
        </Link> */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors">
            {t("nav.about")}
          </a>
          <a href="#projects" className="text-sm font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors">
            {t("nav.projects")}
          </a>
          <a href="#experience" className="text-sm font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors">
            {t("nav.experience")}
          </a>
          <a href="#skills" className="text-sm font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors">
            {t("nav.skills")}
          </a>
          <a href="#contact" className="text-sm font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors">
            {t("nav.contact")}
          </a>
        </div>
        <LanguageToggle />
      </nav>
    </motion.header>
  );
}
