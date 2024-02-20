// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const ABOUT_BLURB_QUERY = groq`*[_type == "textChunk" && title == "about"][0]`;

export const TOP_PROJECTS_QUERY = groq`*[_type == 'project' && archived == false] | order(year desc) {
	title,
	link,
	codeLink,
	description,
	category,
	archived,
	year
}`;

export const ARCHIVED_PROJECTS_QUERY = groq`*[_type == 'project' && archived == true] | order(year desc) {
	title,
	link,
	codeLink,
	description,
	category,
	archived,
	year
}`;

export const QUERIES = {
  TOP_PROJECTS_QUERY,
  ARCHIVED_PROJECTS_QUERY,
  ABOUT_BLURB_QUERY,
};
