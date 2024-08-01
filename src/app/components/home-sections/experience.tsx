"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

import { Accordion } from "@components/ui/accordion";
import ExperienceItem from "@components/experience-item";

import useWindowSize from "@utils/use-window-size";
import { ExperienceType } from "@/sanity-helpers";

const ExperienceSection: React.FC<{ experiences: ExperienceType[] }> = ({
  experiences,
}) => {
  // STATE, REFS & EFFECTS
  const [scrollRange, setScrollRange] = useState(0);
  const container = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    content.current?.scrollWidth && setScrollRange(content.current.scrollWidth);
  }, [content]);

  // HOOK CALLS
  const {
    windowSize: { width: viewportWidth },
  } = useWindowSize();

  // FRAMER MOTION
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + (viewportWidth ?? 0)]
  );

  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <>
      <div
        ref={container}
        className="h-[300vh] relative w-full"
        id="experience">
        <div className="sticky overflow-hidden top-0 h-screen">
          <motion.div
            style={{ x: spring }}
            ref={content}
            className="w-fit h-full absolute top-0 flex items-center justify-start">
            <p className="text-[30rem] font-black mx-10">EXPERIENCE</p>
          </motion.div>
        </div>
      </div>
      <Accordion
        type="multiple"
        className="md:max-w-[60rem] md:w-4/5 w-full mb-32 px-12 md:px-0">
        {experiences.map((e, i) => (
          <ExperienceItem {...e} key={i} />
        ))}
      </Accordion>
    </>
  );
};

export default ExperienceSection;
