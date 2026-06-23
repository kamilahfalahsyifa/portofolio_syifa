"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CertificateItem {
  title: string;
  organization: string;
  year: string;
  description: string;
  thumbnail?: string;
  image?: string;
}

export default function Certificates() {
  const { t, messages } = useLanguage();
  const items = messages.certificates.items as CertificateItem[];
  const [active, setActive] = useState<CertificateItem | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="certificates" className="py-20 px-6 bg-[#F5F5F7]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] tracking-tight">
            {t("certificates.title")}
          </h2>
          <p className="text-[#6E6E73] mt-4 text-base md:text-lg leading-relaxed max-w-2xl">
            {t("certificates.subtitle")}
          </p>
        </motion.div>

        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-5 flex md:flex-none gap-4 overflow-x-auto md:overflow-visible pb-4 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory max-w-full">
          {items.map((item, index) => (
            <motion.button
              key={`${item.title}-${index}`}
              type="button"
              onClick={() => setActive(item)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-[#E8E8ED] rounded-2xl p-6 flex flex-col gap-3 text-left transition-shadow duration-300 hover:shadow-sm min-w-[280px] md:min-w-0 snap-start"
              aria-label={`${item.title} certificate`}
            >
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-[#F5F5F7] flex items-center justify-center text-[#1D1D1F] overflow-hidden">
                  {item.thumbnail ? (
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-xl object-cover"
                    />
                  ) : (
                    <Award className="w-5 h-5" />
                  )}
                </span>
                <span className="text-xs font-medium text-[#6E6E73]">
                  {item.year}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#1D1D1F] leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#0071E3] font-medium mt-1">
                  {item.organization}
                </p>
              </div>

              <p className="text-sm text-[#6E6E73] leading-relaxed">
                {item.description}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close certificate"
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#1D1D1F] flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="bg-[#1D1D1F] p-6 flex items-center justify-center">
                {active.image ? (
                  <Image
                    src={active.image}
                    alt={active.title}
                    width={800}
                    height={600}
                    className="w-full h-auto max-h-[60vh] object-contain rounded-xl"
                  />
                ) : (
                  <Award className="w-16 h-16 text-white" />
                )}
              </div>

              <div className="p-6">
                <p className="text-xs uppercase tracking-wide text-[#6E6E73]">
                  {active.organization} · {active.year}
                </p>
                <h3 className="text-xl font-semibold text-[#1D1D1F] mt-1">
                  {active.title}
                </h3>
                <p className="text-sm text-[#6E6E73] mt-2 leading-relaxed">
                  {active.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}