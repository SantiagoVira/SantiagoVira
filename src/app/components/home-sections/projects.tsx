"use client";

import Marquee from "react-fast-marquee";

import ProjectList from "@components/project-list";
import UnderlineHover from "@components/ui/underline-hover";
import { ProjectDataType } from "@/sanity-helpers";
import TransitionLink from "../ui/transition-link";
import SectionHeader from "../ui/section-header";
import useWindowSize from "@/utils/use-window-size";
import QuadraticBottom from "../quadratic-bottom";

const ProjectsSection: React.FC<{
  topProjects: ProjectDataType[];
}> = ({ topProjects }) => {
  const { isDesktop } = useWindowSize();
  return (
    <>
      {/* <div className="border-t-[8vh] mt-20 border-t-transparent border-l-[50vw] border-l-transparent border-r-[50vw] border-accent border-b-[8vh] w-0 h-0" /> */}
      <div className="w-full pb-16 flex flex-col items-center">
        <div
          className="flex flex-col w-full justify-start items-center max-w-[60rem] gap-4 pt-10"
          id="projects">
          <div className="px-12 mb-5">
            <SectionHeader className="font-dunk text-4xl md:text-6xl text-accent text-center">
              TOP PROJECTS
            </SectionHeader>
          </div>

          <ProjectList projects={topProjects} colorVariant="dark-bg" />
        </div>
        <div className="w-screen mt-2 max-w-[60rem] px-12 py-10">
          <Marquee autoFill={true} pauseOnClick>
            <div className="gap-2 mx-1 uppercase flex text-accent">
              <UnderlineHover color="light">
                <TransitionLink href="/projects">
                  View all projects
                </TransitionLink>
              </UnderlineHover>

              <span>•</span>
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;
