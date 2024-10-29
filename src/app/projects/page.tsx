import ProjectList from "@components/project-list";
import ReturnToTop from "@components/ui/return-to-top";

import { ProjectDataType, QUERIES, queryCMS } from "@/sanity-helpers";

const ProjectsPage: React.FC = async () => {
  const allProjects = await queryCMS<ProjectDataType[]>(
    QUERIES.ALL_PROJECTS_QUERY
  );

  return (
    <div className="w-full flex flex-col items-end">
      <h2 className="font-dunk text-4xl w-full px-12 md:text-6xl text-accent mt-14 mb-10">
        ALL PROJECTS
      </h2>

      <ProjectList projects={allProjects} colorVariant="dark-bg" />

      <ReturnToTop />
    </div>
  );
};

export default ProjectsPage;
