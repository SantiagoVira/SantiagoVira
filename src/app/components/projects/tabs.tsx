"use client";

import { useMotionValue, motion } from "framer-motion";
import { Tab } from "../tab";
import { useState } from "react";

const tabs = ["Top Projects", "Design Work", "Project Archive"];

const Tabs: React.FC = () => {
  const [tabIdx, setTabIdx] = useState(0);

  const tabHighlightIdx = useMotionValue(0);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <>
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
    </>
  );
};

export default Tabs;
