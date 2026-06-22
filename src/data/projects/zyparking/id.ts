import type { ProjectContent } from "@/types/project";

const zyparkingId: ProjectContent = {
  title: "ZyParking",
  description: "Konsep pengalaman parkir pintar yang fokus pada penemuan tempat parkir, navigasi, reservasi, dan akses berbasis QR.",
  shortDescription: "Pengalaman Parkir Pintar untuk Mobilitas Perkotaan",
  year: "2025",
  role: "Pemimpin Produk & Desainer UI/UX",
  techStack: ["Figma"],
  introduction: [
    "ZyParking adalah konsep yang saya inisiasi sendiri untuk mengeksplorasi bagaimana pengalaman parkir bisa terasa seperti satu alur yang terhubung, dari merencanakan perjalanan hingga keluar dari gedung, alih-alih sekadar berhenti sejenak di tengah jalan.",
    "Proyek ini berupa eksplorasi desain, bukan produk yang sudah jadi. Eksplorasi ini memberi saya ruang untuk memikirkan navigasi dalam ruangan, ketersediaan real-time, dan akses QR sebagai satu sistem, sekaligus menguji seberapa jauh Figma bisa membawa sebuah ide produk sebelum kode ditulis.",
  ],
  decisions: [
    {
      label: "Keputusan 01",
      title: "Peta parkir berkode warna",
      description:
        "Untuk meningkatkan keterbacaan saat mengemudi, slot parkir disederhanakan menjadi indikator merah dan hijau. Pengguna dapat melihat ketersediaan secara sekilas tanpa harus menafsirkan angka atau denah yang kosong.",
    },
    {
      label: "Keputusan 02",
      title: "Alur QR hybrid",
      description:
        "Fasilitas parkir yang berbeda menggunakan perangkat yang berbeda, sehingga sistem mendukung dua mode: memindai QR di kios maupun menampilkan QR pribadi di gerbang. Satu alur, dua cara masuk.",
    },
    {
      label: "Keputusan 03",
      title: "Keanggotaan premium",
      description:
        "Langganan diperkenalkan untuk mendukung keberlanjutan jangka panjang. Anggota mendapatkan slot prioritas, waktu keluar yang lebih singkat, dan layanan tambahan, dikemas sebagai kenyamanan, bukan sekadar paywall.",
    },
  ],
  contributions: [
    "Melakukan riset pengguna dan memetakan alur parkir dari awal hingga akhir.",
    "Merancang sistem UI/UX lengkap di Figma, termasuk alur, komponen, dan gaya visual.",
    "Merancang peta ketersediaan parkir berkode warna dan alur navigasi dalam ruangan.",
    "Membuat prototipe sistem masuk dan keluar berbasis QR dengan alur reservasi.",
    "Menyempurnakan desain berdasarkan umpan balik untuk menyederhanakan pengalaman parkir.",
  ],
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
      "Desain akhir menyajikan pengalaman parkir yang saling terhubung dengan fokus pada visibilitas, kenyamanan, dan kemudahan navigasi. Alih-alih memperlakukan parkir sebagai proses masuk dan keluar yang sederhana, konsep ini membayangkan ulang parkir sebagai perjalanan digital yang dimulai sebelum kedatangan dan berlanjut hingga keberangkatan.",
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
