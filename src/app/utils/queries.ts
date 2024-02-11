// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;

export const TOP_PROJECTS_QUERY = groq`*[_type == 'project' && archived == false] | order(index asc) {
	title,
	link,
	codeLink,
	description,
	archived,
	year
}`;

export const ARCHIVED_PROJECTS_QUERY = groq`*[_type == 'project' && archived == true] | order(index asc) {
	title,
	link,
	codeLink,
	description,
	archived,
	year
}`;

export const QUERIES = { TOP_PROJECTS_QUERY, ARCHIVED_PROJECTS_QUERY };
