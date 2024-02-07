// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;

export const PROJECTS_QUERY = groq`*[_type == 'project'] | order(index asc) {
	title,
	"slug": slug.current,
	link,
	codeLink,
	"image": image.asset->url,
	"langs": langs[]->{ name },
	body}`;

export const QUERIES = { PROJECTS_QUERY };
