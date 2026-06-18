"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#6E6E73] text-lg mb-4"
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1D1D1F] mb-4 tracking-tight leading-[1.1]"
            >
              {t("hero.name")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-3xl text-[#0071E3] mb-6"
            >
              {t("hero.role")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-[#6E6E73] leading-relaxed mb-8 max-w-lg"
            >
              Building mobile applications, web platforms, and digital experiences focused on usability, performance, and clean design.
            </motion.p>

            {/* Info chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <span className="flex items-center gap-2 text-sm text-[#6E6E73]">
                <MapPin className="w-4 h-4" />
                {t("about.locationValue")}
              </span>
              <span className="flex items-center gap-2 text-sm text-[#6E6E73]">
                <GraduationCap className="w-4 h-4" />
                {t("about.universityValue")}
              </span>
              <span className="flex items-center gap-2 text-sm text-[#6E6E73]">
                <Briefcase className="w-4 h-4" />
                Open to Opportunities
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0071E3] text-white text-base font-medium rounded-full hover:bg-[#0077ED] transition-colors duration-200"
              >
                {t("hero.cta")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F5F5F7] text-[#1D1D1F] text-base font-medium rounded-full hover:bg-[#E8E8ED] transition-colors duration-200"
              >
                {t("hero.ctaSecondary")}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/profile/profile.jpg"
                  alt="Kamilah Falah Syifa"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border border-[#E8E8ED] -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
