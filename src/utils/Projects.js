import Relokasi from "../assets/images/projects/relokasi/thumbnail.png";
import Jamnation from "../assets/images/projects/jamnation/thumbnail.png";
import Portfolio from "../assets/images/projects/portfolio/thumbnail.png";
import Cheriewish from "../assets/images/projects/cheriewish/thumbnail.png";
import AstraAwards from "../assets/images/projects/astra-awards/thumbnail.png";

const tabs = [
  {
    id: 1,
    name: "Website",
  },
  {
    id: 2,
    name: "Mobile",
  },
];

const projects = [
  {
    tabId: 1,
    name: "Portfolio",
    description: `Website ini merupakan portofolio pribadi pertama yang saya buat dengan tujuan untuk memperkenalkan diri secara profesional. Di dalamnya, saya menampilkan informasi pribadi, pengalaman kerja, proyek-proyek nyata yang pernah saya kerjakan, serta keahlian dan tools yang saya kuasai dalam pengembangan web dan aplikasi. Selain itu, website ini juga memuat riwayat pendidikan saya sebagai bagian dari perjalanan dan pengembangan karier saya di dunia teknologi informasi.`,
    role: "Frontend Developer",
    client: "Muhammad Azzam Nur Alwi Mansyur",
    period: "June 2025",
    technology: "React JS, Bootstrap 5",
    link_demo: "https://azzmnrdev.com/",
    link_github: "https://github.com/azzmnrwebdev/portfolio-v-1",
    status_demo: "Available",
    status_github: "Available",
    files: [
      {
        type: "image",
        path: Portfolio,
        isThumbnail: true,
      },
    ],
  },
  {
    tabId: 1,
    name: "Cheriewish",
    description: `Website ini dibuat sebagai media untuk memperkenalkan brand Cheriewish kepada publik, sekaligus menampilkan berbagai produk fashion muslim yang dirancang secara eksklusif oleh mereka. Melalui website ini, pengunjung dapat melihat detail lengkap dari setiap produk, mulai dari deskripsi, bahan, ukuran, hingga tampilan visual berupa foto produk yang jelas dan menarik. Selain itu, tersedia katalog produk yang memudahkan pengunjung dalam menjelajahi koleksi-koleksi Cheriewish. Untuk proses pembelian, pengunjung akan diarahkan secara otomatis ke platform e-commerce Shopee sebagai mitra penjualan resmi. Tak hanya itu, website ini juga memuat dokumentasi kegiatan Cheriewish dalam bentuk foto dan video, seperti sesi pemotretan, peluncuran koleksi terbaru, hingga partisipasi dalam berbagai acara, guna menunjukkan komitmen dan perkembangan brand dalam industri fashion tanah air.`,
    role: "Full Stack Developer",
    client: "Lovina Aulia",
    period: "June 2025",
    technology: "React JS, Bootstrap 5",
    link_demo: "https://cheriewish.vercel.app/",
    link_github: "https://github.com/azzmnrwebdev/cheriewish",
    status_demo: "Available",
    status_github: "Available",
    files: [
      {
        type: "image",
        path: Cheriewish,
        isThumbnail: true,
      },
    ],
  },
  {
    tabId: 1,
    name: "Relokasi",
    description: `Website ini dirancang sebagai profil digital resmi untuk perusahaan PT Medan Packing Relokasi yang bergerak di bidang jasa pindahan. Melalui website ini, pengunjung dapat mengetahui informasi umum tentang perusahaan serta layanan-layanan utama yang ditawarkan. Website ini juga dilengkapi dengan fitur pelacakan pengiriman secara akurat dan real-time menggunakan nomor tanda terima, yang memudahkan pengguna dalam memantau status pengiriman barang. Selain itu, tersedia pula fitur terjemahan bahasa yang memungkinkan pengunjung mengakses konten dalam Bahasa Indonesia maupun Bahasa Inggris.`,
    role: "Frontend Developer",
    client: "PT Medan Packing Relokasi",
    period: "June 2024",
    technology: "Wordpress",
    link_demo: "https://relokasi.co.id/",
    link_github: null,
    status_demo: "Available",
    status_github: "Not available",
    files: [
      {
        type: "image",
        path: Relokasi,
        isThumbnail: true,
      },
    ],
  },
  {
    tabId: 1,
    name: "Astra Awards",
    description: `Website ini dibuat sebagai platform perlombaan antar masjid dan musala yang diselenggarakan oleh Yayasan Amaliah Astra (YAA). Perlombaan ini ditujukan bagi masjid dan musala yang berada di kawasan perusahaan-perusahaan Astra, tanpa memandang bidang usaha dari perusahaan tersebut. Perwakilan dari masing-masing masjid atau musala dapat mendaftar secara online dan mengisi formulir jawaban sesuai dengan ketentuan yang telah ditetapkan. Penilaian dalam perlombaan ini dilakukan melalui tiga tahap, yaitu pra-penilaian oleh panitia, penilaian awal oleh dewan juri, dan penilaian akhir oleh dewan juri. Hasil dari seluruh tahapan tersebut akan menentukan tiga pemenang utama. Melalui perlombaan ini, diharapkan masjid dan musala di lingkungan Astra dapat saling berbagi inspirasi serta meningkatkan kualitas kegiatan keagamaan dan sosial di lingkungan masing-masing.`,
    role: "Full Stack Developer",
    client: "Yayasan Amaliah Astra (YAA)",
    period: "August 2024 - November 2024",
    technology: "Laravel 11, Bootstrap, PostgreSQL",
    link_demo: null,
    link_github: null,
    status_demo: "Internal Use Only",
    status_github: "Private",
    files: [
      {
        type: "image",
        path: AstraAwards,
        isThumbnail: true,
      },
    ],
  },
  {
    tabId: 2,
    name: "Jamnation",
    description: `Aplikasi Jamnation (Jamkrindo Network Information) merupakan platform informasi internal yang dirancang untuk memudahkan setiap divisi dalam mengakses berbagai informasi jaringan kantor secara detail. Informasi yang ditampilkan dalam aplikasi ini dikelola oleh admin, sementara pengguna dari divisi-divisi lain hanya memiliki akses untuk melihat informasi yang relevan dengan kebutuhan mereka. Dengan hadirnya aplikasi ini, proses kerja tiap divisi menjadi lebih terbantu dan efisien. Aplikasi Jamnation juga tersedia dan dapat diunduh melalui Play Store dan App Store, sehingga dapat diakses dengan mudah melalui berbagai perangkat.`,
    role: "Frontend Developer",
    client: "PT Jaminan Kredit Indonesia",
    period: "November 2024 - March 2025",
    technology: "Flutter",
    link_demo: null,
    link_github: null,
    status_demo: "Internal Use Only",
    status_github: "Private",
    files: [
      {
        type: "image",
        path: Jamnation,
        isThumbnail: true,
      },
    ],
  },
];

export { tabs, projects };
