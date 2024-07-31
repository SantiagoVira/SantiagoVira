import AboutSection from "@sections/about";
import ExperienceSection from "@sections/experience";
import ProjectsSection from "@sections/projects";
import Hero from "@sections/hero";

import Footer from "@layout/footer";

import TidbitBox from "@components/tidbit-box";

import {
  QUERIES,
  queryCMS,
  ExperienceType,
  ProjectDataType,
  ResumeType,
} from "@cms/index";

const Home = async () => {
  const topProjectsQuery = await queryCMS(QUERIES.TOP_PROJECTS_QUERY);
  const topProjects = topProjectsQuery.data as unknown as ProjectDataType[];

  const aboutBlurbQuery = await queryCMS(QUERIES.ABOUT_BLURB_QUERY);
  const aboutBlurb = aboutBlurbQuery.data as unknown as { body: any[] };

  const experienceQuery = await queryCMS(QUERIES.EXPERIENCE_QUERY);
  const experienceData = experienceQuery.data as unknown as ExperienceType[];

  const resumeDataQuery = await queryCMS(QUERIES.RESUME_QUERY);
  const resumeData = resumeDataQuery.data as unknown as ResumeType;

  return (
    <>
      <TidbitBox />
      <Hero />
      <AboutSection text={aboutBlurb.body} />
      <ProjectsSection topProjects={topProjects} />
      <ExperienceSection experiences={experienceData} />
      <Footer resumeData={resumeData} />
    </>
  );
};

export default Home;
