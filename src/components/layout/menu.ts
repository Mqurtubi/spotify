import { IoHomeOutline, IoLibrary } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const menu = [
  {
    label: "Home",
    href: "/",
    Icon: IoHomeOutline,
  },
  {
    label: "Search",
    href: "/search",
    Icon: CiSearch,
  },
  {
    label: "library",
    href: "/library",
    Icon: IoLibrary,
  },
];

export default menu;
