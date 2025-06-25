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
    description_id: `Website ini merupakan portofolio pribadi pertama yang saya buat dengan tujuan untuk memperkenalkan diri secara profesional. Di dalamnya, saya menampilkan informasi pribadi, pengalaman kerja, proyek-proyek nyata yang pernah saya kerjakan, serta keahlian dan tools yang saya kuasai dalam pengembangan web dan aplikasi. Selain itu, website ini juga memuat riwayat pendidikan saya sebagai bagian dari perjalanan dan pengembangan karier saya di dunia teknologi informasi.`,
    description_en: `This website is my first personal portfolio, designed to showcase my professional profile. It features my personal details, work experience, real-world projects I've completed, along with my expertise and tools I use in web and app development. Furthermore, it includes my educational history, highlighting my journey and growth in the IT industry.`,
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
    description_id: `Website ini dibuat sebagai media untuk memperkenalkan brand Cheriewish kepada publik, sekaligus menampilkan berbagai produk fashion muslim yang dirancang secara eksklusif oleh mereka. Melalui website ini, pengunjung dapat melihat detail lengkap dari setiap produk, mulai dari deskripsi, bahan, ukuran, hingga tampilan visual berupa foto produk yang jelas dan menarik. Selain itu, tersedia katalog produk yang memudahkan pengunjung dalam menjelajahi koleksi-koleksi Cheriewish. Untuk proses pembelian, pengunjung akan diarahkan secara otomatis ke platform e-commerce Shopee sebagai mitra penjualan resmi. Tak hanya itu, website ini juga memuat dokumentasi kegiatan Cheriewish dalam bentuk foto dan video, seperti sesi pemotretan, peluncuran koleksi terbaru, hingga partisipasi dalam berbagai acara, guna menunjukkan komitmen dan perkembangan brand dalam industri fashion tanah air.`,
    description_en: `This website was created as a medium to introduce the Cheriewish brand to the public while showcasing their range of exclusively designed Muslim fashion products. Visitors can explore complete product details—including descriptions, materials, sizes, and high-quality visual displays—alongside a curated catalog for seamless browsing. To purchase, visitors will be automatically redirected to Shopee, the brand’s official e-commerce partner. The website also features Cheriewish’s activity documentation, such as photoshoots, new collection launches, and event participations, through photos and videos, demonstrating the brand’s commitment and progress in Indonesia’s fashion industry.`,
    role: "Frontend Developer",
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
    description_id: `Website ini dirancang sebagai profil digital resmi untuk perusahaan PT Medan Packing Relokasi yang bergerak di bidang jasa pindahan. Melalui website ini, pengunjung dapat mengetahui informasi umum tentang perusahaan serta layanan-layanan utama yang ditawarkan. Website ini juga dilengkapi dengan fitur pelacakan pengiriman secara akurat dan real-time menggunakan nomor tanda terima, yang memudahkan pengguna dalam memantau status pengiriman barang. Selain itu, tersedia pula fitur terjemahan bahasa yang memungkinkan pengunjung mengakses konten dalam Bahasa Indonesia maupun Bahasa Inggris.`,
    description_en: `This website is designed as the official digital profile for PT Medan Packing Relokasi, a company operating in the relocation services industry. Through this website, visitors can learn general information about the company as well as the main services offered. The website also features an accurate and real-time shipment tracking system using a receipt number, making it easier for users to monitor the status of their goods delivery. Additionally, a language translation feature is available, allowing visitors to access content in both Indonesian and English.`,
    role: "Web Developer",
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
    description_id: `Website ini dibuat sebagai platform perlombaan antar masjid dan musala yang diselenggarakan oleh Yayasan Amaliah Astra (YAA). Perlombaan ini ditujukan bagi masjid dan musala yang berada di kawasan perusahaan-perusahaan Astra, tanpa memandang bidang usaha dari perusahaan tersebut. Perwakilan dari masing-masing masjid atau musala dapat mendaftar secara online dan mengisi formulir jawaban sesuai dengan ketentuan yang telah ditetapkan. Penilaian dalam perlombaan ini dilakukan melalui tiga tahap, yaitu pra-penilaian oleh panitia, penilaian awal oleh dewan juri, dan penilaian akhir oleh dewan juri. Hasil dari seluruh tahapan tersebut akan menentukan tiga pemenang utama. Melalui perlombaan ini, diharapkan masjid dan musala di lingkungan Astra dapat saling berbagi inspirasi serta meningkatkan kualitas kegiatan keagamaan dan sosial di lingkungan masing-masing.`,
    description_en: `This website was created as a competition platform for mosques and prayer rooms (musholla) organized by the Astra Amaliah Foundation (YAA), aimed at mosques and musholla located in the areas of Astra-affiliated companies, regardless of the companies’ business sectors. Representatives from each mosque or musholla can register online and submit their answer forms according to the specified guidelines, with the competition’s assessment conducted in three stages: pre-evaluation by the committee, initial judging by the jury panel, and final judging by the jury panel, where the combined results will determine the three main winners. Through this competition, it is hoped that mosques and musholla within the Astra community can share inspiration and improve the quality of religious and social activities in their respective environments.`,
    role: "Full Stack Developer",
    client: "Yayasan Amaliah Astra (YAA)",
    period: "August 2024 - November 2024",
    technology: "Laravel 11, Bootstrap 5, PostgreSQL",
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
    description_id: `Aplikasi Jamnation (Jamkrindo Network Information) merupakan platform informasi internal yang dirancang untuk memudahkan setiap divisi dalam mengakses berbagai informasi jaringan kantor secara detail. Informasi yang ditampilkan dalam aplikasi ini dikelola oleh admin, sementara pengguna dari divisi-divisi lain hanya memiliki akses untuk melihat informasi yang relevan dengan kebutuhan mereka. Dengan hadirnya aplikasi ini, proses kerja tiap divisi menjadi lebih terbantu dan efisien. Aplikasi Jamnation juga tersedia dan dapat diunduh melalui Play Store dan App Store, sehingga dapat diakses dengan mudah melalui berbagai perangkat.`,
    description_en: `Jamnation Application (Jamkrindo Network Information) is an internal information platform designed to facilitate each division in accessing various detailed office network information. The information displayed in this application is managed by the admin, while users from other divisions only have access to view information relevant to their needs. With the presence of this application, the workflow of each division becomes more efficient and assisted. Jamnation is also available and can be downloaded on the Play Store and App Store, making it easily accessible across various devices.`,
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
      {
        type: "video",
        path: "https://www.youtube.com/embed/hVaArqUgFfo?si=LN_ai7dBEVm2Vj20",
        isThumbnail: false,
      },
    ],
  },
];

export { tabs, projects };
