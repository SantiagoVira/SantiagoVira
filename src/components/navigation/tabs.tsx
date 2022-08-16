import type { IconType } from "react-icons";
import { AiFillEdit, AiOutlineBarChart } from "react-icons/ai";
import { BsCodeSlash, BsMarkdown, BsQuestion } from "react-icons/bs";
import {
  MdOutlineCode,
  MdOutlinePlayLesson,
  MdOutlineSpaceDashboard,
  MdPerson,
  MdReorder,
  MdSettings,
  MdTimeline,
} from "react-icons/md";

export interface ITab {
  name: string;
  route?: string;
}

export const navigationTabs: ITab[] = [
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Projects",
    route: "/projects",
  },
  {
    name: "Resume",
    route: "/resume",
  },
];
