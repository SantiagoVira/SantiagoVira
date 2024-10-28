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

import Bread1 from "@images/bread1.jpeg";
import Bread2 from "@images/bread2.jpeg";
import Bread3 from "@images/bread3.jpeg";

const AboutSection: React.FC<{ text: any[]; portraitData: FileType }> = ({
  text,
  portraitData,
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
    isDesktop,
    windowSize: { width: viewportWidth },
  } = useWindowSize();

  // FRAMER MOTION
  const useMoveElement = (
    startCoefficient: number,
    endCoefficient: number,
    startOffset: number = 0
  ) => {
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start start", "end end"],
    });

    const transform = useTransform(
      scrollYProgress,
      [0, 1],
      [
        startOffset + startCoefficient * (viewportWidth ?? 0),
        endCoefficient * (viewportWidth ?? 0),
      ]
    );

    const physics = { damping: 15, mass: 0.27, stiffness: 55 };
    return useSpring(transform, physics);
  };

  const titleTransform = useMoveElement(1, 0, -scrollRange);
  const descTransform = useMoveElement(1, -0.5);
  const img1Transform = useMoveElement(0.8, 0);
  const img2Transform = useMoveElement(1.2, -1.5);
  const img3Transform = useMoveElement(2, -1);
  const img4Transform = useMoveElement(2, 0.4);

  return (
    <>
      <div
        ref={container}
        className="h-[300vh] relative w-full"
        id="experience">
        <div className="sticky overflow-hidden top-0 h-screen">
          <motion.div
            style={{ x: titleTransform }}
            ref={content}
            className="w-fit h-full absolute top-0 flex items-center justify-start">
            <SectionHeader variant="light">ABOUT ME</SectionHeader>
          </motion.div>
          <motion.img
            className="object-cover w-48 absolute top-[15%] -z-10 rounded-lg"
            style={{ x: img1Transform, rotate: "6deg" }}
            src={portraitData.link}
            alt="Me :)"
          />
          <motion.img
            className="object-cover w-32 absolute top-2/3 -z-10 rounded-lg"
            style={{ x: img2Transform, rotate: "-22deg" }}
            src={"/img/bread1.jpeg"}
            alt="image"
          />
          <motion.img
            className="object-cover w-32 absolute top-2/3 -z-10 rounded-lg"
            style={{ x: img3Transform, rotate: "0deg" }}
            src={"/img/bread2.jpeg"}
            alt="image"
          />
          <motion.img
            className="object-cover w-32 absolute top-2/3 -z-10 rounded-lg"
            style={{ x: img4Transform, rotate: "-5deg" }}
            src={"/img/bread3.jpeg"}
            alt="image"
          />
          <motion.p
            className="absolute top-[55%] font-medium text-lg max-w-fit whitespace-nowrap"
            style={{ x: descTransform }}>
            I create elegant, modern designs for everyday use. My full stack
            development experience allows me to craft your ideas into reality. I
            hope you will join me for the journey.
          </motion.p>
        </div>
      </div>
      {/* <div
        className="flex flex-col relative w-full justify-start items-center"
        id="about">
        <div className="border-t-[8vh] border-t-transparent border-l-[50vw] border-l-transparent border-r-[50vw] border-accent border-b-[8vh] w-0 h-0" />
        <div className="flex flex-col relative w-full justify-start h-fit md:h-screen items-center">
          <div className="h-full w-full flex flex-col items-center gap-20 justify-start py-24 bg-accent">
            <div className="flex flex-col text-background text-lg md:text-xl gap-2 max-w-[60rem] mx-12">
              <SectionHeader variant="dark">ABOUT</SectionHeader>
              <PortableTextLayout text={text} />
            </div>

            <div className="h-[20rem] w-full"></div>
             {false && (
            <div className="min-w-[30vw] w-full h-[80vh] relative rounded-lg overflow-hidden">
              <Image
                className="object-cover"
                fill
                src={portraitData.link}
                alt="image"
              />
            </div>
          )}
          </div>
        </div>
        {isDesktop && <QuadraticBottom />}
      </div> */}
    </>
  );
};

export default AboutSection;
