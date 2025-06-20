import Cheriewish from "../assets/images/projects/cheriewish/thumbnail.png";
import CheriewishHome from "../assets/images/projects/cheriewish/home.png";
import CheriewishCatalog from "../assets/images/projects/cheriewish/catalog.png";
import CheriewishProduct from "../assets/images/projects/cheriewish/product.png";

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
    id: 1,
    tabId: 1,
    name: "Cheriewish | Web Profil Perusahaan",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    files: [
      {
        type: "image",
        path: Cheriewish,
        isThumbnail: false,
      },
      {
        type: "image",
        path: CheriewishHome,
        isThumbnail: false,
      },
      {
        type: "image",
        path: CheriewishCatalog,
        isThumbnail: false,
      },
      {
        type: "image",
        path: CheriewishProduct,
        isThumbnail: false,
      },
    ],
  },
  {
    id: 2,
    tabId: 1,
    name: "Amaliah Astra | Web Lomba Antar Masjid",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    files: [],
  },
  {
    id: 3,
    tabId: 2,
    name: "Jamnation | Aplikasi Internal Jaringan Informasi Kantor",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    files: [],
  },
];

export { tabs, projects };
