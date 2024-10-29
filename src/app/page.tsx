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
  FileType,
  TextType,
} from "@/sanity-helpers";

const Home = async () => {
  const topProjects = await queryCMS<ProjectDataType[]>(
    QUERIES.TOP_PROJECTS_QUERY
  );
  const aboutBlurb = await queryCMS<TextType>(QUERIES.ABOUT_BLURB_QUERY);
  const experienceData = await queryCMS<ExperienceType[]>(
    QUERIES.EXPERIENCE_QUERY
  );
  const resumeData = await queryCMS<FileType>(QUERIES.RESUME_QUERY);
  const portraitData = await queryCMS<FileType>(QUERIES.PORTRAIT_QUERY);

  return (
    <>
      <TidbitBox />
      <Hero />
      <AboutSection text={aboutBlurb.body} portraitData={portraitData} />
      <ProjectsSection topProjects={topProjects} />
      {/* <ExperienceSection experiences={experienceData} /> */}
      <Footer resumeData={resumeData} />
    </>
  );
};

export default Home;
