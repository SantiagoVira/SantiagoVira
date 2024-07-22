"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import useWindowSize from "@/utils/use-window-size";

const ExperienceSection: React.FC<{ text: any[] }> = ({ text }) => {
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
      <div ref={container} className="h-[300vh] relative w-full">
        <div className="sticky overflow-hidden top-0 h-screen">
          <motion.div
            style={{ x: spring }}
            ref={content}
            className="w-fit h-full absolute top-0 flex items-center justify-start">
            <p className="text-[30rem] font-black mx-10">EXPERIENCE</p>
          </motion.div>
        </div>
      </div>
      <p>
        Occaecat quis fugiat eiusmod qui. Dolor excepteur eiusmod dolore dolor
        voluptate culpa. Adipisicing reprehenderit occaecat exercitation dolore
        dolore est labore in nulla laborum eiusmod commodo. Adipisicing do est
        quis quis irure qui labore consequat labore. Duis quis laboris sint
        Lorem est aliquip velit laborum non sit pariatur duis minim nulla.
        Voluptate ad consequat commodo id non deserunt.
      </p>
    </>
  );
};

export default ExperienceSection;
