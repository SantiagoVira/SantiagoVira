"use client";

import QuadraticBottom from "@components/quadratic-bottom";
import PortableTextLayout from "@utils/portable-text";
import { FileType } from "@/sanity-helpers";
import useWindowSize from "@/utils/use-window-size";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import SectionHeader from "../ui/section-header";

const AboutSection: React.FC<{ text: any[]; portraitData: FileType }> = ({
  text,
  portraitData,
}) => {
  // STATE, REFS & EFFECTS
  const [scrollRange, setScrollRange] = useState(0);
  const [descWidth, setDescWidth] = useState(0);
  const container = useRef<HTMLDivElement>(null);
  const titleContent = useRef<HTMLDivElement>(null);
  const descContent = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    titleContent.current?.scrollWidth &&
      setScrollRange(titleContent.current.scrollWidth);

    descContent.current?.scrollWidth &&
      setDescWidth(descContent.current.scrollWidth);
  }, [titleContent, descContent]);

  // HOOK CALLS
  const {
    windowSize: { width: viewportWidth },
  } = useWindowSize();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // FRAMER MOTION
  const useMoveElement = (
    startCoefficient: number,
    endCoefficient: number,
    startOffset: number = 0,
    endOffset: number = 0
  ) => {
    const transform = useTransform(
      scrollYProgress,
      [0, 1],
      [
        startOffset + startCoefficient * (viewportWidth ?? 0),
        endOffset + endCoefficient * (viewportWidth ?? 0),
      ]
    );

    const physics = { damping: 15, mass: 0.27, stiffness: 55 };
    return useSpring(transform, physics);
  };
  const useRotateElement = (startVal: number, endVal: number) => {
    const physics = { damping: 15, mass: 0.27, stiffness: 55 };
    return useSpring(
      useTransform(
        useTransform(scrollYProgress, [0, 1], [startVal, endVal]),
        (v) => `${v}deg`
      ),
      physics
    );
  };

  const titleTransform = useMoveElement(1, 0, -scrollRange);
  const descTransform = useMoveElement(
    1,
    0,
    10,
    (viewportWidth ?? 0) - descWidth - 100
  );
  const img1Transform = useMoveElement(0.8, 0);
  const img1Rotation = useRotateElement(6, -3);
  const img2Transform = useMoveElement(1.2, -1.5);
  const img2Rotation = useRotateElement(-16, 6);
  const img3Transform = useMoveElement(2, -1);
  const img4Transform = useMoveElement(1.5, 0.4);
  const img5Transform = useMoveElement(2, 0.2);

  return (
    <>
      <div ref={container} className="h-[200vh] relative w-full" id="about">
        <div className="sticky overflow-hidden top-0 h-screen">
          <motion.div
            style={{ x: titleTransform }}
            ref={titleContent}
            className="w-fit h-full absolute top-0 flex items-center justify-start">
            <SectionHeader variant="light">ABOUT ME</SectionHeader>
          </motion.div>
          <motion.img
            className="object-cover w-48 absolute top-[15%] -z-10 rounded-lg"
            style={{ x: img1Transform, rotate: img1Rotation }}
            src={portraitData.link}
            alt="Me :)"
          />
          <motion.img
            className="object-cover w-80 absolute top-2/3 -z-10 rounded-lg"
            style={{ x: img2Transform, rotate: img2Rotation }}
            src={"/img/radish-mockup.jpg"}
            alt="image"
          />
          <motion.img
            className="object-cover w-64 absolute top-[60%] -z-10 rounded-lg"
            style={{ x: img3Transform, rotate: "0deg" }}
            src={"/img/tricktionary-mockup.jpg"}
            alt="image"
          />
          <motion.img
            className="object-cover w-64 absolute top-[75%] -z-10 rounded-lg"
            style={{ x: img4Transform, rotate: "-5deg" }}
            src={"/img/radial-grid-mockup.jpg"}
            alt="image"
          />
          <motion.img
            className="object-cover w-64 absolute top-[25%] -z-10 rounded-lg"
            style={{ x: img5Transform, rotate: "-5deg" }}
            src={"/img/drafty-mockup.jpg"}
            alt="image"
          />
          <motion.p
            className="absolute top-[55%] text-2xl max-w-fit whitespace-nowrap"
            ref={descContent}
            style={{ x: descTransform }}>
            I create elegant, modern designs for everyday use. My full stack
            development experience allows me to craft your ideas into reality. I
            hope you will join me for the journey.
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
