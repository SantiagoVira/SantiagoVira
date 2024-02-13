import { createClient } from "@sanity/client/stega";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-02-06",
  useCdn: false,
  perspective: "published",
});

export interface experienceSectionType {
  title: string;
  position: string;
  time: string;
  body: any[];
}

export interface projectDataType {
  title: string;
  link: string;
  codeLink: string;
  description: string;
  category: string;
  archived: boolean;
  year: number;
}

// export interface infoType {
//   _createdAt: string;
//   _id: string;
//   _rev: string;
//   _type: string;
//   _updatedAt: string;
//   slug: { _type: string; current: string };
//   title: string;
//   body: any[];
// }
