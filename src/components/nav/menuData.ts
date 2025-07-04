import { Menu } from "../../types/menu";
const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    newTab: false,
    path: "/about-us",
  },
  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 1,
        title: "Development Assistance",
        newTab: false,
        path: "/services/1",
      },
      {
        id: 2,
        title: "Web & Desktop Application Development",
        newTab: false,
        path: "/services/2",
      },
      {
        id: 3,
        title: "Website Development",
        newTab: false,
        path: "/services/3",
      },
      {
        id: 4,
        title: "Software QA & Testing",
        newTab: false,
        path: "/services/4",
      },
      {
        id: 5,
        title: "Data Management",
        newTab: false,
        path: "/services/5",
      },
      {
        id: 6,
        title: "Cloud Computing",
        newTab: false,
        path: "/services/6",
      },
    ],
  },

  // {
  //   id: 4,
  //   title: "Support",
  //   newTab: false,
  //   path: "#",
  // },
];

export default menuData;
