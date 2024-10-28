"use client";

import Marquee from "react-fast-marquee";

import ProjectList from "@components/project-list";
import UnderlineHover from "@components/ui/underline-hover";
import { ProjectDataType } from "@/sanity-helpers";
import TransitionLink from "../ui/transition-link";
import SectionHeader from "../ui/section-header";

const ProjectsSection: React.FC<{
  topProjects: ProjectDataType[];
}> = ({ topProjects }) => {
  return (
    <>
      <div
        className="flex flex-col w-full justify-start items-center max-w-[60rem] gap-4 pt-10"
        id="projects">
        <div className="w-screen px-12 mb-5">
          <SectionHeader className="font-dunk text-4xl md:text-6xl text-accent text-center">
            TOP PROJECTS
          </SectionHeader>
        </div>

        <ProjectList projects={topProjects} />
      </div>
      <div className="w-screen mt-2 max-w-[60rem] px-12">
        <Marquee autoFill={true} pauseOnClick>
          <div className="gap-2 mx-1 uppercase flex">
            <UnderlineHover>
              <TransitionLink href="/projects">
                View all projects
              </TransitionLink>
            </UnderlineHover>

            <span>•</span>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default ProjectsSection;
