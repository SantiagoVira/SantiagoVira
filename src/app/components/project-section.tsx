"use client";

import { useState, Fragment } from "react";
import Project from "./project";
import { useMotionValue, motion } from "framer-motion";
import { Tab } from "./tab";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState(["A", "B", "C"]);
  const [hoverIdx, setHoverIdx] = useState(-1);
  const [tabIdx, setTabIdx] = useState(0);

  const tabs = ["Top Projects", "Design Work", "Project Archive"];
  const tabHighlightIdx = useMotionValue(0);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className="flex flex-col w-full justify-start items-center max-w-[60rem] gap-4">
      <h2 className="font-dunk text-6xl text-accent mb-5">PROJECTS</h2>
      <div className="flex w-full">
        {tabs.map((tab, i) => (
          <Tab
            active={tabIdx === i}
            onClick={() => {
              setTabIdx(i);
              tabHighlightIdx.set(i);
            }}
            key={i}>
            {tab}
          </Tab>
        ))}
      </div>
      <div
        className="w-full rounded-full flex -mt-4"
        style={{
          justifyContent:
            tabHighlightIdx.get() === 0
              ? "flex-start"
              : tabHighlightIdx.get() === 1
              ? "center"
              : "flex-end",
        }}>
        <motion.div
          className="w-1/3 h-[1px] rounded-full bg-accent"
          layout
          transition={spring}
        />
      </div>
      <div
        className="flex flex-col items-center w-full justify-start"
        onMouseLeave={() => setHoverIdx(-1)}>
        {projects.map((project, i) => (
          <Fragment key={i}>
            <Project
              setHoverIdx={setHoverIdx}
              idx={i}
              faded={hoverIdx !== -1 && hoverIdx !== i}
            />
            {i < projects.length - 1 ? (
              <hr className="w-full border-accent/60" />
            ) : (
              <></>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Projects;
