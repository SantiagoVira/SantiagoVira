"use client";

import { useState } from "react";
import Project from "./project";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState(["A", "B", "C"]);
  const [hoverIdx, setHoverIdx] = useState(-1);
  const [tabIdx, setTabIdx] = useState(0);

  const tabs = ["Top Projects", "Design Work", "Project Archive"];
  return (
    <div
      className="flex flex-col w-full justify-start items-center max-w-[60rem] gap-4"
      onMouseLeave={() => setHoverIdx(-1)}>
      <h2 className="font-dunk text-6xl text-accent mb-5">PROJECTS</h2>
      <div className="flex w-full">
        {tabs.map((tab, i) => (
          <Tab
            active={tabIdx === i}
            onClick={() => {
              setTabIdx(i);

              setProjects([]);
              setTimeout(() => setProjects(["B", "B", "C"]), 100);
              console.log(projects);
            }}
            key={i}>
            {tab}
          </Tab>
        ))}
      </div>
      {projects.map((project, i) => (
        <>
          <Project
            setHoverIdx={setHoverIdx}
            idx={i}
            faded={hoverIdx !== -1 && hoverIdx !== i}
            key={i}
          />
          <hr className=" border-accent" />
        </>
      ))}
    </div>
  );
};

export default Projects;

const Tab: React.FC<
  React.PropsWithChildren<{
    onClick: () => void;
    active?: boolean;
  }>
> = ({ onClick, active = false, children }) => (
  <div
    className={`flex flex-1 items-center justify-center transition-all pt-6 hover:pt-4 group border-b   ${
      active ? "border-accent" : "border-accent/30 hover:border-accent/65"
    }`}
    onClick={onClick}>
    <p
      className={`transition-all  pb-1 ${
        active ? "text-accent" : "text-accent/30 group-hover:text-accent/65"
      }`}>
      {children}
    </p>
  </div>
);
