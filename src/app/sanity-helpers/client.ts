import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-02-06",
  useCdn: false,
  perspective: "published",
});

export interface ExperienceType {
  title: string;
  position: string;
  time: string;
  body: any[];
}

export interface ProjectDataType {
  title: string;
  link: string;
  codeLink: string;
  caseStudyLink: string;
  description: string;
  category: string;
  featured: boolean;
  year: number;
}

export interface ResumeType {
  title: string;
  link: string;
}
