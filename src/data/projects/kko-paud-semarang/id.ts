import type { ProjectContent } from "@/types/project";

const kkoPaudId: ProjectContent = {
  title: "KKO PAUD Kota Semarang",
  description: "Website Profil Organisasi dan Sistem Informasi Komunitas",
  shortDescription: "Dikembangkan selama program magang di Dinas Komunikasi dan Informatika (Diskominfo) Kota Semarang untuk menyediakan platform digital terpusat bagi KKO PAUD.",
  year: "2024",
  role: "Pengembang Frontend & Desainer UI/UX (Magang)",
  techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "Figma"],
  problem: {
    background:
      "KKO PAUD Kota Semarang merupakan organisasi yang mewadahi kolaborasi dan pengembangan pendidikan anak usia dini di Kota Semarang. Sebelum website ini dikembangkan, informasi mengenai profil organisasi, kegiatan, berita, dan dokumentasi masih disebarkan melalui berbagai media yang terpisah sehingga sulit diakses secara terpusat oleh anggota maupun masyarakat umum.",
    challenges: [
      "Informasi organisasi belum tersedia dalam satu platform yang terintegrasi.",
      "Publikasi kegiatan dan berita masih dilakukan melalui media sosial.",
      "Dokumentasi kegiatan sulit diarsipkan dan dicari kembali.",
      "Masyarakat kesulitan memperoleh informasi resmi mengenai organisasi.",
      "Belum tersedia media digital yang dapat meningkatkan kredibilitas organisasi.",
    ],
    objectives: [
      "Membangun website resmi sebagai pusat informasi organisasi.",
      "Menyediakan halaman profil, kegiatan, berita, galeri, dan kontak.",
      "Mempermudah penyebaran informasi kepada anggota dan masyarakat.",
      "Meningkatkan profesionalisme dan kredibilitas organisasi melalui kehadiran digital.",
      "Menyediakan sistem pengelolaan konten yang mudah digunakan oleh administrator.",
    ],
  },
  discussion: {
    requirements: [
      "Halaman profil organisasi.",
      "Manajemen berita dan artikel.",
      "Galeri dokumentasi kegiatan.",
      "Informasi anggota dan struktur organisasi.",
      "Halaman kontak dan informasi legalitas.",
      "Dashboard administrasi untuk pengelolaan konten.",
    ],
    architecture:
      "Website dirancang menggunakan pendekatan content-driven dengan fokus pada kemudahan akses informasi. Struktur navigasi dibuat sederhana agar pengguna dapat menemukan informasi penting hanya dalam beberapa klik. Antarmuka dirancang responsif sehingga dapat digunakan dengan nyaman pada perangkat desktop maupun mobile.",
    technologyStack: [
      { name: "PHP", description: "Digunakan untuk membangun fungsionalitas backend dan mengelola konten website secara dinamis." },
      { name: "MySQL", description: "Digunakan untuk menyimpan data berita, galeri, profil organisasi, dan informasi lainnya." },
      { name: "Bootstrap", description: "Digunakan untuk membangun antarmuka yang responsif dan konsisten." },
      { name: "Figma", description: "Digunakan untuk merancang wireframe dan desain antarmuka sebelum implementasi." },
    ],
    developmentProcess:
      "Pengembangan dimulai dengan proses analisis kebutuhan organisasi dan identifikasi informasi yang paling sering diakses oleh pengguna. Setelah penyusunan struktur informasi dan desain antarmuka, website diimplementasikan menggunakan Laravel dengan sistem manajemen konten yang memungkinkan administrator memperbarui informasi secara mandiri tanpa perlu melakukan perubahan kode.",
    screenshots: [
      "/projects/kkopaud/kko mockup.jpg",
      "/projects/kkopaud/kko mockup.jpg",
    ],
  },
  result: {
    outcome:
      "Website KKO PAUD Kota Semarang berhasil menjadi media informasi resmi organisasi yang dapat diakses secara publik. Seluruh informasi penting kini tersedia dalam satu platform terpusat sehingga mempermudah penyebaran informasi dan meningkatkan profesionalisme organisasi di era digital.",
    featuresDelivered: [
      "Website profil organisasi.",
      "Sistem manajemen berita dan artikel.",
      "Galeri dokumentasi kegiatan.",
      "Halaman informasi anggota dan legalitas.",
      "Dashboard administrasi.",
      "Desain responsif untuk desktop dan mobile.",
    ],
    lessonsLearned: [
      "Pentingnya memahami kebutuhan pengguna non-teknis saat merancang sistem informasi organisasi.",
      "Struktur informasi yang baik memiliki peran besar dalam meningkatkan pengalaman pengguna.",
      "Komunikasi yang efektif dengan stakeholder membantu mempercepat proses pengembangan dan revisi.",
    ],
  },
};

export default kkoPaudId;
