import type { ProjectContent } from "@/types/project";

const ecoposId: ProjectContent = {
  title: "EcoPos Mobile",
  subtitle: "Aplikasi Point of Sale untuk toko dan UMKM.",
  description:
    "EcoPos adalah aplikasi Point of Sale berbasis Flutter yang dikembangkan untuk membantu toko mengelola produk, transaksi, laporan, serta aktivitas absensi. Aplikasi terintegrasi dengan backend REST API dan mendukung beberapa peran pengguna.",
  shortDescription:
    "Aplikasi Point of Sale untuk toko dan UMKM.",
  year: "2024",
  role: "Mobile Frontend Developer",
  techStack: [
    "Flutter",
    "Dart",
    "BLoC",
    "Dio",
    "GetIt",
    "Shared Preferences",
    "Geolocator",
    "PDF",
    "Printing",
  ],
  introduction: [
    "EcoPos adalah aplikasi Point of Sale berbasis Flutter yang dikembangkan untuk membantu toko mengelola produk, transaksi, laporan, serta aktivitas absensi. Aplikasi terintegrasi dengan backend REST API dan mendukung beberapa peran pengguna.",
  ],
  decisions: [
    {
      label: "Keputusan",
      title: "Arsitektur bersih dengan BLoC, Repository, dan DataSource",
      description:
        "Proyek disusun menggunakan pola clean architecture. BLoC menangani state management, Repository mengabstraksi data sources, dan DataSource berkomunikasi dengan REST API. Pendekatan ini membuat setiap fitur tetap modular, mudah diuji, dan sederhana untuk dikembangkan seiring pertumbuhan aplikasi.",
    },
  ],
  problem: {
    background:
      "UMKM sering mengandalkan proses manual untuk mengelola produk, transaksi, dan absensi karyawan. Alur kerja seperti ini lambat, rawan kesalahan, dan sulit dipantau dari satu tempat, terutama ketika operasional tersebar di banyak perangkat dan peran pengguna.",
    challenges: [
      "UMKM membutuhkan sistem yang sederhana untuk mengelola penjualan dan stok barang.",
      "Pencatatan transaksi manual meningkatkan risiko kesalahan.",
      "Pemilik toko membutuhkan laporan harian dan riwayat transaksi.",
      "Absensi karyawan perlu terintegrasi dalam satu aplikasi.",
      "Operasional bisnis harus dapat diakses melalui perangkat mobile.",
    ],
    objectives: [
      "Menyediakan POS mobile sederhana untuk produk, transaksi, dan laporan.",
      "Mengurangi kesalahan manual melalui alur transaksi digital.",
      "Memberikan visibilitas laporan harian dan riwayat transaksi.",
      "Mengintegrasikan absensi karyawan dalam satu aplikasi.",
      "Membuat operasional bisnis dapat diakses dari perangkat mobile mana pun.",
    ],
  },
  discussion: {
    requirements: [
      "Modul manajemen produk.",
      "Alur keranjang belanja dan checkout.",
      "Dukungan voucher, pembayaran, dan struk digital.",
      "Modul laporan dengan ekspor PDF.",
      "Absensi berbasis GPS dengan validasi check-in dan check-out.",
      "Akses multi-role yang terintegrasi dengan backend REST API.",
    ],
    architecture:
      "Aplikasi dibangun dengan Flutter dan mengikuti clean architecture. BLoC mengatur state, layer Repository mengabstraksi akses data, dan kelas DataSource berkomunikasi dengan REST API. Preferensi lokal ditangani menggunakan Shared Preferences, sedangkan absensi berbasis lokasi menggunakan Geolocator.",
    technologyStack: [
      { name: "Flutter", description: "Framework cross-platform untuk membangun aplikasi mobile." },
      { name: "Dart", description: "Bahasa pemrograman utama yang digunakan pada aplikasi." },
      { name: "BLoC", description: "Arsitektur state management untuk menghasilkan kode yang terstruktur dan mudah dipelihara." },
      { name: "Dio", description: "HTTP client untuk komunikasi dengan REST API." },
      { name: "GetIt", description: "Dependency injection untuk pengelolaan service." },
      { name: "Shared Preferences", description: "Penyimpanan lokal untuk session dan autentikasi." },
      { name: "Geolocator", description: "Layanan lokasi untuk fitur absensi." },
      { name: "PDF & Printing", description: "Membuat dan mengekspor laporan serta struk transaksi." },
    ],
    developmentProcess:
      "Proyek dikembangkan secara iteratif, dimulai dari autentikasi dan katalog produk, kemudian berkembang ke fitur transaksi, voucher, dan checkout. Modul laporan dan absensi ditambahkan di fase berikutnya, dengan setiap fitur diintegrasikan ke REST API backend melalui layer Repository.",
    screenshots: [
      "/projects/ecopos/cover.jpg",
      "/projects/ecopos/banner.jpg",
    ],
  },
  result: {
    outcome:
      "EcoPos menghadirkan pengalaman POS mobile yang lengkap bagi bisnis ritel dengan menggabungkan manajemen transaksi, laporan, dan absensi dalam satu aplikasi.",
    featuresDelivered: [
      "Sistem POS lengkap menggunakan Flutter dan arsitektur BLoC.",
      "Fitur manajemen produk dan keranjang belanja.",
      "Proses checkout, voucher, pembayaran, dan struk digital.",
      "Modul laporan dengan fitur ekspor PDF.",
      "Absensi berbasis GPS dengan validasi check-in dan check-out.",
      "Arsitektur yang terstruktur menggunakan BLoC, Repository, dan DataSource.",
    ],
    lessonsLearned: [
      "Arsitektur modular membuat aplikasi lebih mudah dikembangkan.",
      "State management sangat penting untuk menangani fitur yang kompleks.",
      "Integrasi API membutuhkan penanganan error dan session yang baik.",
      "Pengalaman pengguna menjadi semakin penting ketika aplikasi berkembang.",
      "Kolaborasi antara frontend dan backend sangat menentukan keberhasilan proyek.",
    ],
  },
};

export default ecoposId;