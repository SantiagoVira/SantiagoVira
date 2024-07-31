import ProjectList from "@components/project-list";
import ReturnToTop from "@components/ui/return-to-top";

import { ProjectDataType, QUERIES, queryCMS } from "@/sanity-helpers";

const ProjectsPage: React.FC = async () => {
  const allProjectsQuery = await queryCMS(QUERIES.ALL_PROJECTS_QUERY);
  const allProjects = allProjectsQuery.data as unknown as ProjectDataType[];

  return (
    <>
      <h2 className="font-dunk text-6xl text-accent mt-14 mb-10">
        ALL PROJECTS
      </h2>

      <ProjectList projects={allProjects} />

      <ReturnToTop />
    </>
  );
};

export default ProjectsPage;
