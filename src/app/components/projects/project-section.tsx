import { Fragment } from "react";
import Project from "./project";
import Tabs from "./tabs";
import { queryCMS } from "@/utils/store";
import { PROJECTS_QUERY } from "@/utils/queries";

const Projects: React.FC = async () => {
  const projectQuery = await queryCMS(PROJECTS_QUERY);
  const projects = projectQuery.data;

  return (
    <div className="flex flex-col w-full justify-start items-center max-w-[60rem] gap-4">
      <h2 className="font-dunk text-6xl text-accent mb-5">PROJECTS</h2>
      <Tabs />

      <div className="flex flex-col items-center w-full justify-start group">
        {projects.map((project, i) => (
          <Fragment key={i}>
            <Project />
            {i < projects.length - 1 ? (
              <hr className="w-full border-accent/60" />
            ) : (
              <></>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

// export async function getStaticProps() {
//   const projectData =
//     await client.fetch(`*[_type == 'project'] | order(index asc) {
// 	  title,
// 	  "slug": slug.current,
// 	  link,
// 	  codeLink,
// 	  "image": image.asset->url,
// 	  "langs": langs[]->{ name },
// 	  body}`);

//   console.log(projectData);

//   return {
//     props: {
//       projectData,
//     },
//     revalidate: 60,
//   };
// }

export default Projects;
