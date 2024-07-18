"use client";

import { useState } from "react";
import Tabs from "./tabs";
import ProjectList from "./project-list";
import { projectDataType } from "@/utils/client";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import UnderlineHover from "../underline-hover";

const Projects: React.FC<{
  topProjects: projectDataType[];
  archivedProjects: projectDataType[];
}> = ({ topProjects, archivedProjects }) => {
  const [tabIdx, setTabIdx] = useState(0);

  return (
    <>
      <div className="flex flex-col w-full justify-start items-center max-w-[60rem] gap-4">
        <h2 className="font-dunk text-6xl text-accent mb-5">TOP PROJECTS</h2>
        {/* <Tabs tabIdx={tabIdx} setTabIdx={setTabIdx} />
        {tabIdx === 1 ? (
          <p className="text-accent/80 text-xs text-left w-full">
            * Archived projects may no longer be maintained
          </p>
        ) : (
          <></>
        )} */}

        <ProjectList projects={[topProjects, archivedProjects][tabIdx]} />
      </div>
      <div className="w-screen mt-2">
        <Marquee autoFill={true} pauseOnClick>
          <div className="gap-2 mx-1 uppercase flex">
            <UnderlineHover>
              <Link href="/projects">View all projects</Link>
            </UnderlineHover>

            <span>•</span>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Projects;
