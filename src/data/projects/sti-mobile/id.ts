import type { ProjectContent } from "@/types/project";

const stiMobileId: ProjectContent = {
  title: "STI Mobile – Fitur Logbook Kerja Praktek",
  subtitle: "Fitur aplikasi akademik untuk mengelola aktivitas bimbingan kerja praktek.",
  description:
    "STI Mobile merupakan aplikasi akademik yang mendukung berbagai layanan kampus. Kontribusi saya berfokus pada modul Logbook Kerja Praktek yang digunakan mahasiswa untuk mencatat aktivitas bimbingan dan memantau progres kerja praktek secara digital.",
  shortDescription:
    "Fitur aplikasi akademik untuk mengelola aktivitas bimbingan kerja praktek.",
  year: "2025",
  role: "Mobile Developer",
  techStack: [
    "Flutter",
    "Dart",
    "BLoC",
    "GoRouter",
    "Dio",
    "Repository Pattern",
    "REST API",
    "Sizer",
  ],
  introduction: [
    "STI Mobile merupakan aplikasi akademik yang mendukung berbagai layanan kampus. Kontribusi saya berfokus pada modul Logbook Kerja Praktek yang digunakan mahasiswa untuk mencatat aktivitas bimbingan dan memantau progres kerja praktek secara digital.",
  ],
  decisions: [
    {
      label: "Keputusan",
      title: "BLoC + Repository Pattern untuk codebase akademik besar",
      description:
        "Karena fitur ditambahkan ke dalam aplikasi skala besar yang sudah ada, pengerjaan harus mengikuti arsitektur yang sudah established. BLoC menangani state, sementara Repository Pattern memisahkan business logic dari presentation layer, sehingga modul logbook baru dapat ditambahkan tanpa mengganggu bagian codebase lainnya.",
    },
  ],
  problem: {
    background:
      "Mahasiswa belum memiliki tempat digital yang terstruktur untuk mencatat aktivitas bimbingan kerja praktek. Informasi riwayat bimbingan dan progres tersebar, sehingga memantau progres masing-masing mahasiswa secara manual memakan waktu bagi dosen maupun mahasiswa.",
    challenges: [
      "Mahasiswa membutuhkan cara yang lebih terstruktur untuk mencatat bimbingan kerja praktek.",
      "Pemantauan progres kerja praktek secara manual kurang efisien.",
      "Informasi dan dokumen bimbingan sulit dikelola dengan baik.",
      "Mahasiswa membutuhkan akses yang lebih mudah terhadap riwayat bimbingan mereka.",
    ],
    objectives: [
      "Menyediakan logbook digital yang terstruktur untuk aktivitas bimbingan.",
      "Memudahkan mahasiswa dan dosen memantau progres.",
      "Mengorganisir informasi dan dokumen bimbingan dalam satu tempat.",
      "Memberikan akses mudah bagi mahasiswa ke seluruh riwayat bimbingan mereka.",
    ],
  },
  discussion: {
    requirements: [
      "Entri logbook terstruktur untuk aktivitas bimbingan.",
      "Tampilan riwayat bimbingan dan informasi progres kerja praktek.",
      "Integrasi REST API untuk mengambil data logbook.",
      "Entri logbook yang dapat diperluas (expandable) agar lebih mudah dibaca.",
      "UI responsif untuk berbagai ukuran layar.",
    ],
    architecture:
      "Fitur dibangun menggunakan Flutter dengan BLoC untuk state management dan Repository Pattern untuk memisahkan business logic dari presentation. GoRouter mengatur navigasi antar halaman, Dio mengelola komunikasi REST API, dan Sizer memastikan tampilan tetap responsif di berbagai perangkat.",
    technologyStack: [
      { name: "Flutter", description: "Framework cross-platform untuk membangun aplikasi." },
      { name: "Dart", description: "Bahasa pemrograman utama yang digunakan." },
      { name: "BLoC", description: "Arsitektur state management untuk mengelola logika aplikasi." },
      { name: "GoRouter", description: "Pengelolaan navigasi antar halaman." },
      { name: "Dio", description: "HTTP client untuk komunikasi dengan backend." },
      { name: "Repository Pattern", description: "Arsitektur berlapis untuk menghasilkan kode yang lebih mudah dipelihara." },
      { name: "REST API", description: "Media komunikasi antara aplikasi dan server." },
      { name: "Sizer", description: "Membantu membuat tampilan responsif di berbagai ukuran layar." },
    ],
    developmentProcess:
      "Pengembangan dimulai dengan mengeksplorasi codebase yang sudah ada untuk memahami arsitektur dan konvensinya. Fitur logbook kemudian dibangun di atas struktur BLoC dan Repository yang sudah ada, diintegrasikan dengan endpoint REST API, dan disempurnakan berdasarkan umpan balik dari tim mobile dan backend.",
    screenshots: [
      "/projects/sti-mobile/cover.jpg",
      "/projects/sti-mobile/banner.jpg",
    ],
  },
  result: {
    outcome:
      "Fitur ini membantu mahasiswa mengelola aktivitas bimbingan kerja praktek serta memantau progres mereka secara lebih terstruktur dan digital.",
    featuresDelivered: [
      "Fitur Logbook Kerja Praktek menggunakan Flutter dan arsitektur BLoC.",
      "Integrasi REST API untuk mengambil data kerja praktek dan logbook.",
      "Tampilan riwayat bimbingan dan informasi progres kerja praktek.",
      "Logbook yang dapat diperluas (expandable) agar informasi lebih mudah dibaca.",
      "Repository Pattern untuk memisahkan business logic dan presentation layer.",
    ],
    lessonsLearned: [
      "Bekerja pada codebase yang besar membutuhkan pemahaman arsitektur yang baik.",
      "State management sangat penting pada aplikasi yang kompleks.",
      "Pemisahan tanggung jawab membuat kode lebih mudah dirawat.",
      "Kolaborasi dengan backend sangat penting dalam pengembangan fitur.",
      "Membangun komponen yang reusable dapat mempercepat proses pengembangan.",
    ],
  },
};

export default stiMobileId;