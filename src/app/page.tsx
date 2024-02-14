import About from "./components/about-section";
import Hero from "./components/hero";
import Projects from "./components/projects/project-section";
import UnderlineHover from "./components/underline-hover";
import { projectDataType } from "./utils/client";
import { QUERIES } from "./utils/queries";
import { queryCMS } from "./utils/store";

const Home = async () => {
  const topProjectsQuery = await queryCMS(QUERIES.TOP_PROJECTS_QUERY);
  const topProjects = topProjectsQuery.data as unknown as projectDataType[];
  const archivedProjectsQuery = await queryCMS(QUERIES.ARCHIVED_PROJECTS_QUERY);
  const archivedProjects =
    archivedProjectsQuery.data as unknown as projectDataType[];
  return (
    <>
      <Hero />
      <About />
      <Projects topProjects={topProjects} archivedProjects={archivedProjects} />
      <div className="h-[300vh]"></div>
    </>
  );
};

export default Home;
