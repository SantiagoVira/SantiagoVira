"use client";

import { useState } from "react";
import Tabs from "./tabs";
import ProjectList from "./project-list";
import { projectDataType } from "@/utils/client";

const Projects: React.FC<{
  topProjects: projectDataType[];
  archivedProjects: projectDataType[];
}> = ({ topProjects, archivedProjects }) => {
  const [tabIdx, setTabIdx] = useState(0);

  return (
    <div className="flex flex-col w-full justify-start items-center max-w-[60rem] gap-4">
      <h2 className="font-dunk text-6xl text-accent mb-5">PROJECTS</h2>
      <Tabs tabIdx={tabIdx} setTabIdx={setTabIdx} />

      <ProjectList
        projects={[topProjects, archivedProjects, archivedProjects][tabIdx]}
      />
    </div>
  );
};

export default Projects;
