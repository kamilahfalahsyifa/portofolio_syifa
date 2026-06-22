import type { ProjectContent } from "@/types/project";

const kissId: ProjectContent = {
  title: "KISS",
  subtitle:
    "Aplikasi web internal untuk mengelola aktivitas pergantian komponen dan file APL dengan sistem multi-role serta alur persetujuan.",
  description:
    "KISS adalah sistem manajemen maintenance yang dirancang untuk mempermudah pelacakan pergantian komponen dan pengelolaan file APL. Saya merancang UI/UX sekaligus mengembangkan seluruh aplikasi secara mandiri.",
  shortDescription:
    "Aplikasi web internal untuk mengelola aktivitas pergantian komponen dan file APL dengan sistem multi-role serta alur persetujuan.",
  year: "2025",
  role: "Full-Stack Developer & UI/UX Designer (Solo Project)",
  techStack: [
    "Laravel 11",
    "Inertia.js",
    "Vue 3",
    "TypeScript",
    "Tailwind CSS",
    "DaisyUI",
    "MySQL",
    "SQLite",
    "Vite",
  ],
  introduction: [
    "KISS adalah sistem manajemen maintenance yang dirancang untuk mempermudah pelacakan pergantian komponen dan pengelolaan file APL. Saya merancang UI/UX sekaligus mengembangkan seluruh aplikasi secara mandiri.",
  ],
  decisions: [
    {
      label: "Keputusan",
      title: "Laravel + Inertia.js + Vue 3 untuk pengalaman full-stack terpadu",
      description:
        "Aplikasi dibangun menggunakan Laravel 11 yang dipadukan dengan Inertia.js dan Vue 3, sehingga frontend dan backend dapat berbagi satu model mental. Pendekatan ini menghindari overhead layer API terpisah sambil tetap menghasilkan antarmuka yang interaktif dan responsif.",
    },
  ],
  problem: {
    background:
      "Tim maintenance membutuhkan satu tempat terpusat untuk mencatat aktivitas pergantian komponen, mengelola alur persetujuan, dan mengarsipkan file APL historis. Proses yang ada tersebar di spreadsheet, chat, dan formulir kertas, sehingga sulit memantau status dan menelusuri histori aktivitas.",
    challenges: [
      "Data pergantian komponen sulit dikelola dan dipantau.",
      "Proses persetujuan masih dilakukan secara manual.",
      "Setiap pengguna membutuhkan hak akses yang berbeda.",
      "Data historis dan file APL membutuhkan pengelolaan yang lebih terstruktur.",
    ],
    objectives: [
      "Memusatkan data pergantian komponen dalam satu sistem.",
      "Menyederhanakan alur persetujuan antar peran.",
      "Menyediakan akses berbasis peran untuk Mekanik, Group Leader, Administrator, dan Planner.",
      "Mengorganisir data historis dan file APL agar mudah dicari.",
    ],
  },
  discussion: {
    requirements: [
      "Akses multi-role untuk Mekanik, Group Leader, Administrator, dan Planner.",
      "Alur aktivitas dengan status pending, approved, dan rejected.",
      "Manajemen file APL dengan struktur mirip spreadsheet.",
      "Pencarian, filter, pagination, dan ekspor Excel.",
      "Antarmuka responsif untuk kebutuhan operasional sehari-hari.",
    ],
    architecture:
      "Laravel 11 menangani API dan business logic, Inertia.js menjembatani Laravel dan frontend Vue 3, sementara Tailwind CSS dengan DaisyUI menjaga konsistensi UI. Vite mempercepat build frontend, dan MySQL menyimpan data aktivitas serta komponen APL.",
    technologyStack: [
      { name: "Laravel", description: "Framework backend untuk logika bisnis dan pengelolaan data." },
      { name: "Inertia.js", description: "Menghubungkan Laravel dan Vue tanpa API terpisah." },
      { name: "Vue 3", description: "Membangun antarmuka yang interaktif dan responsif." },
      { name: "TypeScript", description: "Meningkatkan keamanan tipe data dan maintainability kode." },
      { name: "Tailwind CSS", description: "Membantu membangun tampilan yang konsisten dan modern." },
      { name: "MySQL", description: "Menyimpan data aktivitas dan komponen." },
    ],
    developmentProcess:
      "Dirancang end-to-end oleh satu developer, proyek dimulai dari arsitektur informasi dan mockup UI/UX, dilanjutkan dengan scaffolding API Laravel, lalu Inertia + Vue 3 untuk frontend, dan diakhiri dengan iterasi perbaikan alur approval serta tabel data berdasarkan umpan balik operasional.",
    screenshots: [
      "/projects/kiss/cover.jpg",
      "/projects/kiss/banner.jpg",
    ],
  },
  result: {
    outcome:
      "KISS membantu menyederhanakan alur maintenance, meningkatkan pelacakan aktivitas, dan memusatkan pengelolaan komponen dalam satu platform.",
    featuresDelivered: [
      "Sistem multi-role untuk Mekanik, Group Leader, Administrator, dan Planner.",
      "Alur approval dengan status pending, approved, dan rejected.",
      "Fitur manajemen file APL dengan struktur mirip spreadsheet.",
      "Pencarian, filter, pagination, dan ekspor Excel.",
      "Antarmuka responsif untuk kebutuhan operasional sehari-hari.",
    ],
    lessonsLearned: [
      "Sistem multi-role membutuhkan pengaturan hak akses yang matang.",
      "Workflow approval dapat meningkatkan efisiensi operasional.",
      "Struktur informasi yang baik memudahkan pengelolaan data.",
      "Menggabungkan UI/UX dan development menghasilkan produk yang lebih konsisten.",
    ],
  },
};

export default kissId;