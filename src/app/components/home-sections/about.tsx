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
  useVelocity,
} from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import SectionHeader from "../ui/section-header";
import { useElementWidth } from "@/utils/use-element-width";
import CurveBox from "../curve-box";

const AboutSection: React.FC<{ text: any[]; portraitData: FileType }> = ({
  text,
  portraitData,
}) => {
  // STATE, REFS & EFFECTS
  const container = useRef<HTMLDivElement>(null);
  const title = useElementWidth<HTMLDivElement>();
  const desc1 = useElementWidth<HTMLDivElement>();
  const desc2 = useElementWidth<HTMLDivElement>();
  const desc3 = useElementWidth<HTMLDivElement>();
  const desc4 = useElementWidth<HTMLDivElement>();

  // HOOK CALLS
  const {
    windowSize: { width: viewportWidth },
  } = useWindowSize();
  const { scrollYProgress, scrollY } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
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

  const titleTransform = useMoveElement(1, 0.5, -title.width, -title.width / 2);
  const desc1Transform = useMoveElement(1, 0.5, 10, -0.5 * title.width);
  const desc2Transform = useMoveElement(2, 0.5, 10, -0.45 * title.width);
  const desc3Transform = useMoveElement(3, 0.5, 10, -0.45 * title.width);
  const desc4Transform = useMoveElement(
    4,
    0.5,
    10,
    0.5 * title.width - desc4.width
  );

  const img1Transform = useMoveElement(0.8, 0);
  const img2Transform = useMoveElement(1.2, 0.1);
  const img3Transform = useMoveElement(1.5, 0.8);
  const img4Transform = useMoveElement(1.5, 0.75);
  const img5Transform = useMoveElement(2, 0.4);
  const flopBoxTransform = useMoveElement(0.5, -1);

  const img1Rotation = useRotateElement(6, -3);
  const img2Rotation = useRotateElement(-16, 6);
  const img5Rotation = useRotateElement(5, -5);

  return (
    <>
      <div ref={container} className="h-[200vh] relative w-screen" id="about">
        <div className="sticky overflow-hidden top-0 h-screen">
          <motion.div
            style={{ x: titleTransform }}
            ref={title.ref}
            className="w-fit h-full absolute top-0 flex items-center justify-start">
            <SectionHeader variant="light">ABOUT ME</SectionHeader>
          </motion.div>
          <motion.img
            className="object-cover w-48 absolute top-[15%] -z-10 rounded-lg"
            style={{ x: img1Transform, rotate: img1Rotation }}
            src={portraitData.link}
            alt="Me :)"
          />
          <motion.div
            className="object-cover w-80 absolute top-2/3 z-50 rounded-lg"
            style={{ x: flopBoxTransform }}>
            <CurveBox progressOffset={smoothVelocity} />
          </motion.div>
          <motion.img
            className="object-cover w-80 absolute top-2/3 -z-10 rounded-lg"
            style={{ x: img2Transform, rotate: img2Rotation }}
            src={"/img/drafty-mockup.jpg"}
            alt="image"
          />
          <motion.img
            className="object-cover w-64 absolute top-[30%] -z-10 rounded-lg"
            style={{ x: img3Transform, rotate: "0deg" }}
            src={"/img/radish-mockup.jpg"}
            alt="image"
          />
          <motion.img
            className="object-cover w-64 absolute top-[75%] -z-10 rounded-lg"
            style={{ x: img4Transform, rotate: "-5deg" }}
            src={"/img/radial-grid-mockup.jpg"}
            alt="image"
          />
          <motion.img
            className="object-cover w-64 absolute top-[15%] -z-10 rounded-lg"
            style={{ x: img5Transform, rotate: img5Rotation }}
            src={"/img/tricktionary-mockup.jpg"}
            alt="image"
          />
          <motion.p
            className="absolute top-[55%] max-w-fit whitespace-nowrap"
            ref={desc1.ref}
            style={{ x: desc1Transform }}>
            I create elegant, modern designs for everyday use.
          </motion.p>
          <motion.p
            className="absolute top-[calc(55%+20px)] max-w-fit whitespace-nowrap"
            ref={desc2.ref}
            style={{ x: desc2Transform }}>
            My full stack development experience allows me
          </motion.p>
          <motion.p
            className="absolute top-[calc(55%+40px)] max-w-fit whitespace-nowrap"
            ref={desc3.ref}
            style={{ x: desc3Transform }}>
            to craft your ideas into reality.
          </motion.p>
          <motion.p
            className="absolute top-[calc(55%+80px)] max-w-fit whitespace-nowrap"
            ref={desc4.ref}
            style={{ x: desc4Transform }}>
            I hope you will join me for the journey.
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
