"use client";

import { useState } from "react";
import Project from "./project";

const Projects: React.FC = () => {
  const projects = [
    [2, 2],
    [1, 2],
    [1, 1],
    [1, 1],
    [1, 1],
  ];
  const [hoverIdx, setHoverIdx] = useState(-1);
  return (
    <div className={`flex flex-col relative w-full justify-start items-center`}>
      <h2 className="font-dunk text-6xl text-accent mb-5">PROJECTS</h2>
      <div
        className="grid grid-cols-3 grid-rows-3 w-full h-[45rem] max-w-[60rem] gap-4"
        onMouseLeave={() => setHoverIdx(-1)}>
        {projects.map((project, i) => (
          <Project
            setHoverIdx={setHoverIdx}
            cols={project[0]}
            rows={project[1]}
            idx={i}
            faded={hoverIdx !== -1 && hoverIdx !== i}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
