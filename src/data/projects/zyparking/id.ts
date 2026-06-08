import type { ProjectContent } from "@/types/project";

const zyparkingId: ProjectContent = {
  title: "ZyParking",
  description: "Konsep pengalaman parkir pintar yang fokus pada penemuan tempat parkir, navigasi, reservasi, dan akses berbasis QR.",
  shortDescription: "Pengalaman Parkir Pintar untuk Mobilitas Perkotaan",
  year: "2025",
  role: "Pemimpin Produk & Desainer UI/UX",
  techStack: ["Figma"],
  problem: {
    background:
      "Mencari tempat parkir di gedung besar seperti pusat perbelanjaan, kompleks perkantoran, dan fasilitas publik bisa sangat memakan waktu. Pengemudi sering menghabiskan beberapa menit menavigasi area parkir yang ramai tanpa mengetahui di mana tempat kosong berada. Selain ketidaknyamanan, hal ini menciptakan lalu lintas yang tidak perlu di dalam fasilitas parkir, meningkatkan konsumsi bahan bakar, dan berdampak negatif pada pengalaman pengunjung secara keseluruhan.",
    challenges: [
      "Visibilitas terbatas terhadap ketersediaan tempat parkir",
      "Navigasi sulit di dalam fasilitas parkir yang besar",
      "Ketergantungan pada tiket parkir fisik",
      "Ketidakmampuan untuk memesan tempat parkir sebelum kedatangan",
      "Peluang terbatas untuk layanan bernilai tambah tambahan",
    ],
    objectives: [
      "Membantu pengguna menemukan tempat parkir lebih efisien",
      "Memberikan navigasi dalam ruangan yang intuitif",
      "Mengganti tiket fisik dengan akses berbasis QR",
      "Mengaktifkan reservasi tempat parkir",
      "Mengeksplorasi peluang layanan premium",
    ],
  },
  discussion: {
    requirements: [
      "Tampilan ketersediaan tempat parkir secara real-time",
      "Navigasi dalam ruangan ke tempat parkir",
      "Sistem masuk dan keluar berbasis QR",
      "Reservasi tempat parkir sebelum kedatangan",
      "Konsep keanggotaan premium",
    ],
    architecture:
      "Desain mengikuti pendekatan mobile-first dengan fokus pada kesederhanaan dan kejelasan. Peta parkir menggunakan indikator berkode warna untuk status ketersediaan. Navigasi disederhanakan hanya ke elemen panduan esensial.",
    technologyStack: [
      { name: "Figma", description: "Alat desain utama untuk desain dan prototiping UI/UX" },
      { name: "Peta Berkode Warna", description: "Indikatorvisual ketersediaan tempat parkir" },
      { name: "Sistem Akses QR", description: "Tiket digital untuk masuk dan keluar" },
      { name: "Alur Reservasi", description: "Pemesanan tempat parkir sebelum kedatangan" },
    ],
    developmentProcess:
      "Proses desain dimulai dengan memetakan perjalanan parkir dari awal hingga akhir, dari perencanaan perjalanan hingga keluar dari fasilitas parkir. Beberapa titik gesekan diidentifikasi di sekitar ketersediaan parkir, navigasi, dan manajemen tiket. Keputusan desain utama mencakup peta parkir berkode warna, tata letak grid parkir yang disederhanakan, panduan navigasi minimal, dan alur akses QR yang fleksibel.",
    screenshots: [
      "/projects/zyparking/zyparking mockup.jpg",
      "/projects/zyparking/zyparking mockup.jpg",
    ],
  },
  result: {
    outcome:
      "Desain akhir menyajikan pengalaman parkir yang saling terhubung dengan fokus pada visibilitas, kenyamanan, dan kemudahan navigasi. Alih-alih memperlakukan parkir sebagai proses masuk dan keluar yang sederhana, konsep ini重新 membayangkan sebagai perjalanan digital yang dimulai sebelum kedatangan dan berlanjut hingga keberangkatan.",
    featuresDelivered: [
      "Peta parkir real-time dengan indikator ketersediaan",
      "Navigasi dalam ruangan ke tempat parkir yang dipilih",
      "Sistem tiket digital berbasis QR",
      "Reservasi tempat parkir sebelum kedatangan",
      "Konsep keanggotaan premium dengan manfaat prioritas",
    ],
    lessonsLearned: [
      "Desain untuk lingkungan fisik memerlukan pertimbangan terhadap keterbatasan perangkat keras",
      "Tata letak parkir yang kompleks harus disederhanakan menjadi pola visual yang familiar",
      "Tujuan bisnis dapat diintegrasikan tanpa mengkompromikan pengalaman pengguna inti",
    ],
  },
};

export default zyparkingId;
