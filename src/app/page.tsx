import About from "./components/about-section";
import ContactsSection from "./components/contacts-section";
import ExperienceSection from "./components/experience-section";
import Hero from "./components/hero";
import Projects from "./components/projects/project-section";
import TidbitBox from "./components/tidbit-box";
import { projectDataType } from "./utils/client";
import { QUERIES } from "./utils/queries";
import { queryCMS } from "./utils/store";

const Home = async () => {
  const topProjectsQuery = await queryCMS(QUERIES.TOP_PROJECTS_QUERY);
  const topProjects = topProjectsQuery.data as unknown as projectDataType[];
  const archivedProjectsQuery = await queryCMS(QUERIES.ARCHIVED_PROJECTS_QUERY);
  const archivedProjects =
    archivedProjectsQuery.data as unknown as projectDataType[];

  const aboutBlurbQuery = await queryCMS(QUERIES.ABOUT_BLURB_QUERY);
  const aboutBlurb = aboutBlurbQuery.data as unknown as { body: any[] };

  return (
    <>
      <TidbitBox />
      <Hero />
      <About text={aboutBlurb.body} />
      <Projects topProjects={topProjects} archivedProjects={archivedProjects} />
      <ExperienceSection text={aboutBlurb.body} />
      <ContactsSection />
    </>
  );
};

export default Home;
