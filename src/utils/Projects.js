import Relokasi from "../assets/images/projects/relokasi/thumbnail.png";
import Cheriewish from "../assets/images/projects/cheriewish/thumbnail.png";

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
    name: "Cheriewish",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    link_github: "https://github.com/azzmnrwebdev/cheriewish",
    link_demo: "https://cheriewish.vercel.app/",
    files: [
      {
        type: "image",
        path: Cheriewish,
        isThumbnail: true,
      },
    ],
  },
  {
    id: 2,
    tabId: 1,
    name: "Medan Packing Relokasi",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    link_github: null,
    link_demo: "https://relokasi.co.id/",
    files: [
      {
        type: "image",
        path: Relokasi,
        isThumbnail: true,
      },
    ],
  },
  {
    id: 3,
    tabId: 1,
    name: "Amaliah Astra",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    link_github: null,
    link_demo: null,
    files: [],
  },
  {
    id: 4,
    tabId: 2,
    name: "Jamnation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    link_github: null,
    link_demo: null,
    files: [],
  },
];

export { tabs, projects };
