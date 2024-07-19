import ProjectList from "@/components/projects/project-list";
import ReturnToTop from "@/components/return-to-top";
import { projectDataType } from "@/utils/client";
import { QUERIES } from "@/utils/queries";
import { queryCMS } from "@/utils/store";

const ProjectsPage: React.FC = async () => {
  const allProjectsQuery = await queryCMS(QUERIES.ALL_PROJECTS_QUERY);
  const allProjects = allProjectsQuery.data as unknown as projectDataType[];

  return (
    <>
      <h2 className="font-dunk text-6xl text-accent mt-28 mb-10">
        ALL PROJECTS
      </h2>

      <ProjectList projects={allProjects} />

      <ReturnToTop />
    </>
  );
};

export default ProjectsPage;
