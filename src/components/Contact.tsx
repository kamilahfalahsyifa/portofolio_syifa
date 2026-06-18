"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  const socials = [
    { name: "email", label: t("contact.email"), url: "mailto:kamilahfsyifa@gamil.com", icon: Mail },
    { name: "github", label: t("contact.github"), url: "hhttps://github.com/kamilahfalahsyifa", icon: Github },
    { name: "linkedin", label: t("contact.linkedin"), url: "https://www.linkedin.com/in/kamilah-falah-syifa/", icon: Linkedin },
    { name: "instagram", label: t("contact.instagram"), url: "https://instagram.com", icon: Instagram },
  ];

  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D1D1F] mb-6"
        >
          {t("contact.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-[#6E6E73] mb-16"
        >
          {t("contact.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-5 bg-[#F5F5F7] rounded-2xl text-[#1D1D1F] hover:bg-[#0071E3] hover:text-white transition-colors duration-200"
            >
              <social.icon className="w-5 h-5" />
              <span className="font-medium text-sm">{social.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
