"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  const socials = [
    { name: t("contact.email"), url: "mailto:syifa@example.com", icon: Mail },
    { name: t("contact.github"), url: "https://github.com", icon: Github },
    { name: t("contact.linkedin"), url: "https://linkedin.com", icon: Linkedin },
  ];

  return (
    <section id="contact" className="py-32 px-6 bg-[#F5F5F7]">
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
          className="flex flex-wrap justify-center gap-4"
        >
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-white rounded-full text-[#1D1D1F] hover:bg-[#0071E3] hover:text-white transition-colors duration-200"
            >
              <social.icon className="w-5 h-5" />
              <span className="font-medium">{social.name}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
