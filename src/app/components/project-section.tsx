"use client";

import { useState } from "react";
import Project from "./project";

const Projects: React.FC = () => {
  const projects = ["a", "b", "c"];
  const [hoverIdx, setHoverIdx] = useState(-1);
  return (
    <div className={`flex flex-col relative w-full justify-start items-center`}>
      <h2 className="font-dunk text-6xl text-accent mb-5">PROJECTS</h2>
      <div
        className="flex flex-col w-full h-[105vh] max-w-[50rem] justify-start items-center gap-2"
        onMouseLeave={() => setHoverIdx(-1)}>
        <hr className="w-full border-white" />
        {projects.map((project, i) => (
          <>
            <Project
              faded={hoverIdx !== -1 && hoverIdx !== i}
              setHoverIdx={setHoverIdx}
              idx={i}
              key={i}
            />
            {/* <hr className="w-full border-white" /> */}
          </>
        ))}
      </div>
    </div>
  );
};

export default Projects;
