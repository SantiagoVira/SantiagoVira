"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import useWindowSize from "@/utils/use-window-size";

import PortableTextLayout from "@/utils/portable-text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExperienceType } from "@/utils/client";

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
      <Accordion type="multiple" className="max-w-[60rem] w-4/5 mb-32">
        {experiences.map((e, i) => (
          <ExperienceItem {...e} key={i} />
        ))}
      </Accordion>
    </>
  );
};

export default ExperienceSection;

const ExperienceItem: React.FC<ExperienceType> = ({
  title,
  position,
  time,
  body,
}) => {
  return (
    <AccordionItem value={title}>
      <AccordionTrigger className="text-2xl font-bold">
        {title}
      </AccordionTrigger>
      <AccordionContent className="text-lg">
        <p className="italic">{position}</p>
        <p className="font-thin mb-6">{time}</p>
        <div className="ml-4">
          <PortableTextLayout text={body} />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
