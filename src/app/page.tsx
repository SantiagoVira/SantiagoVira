import AboutSection from "@sections/about";
import ExperienceSection from "@sections/experience";
import ProjectsSection from "@sections/projects";
import Hero from "@sections/hero";

import Footer from "@layout/footer";

import TidbitBox from "@components/tidbit-box";

import { ExperienceType, projectDataType } from "@cms/client";
import { QUERIES } from "@cms/queries";
import { queryCMS } from "@cms/store";

const Home = async () => {
  const topProjectsQuery = await queryCMS(QUERIES.TOP_PROJECTS_QUERY);
  const topProjects = topProjectsQuery.data as unknown as projectDataType[];

  const aboutBlurbQuery = await queryCMS(QUERIES.ABOUT_BLURB_QUERY);
  const aboutBlurb = aboutBlurbQuery.data as unknown as { body: any[] };

  const experienceQuery = await queryCMS(QUERIES.EXPERIENCE_QUERY);
  const experienceData = experienceQuery.data as unknown as ExperienceType[];

  return (
    <>
      <TidbitBox />
      <Hero />
      <AboutSection text={aboutBlurb.body} />
      <ProjectsSection topProjects={topProjects} />
      <ExperienceSection experiences={experienceData} />
      <Footer />
    </>
  );
};

export default Home;
