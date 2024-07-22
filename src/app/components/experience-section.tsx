"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const ExperienceSection: React.FC<{ text: any[] }> = ({ text }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  const xPercent = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const x = useTransform(xPercent, (p) => `${p}%`);

  return (
    <div ref={container} className="h-[300vh] relative w-full">
      <div className="sticky overflow-hidden top-0 h-screen">
        <motion.div
          style={{ x }}
          className="w-fit h-full absolute top-0 flex items-center justify-start pl-10">
          <p className="text-[30rem]">EXPERIENCE</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceSection;
