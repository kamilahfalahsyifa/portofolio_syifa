import type { ProjectContent } from "@/types/project";

const fleetId: ProjectContent = {
  title: "Fleet Management System (SaaS)",
  subtitle:
    "Aplikasi mobile lintas platform berbasis Flutter untuk operasional logistik dan armada — dirancang bagi pengemudi dalam mengelola aktivitas pengiriman dan biaya operasional.",
  description:
    "Sistem Fleet Management berbasis SaaS yang membantu pengemudi mengelola jadwal, melakukan pelacakan pengiriman secara real-time, mengajukan biaya operasional, dan memantau histori pengiriman melalui satu aplikasi mobile terpadu.",
  shortDescription:
    "Aplikasi mobile lintas platform berbasis Flutter untuk operasional logistik dan armada.",
  year: "2025",
  role: "Mobile Developer & UI/UX Designer",
  techStack: [
    "Flutter 3",
    "Dart",
    "Clean Architecture",
    "BLoC Pattern",
    "REST API Integration",
    "JWT Authentication",
    "Geolocator",
    "Flutter Map",
    "OpenStreetMap",
    "Google ML Kit",
    "Shared Preferences",
  ],
  introduction: [
    "Fleet Management System adalah platform mobile SaaS untuk operasional logistik dan armada. Saya bertanggung jawab atas keseluruhan desain mobile UI/UX di Figma serta pengembangan dan pemeliharaan aplikasi Flutter yang digunakan pengemudi setiap hari untuk mengelola pekerjaan mereka.",
  ],
  decisions: [
    {
      label: "Keputusan",
      title: "Clean Architecture dengan BLoC dan API client khusus",
      description:
        "Karena aplikasi menangani autentikasi, pelacakan real-time, OCR, dan banyak alur pengguna, codebase disusun menggunakan Clean Architecture. BLoC menangani state, sementara client API khusus berbasis Dio mengatur JWT, refresh token otomatis, dan retry request. Hasilnya, proyek tetap modular, mudah diuji, dan sederhana untuk dikembangkan saat fitur baru ditambahkan.",
    },
  ],
  problem: {
    background:
      "Pengemudi armada mencatat jadwal, pengiriman, dan biaya operasional menggunakan alat-alat yang terpisah — panggilan telepon, catatan kertas, dan spreadsheet manual. Kondisi ini membuat tim operasi dan pengemudi kesulitan melihat status real-time, memvalidasi biaya, dan menyimpan histori aktivitas yang dapat diaudit.",
    challenges: [
      "Jadwal, pengiriman, dan biaya tercatat di banyak alat yang tidak saling terhubung.",
      "Tidak ada visibilitas real-time terhadap progres pengiriman dan lokasi pengemudi.",
      "Biaya bahan bakar, tol, dan makan harus dimasukkan secara manual dari struk kertas.",
      "Permintaan limit operasional ditangani secara manual dengan traceability yang buruk.",
      "Notifikasi dan histori membutuhkan satu pintu masuk yang andal bagi pengemudi.",
    ],
    objectives: [
      "Menyediakan satu aplikasi untuk jadwal, pengiriman, dan biaya pengemudi.",
      "Mengaktifkan pelacakan GPS real-time dan visualisasi rute.",
      "Mengotomatisasi input biaya melalui OCR struk.",
      "Menyederhanakan permintaan dan persetujuan limit operasional.",
      "Memusatkan notifikasi, histori, dan manajemen akun.",
    ],
  },
  discussion: {
    requirements: [
      "Autentikasi dengan JWT dan refresh token otomatis.",
      "Dashboard berisi jadwal harian dan checkpoint.",
      "Manajemen jadwal pengiriman.",
      "Pelacakan GPS real-time dengan peta interaktif dan visualisasi rute (OpenStreetMap + OSRM).",
      "Scanner struk berbasis OCR menggunakan Google ML Kit.",
      "Pelacakan permintaan dan persetujuan limit operasional.",
      "Histori pengiriman dan activity log.",
      "Pusat notifikasi dengan manajemen badge belum dibaca.",
      "Profil pengguna dan manajemen akun.",
    ],
    architecture:
      "Aplikasi menggunakan Clean Architecture dengan BLoC untuk state management. Client API berbasis Dio mengatur autentikasi JWT dan refresh token otomatis. Geolocator menyediakan lokasi perangkat, Flutter Map merender tile OpenStreetMap, dan Google ML Kit menjalankan scanner OCR di perangkat. Shared Preferences menangani persistensi lokal yang ringan.",
    technologyStack: [
      { name: "Flutter 3", description: "Framework cross-platform untuk membangun aplikasi mobile." },
      { name: "Dart", description: "Bahasa pemrograman utama untuk codebase mobile." },
      { name: "Clean Architecture", description: "Pemisahan layer presentation, domain, dan data." },
      { name: "BLoC Pattern", description: "State management untuk alur yang terprediksi dan mudah diuji." },
      { name: "REST API Integration", description: "Komunikasi dengan backend SaaS melalui endpoint RESTful." },
      { name: "JWT Authentication", description: "Autentikasi aman dengan refresh token otomatis." },
      { name: "Geolocator", description: "Koordinat GPS real-time untuk pelacakan dan checkpoint." },
      { name: "Flutter Map + OpenStreetMap", description: "Render peta interaktif dan visualisasi rute dengan OSRM." },
      { name: "Google ML Kit OCR", description: "Pengenalan teks di perangkat untuk scan struk." },
      { name: "Shared Preferences", description: "Persistensi lokal untuk sesi dan data kecil pengguna." },
    ],
    developmentProcess:
      "Dimulai dari arsitektur informasi dan desain UI/UX di Figma, lalu bootstrap proyek Flutter dengan layer Clean Architecture. Autentikasi, dashboard, dan jadwal dibangun lebih dulu, diikuti pelacakan, OCR, notifikasi, dan alur limit operasional. QA iteratif bersama pengemudi membentuk UX akhir.",
    screenshots: [
      "/projects/fleet-management/cover.jpg",
      "/projects/fleet-management/banner.jpg",
    ],
  },
  result: {
    outcome:
      "Fleet Management System memberi pengemudi satu tempat untuk merencanakan, menjalankan, dan melaporkan pekerjaan mereka — mengubah proses yang tersebar menjadi alur mobile yang streamlined dan dapat dipantau tim operasi secara real time.",
    featuresDelivered: [
      "Autentikasi dan manajemen sesi dengan JWT refresh.",
      "Dashboard berisi jadwal harian dan checkpoint.",
      "Manajemen jadwal pengiriman.",
      "Pelacakan GPS real-time dengan peta interaktif.",
      "Visualisasi rute menggunakan OpenStreetMap dan OSRM.",
      "Scanner struk berbasis OCR untuk bahan bakar, tol, makan, dan biaya lainnya.",
      "Pelacakan permintaan dan persetujuan limit operasional.",
      "Histori pengiriman dan activity log.",
      "Pusat notifikasi dengan manajemen badge belum dibaca.",
      "Profil pengguna dan manajemen akun.",
    ],
    lessonsLearned: [
      "Clean Architecture terbayar saat fitur berkembang cepat dari waktu ke waktu.",
      "Refresh JWT dan retry request harus dirancang sejak hari pertama.",
      "Keandalan OCR bergantung pada kualitas gambar dan feedback yang jelas bagi pengguna.",
      "UX mobile untuk pengemudi harus cepat dan ramah satu tangan.",
      "Kolaborasi dengan tim backend dan web menjaga konsistensi model data.",
    ],
  },
};

export default fleetId;