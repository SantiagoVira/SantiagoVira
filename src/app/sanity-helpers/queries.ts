import { groq } from "next-sanity";

export const ABOUT_BLURB_QUERY = groq`*[_type == "textChunk" && title == "about"][0]`;

export const ALL_PROJECTS_QUERY = groq`*[_type == 'project'] | order(year desc) {
	title,
	link,
	codeLink,
	description,
	category,
	archived,
	year
}`;

export const TOP_PROJECTS_QUERY = groq`*[_type == 'project' && featured == true] | order(year desc) {
	title,
	link,
	codeLink,
	description,
	category,
	featured,
	year
}`;

export const ARCHIVED_PROJECTS_QUERY = groq`*[_type == 'project' && featured == false] | order(year desc) {
	title,
	link,
	codeLink,
	description,
	category,
	featured,
	year
}`;

export const EXPERIENCE_QUERY = groq`*[_type == 'experienceSection'] | order(index asc) {
    title,
    position,
    time,
    body
  }`;

export const QUERIES = {
  ALL_PROJECTS_QUERY,
  TOP_PROJECTS_QUERY,
  ARCHIVED_PROJECTS_QUERY,
  ABOUT_BLURB_QUERY,
  EXPERIENCE_QUERY,
};
