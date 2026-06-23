"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, GraduationCap, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const badges = [
    t("hero.badges.gemastik"),
    t("hero.badges.intern"),
    t("hero.badges.uiux"),
    t("hero.badges.ta"),
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm text-[#6E6E73] tracking-wide mb-3"
            >
              {t("hero.name")}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1D1D1F] mb-5 tracking-tight leading-[1.05]"
            >
              {t("hero.role")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-[#1D1D1F]/85 leading-relaxed max-w-xl mb-5"
            >
              {t("hero.intro")}
            </motion.p>

            {/* Achievement badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {badges.map((b) => (
                <span
                  key={b}
                  className="px-3 py-1.5 bg-[#F5F5F7] rounded-full text-xs md:text-sm text-[#1D1D1F] font-medium"
                >
                  {b}
                </span>
              ))}
            </motion.div>

            {/* Location + University */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-sm text-[#6E6E73]"
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Semarang, Indonesia
              </span>
              <span className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Universitas Dian Nuswantoro
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-3"
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
                <Mail className="w-4 h-4" />
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
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] rounded-3xl overflow-hidden shadow-lg bg-[#F5F5F7]">
              <Image
                src="/profile/profile.jpg"
                alt="Kamilah Falah Syifa"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}