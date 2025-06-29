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
    description_id: `Website ini merupakan portofolio pribadi pertama saya, yang saya buat untuk memperkenalkan diri secara profesional. Di sini, Anda dapat menemukan informasi pribadi, pengalaman kerja, proyek-proyek nyata yang pernah saya kerjakan, serta keahlian dan tools yang saya kuasai dalam pengembangan web dan aplikasi. Saya juga mencantumkan riwayat pendidikan sebagai bagian dari perjalanan karier saya di dunia teknologi informasi.`,
    description_en: `This website is my first personal portfolio, which I created to introduce myself professionally. Here, you can find personal information, work experience, real projects I have worked on, as well as the skills and tools I master in web and application development. I also include my educational background as part of my career journey in the information technology world.`,
    role: "Frontend Developer",
    client: "Muhammad Azzam Nur Alwi Mansyur",
    period_id: "Juni 2025",
    period_en: "June 2025",
    technology: "React JS, Bootstrap 5",
    link_demo: "https://azzmnrdev.com/",
    link_github: "https://github.com/azzmnrwebdev/portfolio-v-1",
    status_demo_id: "Tersedia",
    status_demo_en: "Available",
    status_github_id: "Tersedia",
    status_github_en: "Available",
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
    description_id: `Website ini dibuat sebagai media untuk memperkenalkan brand Cheriewish kepada publik sekaligus menampilkan berbagai produk fashion muslim ala Korea. Melalui website ini, pengguna dapat melihat detail lengkap setiap produk, mulai dari deskripsi, bahan, ukuran, hingga tampilan visual berupa foto produk yang jelas dan menarik. Selain itu, tersedia katalog produk yang memudahkan pengguna menjelajahi koleksi Cheriewish. Untuk proses pembelian, pengguna akan diarahkan secara otomatis ke platform e-commerce Shopee sebagai mitra penjualan resmi. Tak hanya itu, website ini juga menampilkan dokumentasi foto kegiatan penjualan serta pelanggan yang telah membeli produk Cheriewish.`,
    description_en: `This website was created as a medium to introduce the Cheriewish brand to the public while showcasing various Korean-style Muslim fashion products. Through this website, users can view complete details of each product, including descriptions, materials, sizes, and clear, attractive product photos. Additionally, a product catalog is available to help users explore Cheriewish’s collections. For the purchasing process, users will be automatically directed to Shopee, the official e-commerce partner. Not only that, this website also features photo documentation of sales activities and customers who have purchased Cheriewish products.`,
    role: "Frontend Developer",
    client: "Lovina Aulia",
    period_id: "Juni 2025",
    period_en: "June 2025",
    technology: "React JS, Bootstrap 5",
    link_demo: "https://cheriewish.vercel.app/",
    link_github: "https://github.com/azzmnrwebdev/cheriewish",
    status_demo_id: "Tersedia",
    status_demo_en: "Available",
    status_github_id: "Tersedia",
    status_github_en: "Available",
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
    description_id: `Website ini merupakan profil digital resmi PT Medan Packing Relokasi, perusahaan yang bergerak di bidang jasa pindahan. Melalui website ini, pengguna dapat memperoleh informasi umum tentang perusahaan serta layanan utama yang ditawarkan. Fitur pelacakan pengiriman secara akurat dan real-time dengan nomor tanda terima turut disediakan untuk memudahkan pelanggan dalam memantau status pengiriman barang. Selain itu, tersedia fitur terjemahan bahasa yang memungkinkan akses konten dalam Bahasa Indonesia maupun Bahasa Inggris.`,
    description_en: `This website is the official digital profile of PT Medan Packing Relokasi, a company engaged in relocation services. Through this website, users can obtain general information about the company as well as the main services offered. An accurate and real-time shipment tracking feature using the receipt number is also provided to help customers monitor the status of their goods delivery. Additionally, a language translation feature is available, allowing access to content in both Indonesian and English.`,
    role: "Web Developer",
    client: "PT Medan Packing Relokasi",
    period_id: "Juni 2024",
    period_en: "June 2024",
    technology: "Wordpress",
    link_demo: "https://relokasi.co.id/",
    link_github: null,
    status_demo_id: "Tersedia",
    status_demo_en: "Available",
    status_github_id: "Tidak Tersedia",
    status_github_en: "Not Available",
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
    description_id: `Website ini dibuat sebagai platform perlombaan antar masjid dan musala yang diselenggarakan oleh Yayasan Amaliah Astra (YAA), khusus bagi masjid dan musala di kawasan perusahaan-perusahaan Astra tanpa memandang bidang usahanya. Perwakilan masing-masing masjid dan musala dapat mendaftar secara online dan mengisi formulir jawaban sesuai ketentuan yang berlaku. Penilaian dilakukan melalui tiga tahap: pra-penilaian oleh panitia, penilaian awal oleh dewan juri, dan penilaian akhir oleh dewan juri, dengan hasil akhir akan menentukan tiga pemenang utama. Melalui perlombaan ini, diharapkan masjid dan musala di lingkungan Astra dapat saling berbagi inspirasi serta meningkatkan kualitas kegiatan keagamaan dan sosial di lingkungan masing-masing.`,
    description_en: `This website was created as a competition platform among mosques and prayer rooms (musholla) organized by the Astra Amaliah Foundation (YAA), specifically for mosques and prayer rooms in the vicinity of Astra-affiliated companies, regardless of their business sectors. Representatives of each mosque and prayer room can register online and fill out the answer form according to the applicable rules. The judging process consists of three stages: pre-assessment by the committee, preliminary assessment by the judging panel, and final assessment by the judging panel, with the final results determining the three main winners. Through this competition, it is hoped that mosques and prayer rooms within the Astra community can share inspiration and enhance the quality of religious and social activities in their respective environments.`,
    role: "Full Stack Developer",
    client: "Yayasan Amaliah Astra (YAA)",
    period_id: "Agustus 2024 - November 2024",
    period_en: "August 2024 - November 2024",
    technology: "Laravel 11, Bootstrap 5, PostgreSQL",
    link_demo: null,
    link_github: null,
    status_demo_id: "Hanya untuk Pemakaian Internal",
    status_demo_en: "Internal Use Only",
    status_github_id: "Tidak Tersedia",
    status_github_en: "Not Available",
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
    description_id: `Aplikasi Jamnation (Jamkrindo Network Information) adalah platform informasi internal yang dirancang untuk memudahkan setiap divisi mengakses detail jaringan kantor. Informasi dalam aplikasi ini dikelola oleh admin, sementara pengguna divisi lain hanya dapat melihat data yang relevan dengan kebutuhan mereka. Kehadiran Jamnation membantu memperlancar proses kerja divisi sehingga lebih efisien, dan aplikasi ini tersedia di Play Store maupun App Store untuk diunduh serta diakses dengan mudah melalui berbagai perangkat.`,
    description_en: `Jamnation (Jamkrindo Network Information) is an internal information platform designed to make it easier for each division to access office network details. The information in this application is managed by the admin, while users from other divisions can only view data relevant to their needs. The presence of Jamnation helps streamline divisional workflows, making them more efficient. This app is available on the Play Store and App Store for download and can be easily accessed across various devices.`,
    role: "Frontend Developer",
    client: "PT Jaminan Kredit Indonesia",
    period_id: "November 2024 - Maret 2025",
    period_en: "November 2024 - March 2025",
    technology: "Flutter",
    link_demo: null,
    link_github: null,
    status_demo_id: "Hanya untuk Pemakaian Internal",
    status_demo_en: "Internal Use Only",
    status_github_id: "Tidak Tersedia",
    status_github_en: "Not Available",
    files: [
      {
        type: "image",
        path: Jamnation,
        isThumbnail: true,
      },
      {
        type: "video",
        path: "https://www.youtube.com/embed/hVaArqUgFfo?si=LN_ai7dBEVm2Vj20",
        isThumbnail: false,
      },
    ],
  },
];

export { tabs, projects };
