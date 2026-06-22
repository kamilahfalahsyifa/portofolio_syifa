import type { ProjectContent } from "@/types/project";

const kkoPaudId: ProjectContent = {
  title: "KKO PAUD Kota Semarang",
  subtitle: "Website Profil Organisasi & Sistem Informasi Komunitas",
  description:
    "KKO PAUD Kota Semarang adalah organisasi yang berfokus pada koordinasi pendidikan anak usia dini di tingkat kota. Platform ini dibangun untuk memusatkan profil organisasi, kegiatan, dan informasi anggota dalam satu tempat yang mudah diakses.",
  shortDescription:
    "Website profil organisasi dan sistem informasi komunitas untuk KKO PAUD Kota Semarang.",
  year: "2024",
  role: "Fullstack Developer & UI/UX Designer (Magang)",
  techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "Figma"],
  introduction: [
    "KKO PAUD Kota Semarang adalah organisasi yang berfokus pada koordinasi pendidikan anak usia dini di tingkat kota. Platform ini dibangun untuk memusatkan profil organisasi, kegiatan, dan informasi anggota dalam satu tempat yang mudah diakses.",
  ],
  decisions: [
    {
      label: "Keputusan",
      title: "Website CMS berbasis Laravel",
      description:
        "Kami membangun website profil organisasi berbasis Laravel dengan sistem manajemen konten sederhana, sehingga pengurus dapat memperbarui informasi secara mandiri tanpa bergantung pada developer untuk setiap perubahan.",
    },
  ],
  problem: {
    background:
      "Sebelum adanya platform ini, KKO PAUD Kota Semarang tidak memiliki satu tempat terpusat untuk mempublikasikan informasi tentang organisasi, kegiatan, maupun anggotanya. Komunikasi tersebar di media sosial, dan publik tidak memiliki sumber resmi yang dapat diandalkan untuk mendapatkan pembaruan.",
    challenges: [
      "Informasi organisasi tersebar di berbagai channel tanpa satu sumber yang terpusat.",
      "Dokumentasi kegiatan sulit diarsipkan dan diakses kembali.",
      "Berita dan pembaruan sepenuhnya mengandalkan platform media sosial.",
      "Publik tidak memiliki akses ke informasi resmi organisasi.",
      "Tidak ada platform digital yang memperkuat kredibilitas organisasi.",
    ],
    objectives: [
      "Menyediakan satu sumber resmi untuk informasi organisasi.",
      "Memudahkan dokumentasi kegiatan untuk diarsipkan dan diakses kembali.",
      "Menerbitkan berita dan pembaruan secara independen dari media sosial.",
      "Memberikan publik saluran resmi untuk mengakses informasi organisasi.",
      "Memperkuat kredibilitas digital organisasi.",
    ],
  },
  discussion: {
    requirements: [
      "Halaman profil organisasi resmi.",
      "Sistem manajemen berita dan artikel.",
      "Galeri dokumentasi kegiatan.",
      "Halaman informasi anggota dan legalitas.",
      "Dashboard admin untuk pengelolaan konten.",
      "Desain responsif untuk desktop dan mobile.",
    ],
    architecture:
      "Website dibangun dengan Laravel sebagai aplikasi PHP yang di-render di sisi server. Dashboard admin yang sederhana memungkinkan pengurus organisasi mengelola berita, kegiatan, galeri, dan dokumen legalitas secara mandiri, tanpa memerlukan perubahan kode untuk pembaruan konten rutin.",
    technologyStack: [
      { name: "Laravel", description: "Framework PHP server-side yang menjalankan website dan admin CMS." },
      { name: "MySQL", description: "Database relasional untuk menyimpan berita, kegiatan, dan informasi anggota." },
      { name: "Bootstrap", description: "Framework CSS untuk antarmuka yang responsif dan konsisten." },
      { name: "Figma", description: "Alat desain UI/UX yang digunakan untuk wireframing dan desain antarmuka." },
    ],
    developmentProcess:
      "Proyek dikembangkan secara iteratif dengan kolaborasi erat bersama pihak organisasi. Arsitektur informasi dipetakan terlebih dahulu, kemudian wireframe dan UI dirancang di Figma, lalu diimplementasikan menggunakan Laravel untuk website publik dan dashboard admin.",
    screenshots: [
      "/projects/kkopaud/cover.jpg",
      "/projects/kkopaud/banner.jpg",
    ],
  },
  result: {
    outcome:
      "Website berhasil menjadi platform informasi resmi KKO PAUD Kota Semarang, meningkatkan komunikasi, mempermudah distribusi informasi, dan memperkuat kehadiran digital organisasi.",
    featuresDelivered: [
      "Halaman profil organisasi resmi.",
      "Sistem manajemen berita dan artikel.",
      "Galeri dokumentasi kegiatan.",
      "Halaman informasi anggota dan legalitas.",
      "Dashboard admin untuk pengelolaan konten.",
      "Desain responsif untuk desktop dan mobile.",
    ],
    lessonsLearned: [
      "Membangun sistem administrasi membutuhkan keseimbangan antara fungsi dan kesederhanaan.",
      "Desain responsif sangat penting karena pengguna mengakses informasi dari berbagai perangkat.",
      "Pemisahan modul publik dan admin meningkatkan maintainability sistem.",
      "Pengelolaan file dan media memerlukan struktur yang rapi.",
      "Antarmuka yang mudah digunakan dapat mengurangi kompleksitas operasional.",
    ],
  },
};

export default kkoPaudId;