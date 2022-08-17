export interface ITab {
  name: string;
  route?: string;
  hash?: string;
}

export const navigationTabs: ITab[] = [
  {
    name: "Projects",
    route: "/projects",
  },
  {
    name: "Experience",
    route: "/experience",
  },
];
