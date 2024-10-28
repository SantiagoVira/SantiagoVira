"use client";

import Image from "next/image";

import QuadraticBottom from "@components/quadratic-bottom";
import PortableTextLayout from "@utils/portable-text";
import { FileType } from "@/sanity-helpers";
import useWindowSize from "@/utils/use-window-size";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import SectionHeader from "../ui/section-header";

const AboutSection: React.FC<{ text: any[]; portraitData: FileType }> = ({
  text,
  portraitData,
}) => {
  const { isDesktop, windowSize } = useWindowSize();
  const parent = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: parent,
    offset: ["start end", "end end"],
  });
  const topSlidingText = useRef<SVGTextPathElement>(null);
  const topTextPath = useRef<SVGPathElement>(null);
  const bottomSlidingText = useRef<SVGTextPathElement>(null);
  const bottomTextPath = useRef<SVGPathElement>(null);

  useEffect(() => {
    scrollYProgress.on("change", (v) => {
      const topVal = -50 + 150 * v;
      const bottomVal = 46 / 821 + topVal;
      topSlidingText.current?.setAttribute("startOffset", `${topVal}%`);
      bottomSlidingText.current?.setAttribute("startOffset", `${bottomVal}%`);
    });
  }, [scrollYProgress, windowSize]);

  return (
    <div
      className="flex flex-col relative w-full justify-start items-center"
      id="about">
      <div className="border-t-[8vh] border-t-transparent border-l-[50vw] border-l-transparent border-r-[50vw] border-accent border-b-[8vh] w-0 h-0" />
      <div
        className="flex flex-col relative w-full justify-start h-fit md:h-screen items-center"
        ref={parent}>
        <div className="h-full w-full flex flex-col items-center gap-20 justify-start py-24 bg-accent">
          <div className="flex flex-col text-background text-lg md:text-xl gap-2 max-w-[60rem] mx-12">
            <SectionHeader variant="dark">ABOUT</SectionHeader>
            {/* <PortableTextLayout text={text} /> */}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 546 138"
            className="overflow-visible w-full"
            fill="none">
            <text>
              <textPath
                ref={topSlidingText}
                href="#topCurve"
                className="fill-background text-xs"
                startOffset={"-50%"}>
                I&apos;m designing a new way forward
              </textPath>
              <textPath
                ref={bottomSlidingText}
                href="#bottomCurve"
                className="fill-background text-xs"
                startOffset={"-50%"}>
                and I hope you&apos;ll join me.
              </textPath>
            </text>
            <path
              className="w-full"
              ref={topTextPath}
              id="topCurve"
              d="M1.00034 110.5C1.00034 110.5 96.5 97.5459 96.5 51.5C96.5 22.0001 73.8902 0.651084 46.0002 0.499988C18.5158 0.351089 1.0001 22 1.00024 48.5C1.0005 94.9482 56.0521 110.5 102.5 110.5C207.5 110.5 477.501 110.5 477.501 110.5"
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              ref={bottomTextPath}
              id="bottomCurve"
              d="M 22.5,137.001 L 69.0001,137.001 C 69.0001,137.001 164.5,124.047 164.5,78.0008 C 164.5,48.5009 141.89,27.1519 114.0,27.0008 C 86.5156,26.8519 68.9999,48.5008 69.0,75.0008 C 69.0003,121.449 124.052,137.001 170.5,137.001 C 275.5,137.001 545.5,137.001 545.5,137.001"
            />
          </svg>
          <div className="h-[20rem] w-full"></div>
          {/* {false && (
            <div className="min-w-[30vw] w-full h-[80vh] relative rounded-lg overflow-hidden">
              <Image
                className="object-cover"
                fill
                src={portraitData.link}
                alt="image"
              />
            </div>
          )} */}
        </div>
      </div>
      {isDesktop && <QuadraticBottom />}
    </div>
  );
};

export default AboutSection;
