"use client";

import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import Bread1 from "@/images/bread1.jpeg";
import Bread2 from "@/images/bread2.jpeg";
import Bread3 from "@/images/bread3.jpeg";
import QuadraticBottom from "./quadratic-bottom";
import PortableTextLayout from "@/utils/portable-text";

const About: React.FC<{ text: any[] }> = ({ text }) => {
  const container = useRef(null);

  const images = [Bread1, Bread2, Bread3];
  const [imageIdx, setImageIdx] = useState(0);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });
  const scrollBar = useTransform(
    scrollYProgress,
    (latest) => `${latest * 100}%`
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setImageIdx(Math.floor(latest));
  });

  return (
    <div className="flex flex-col relative w-full justify-start items-center">
      <div className="border-t-[8vh] border-t-transparent border-l-[50vw] border-l-transparent border-r-[50vw] border-accent border-b-[8vh] w-0 h-0" />
      <div
        className="flex flex-col relative w-full justify-start h-[150vh] items-center"
        ref={container}>
        <div className="h-screen sticky top-0 w-full flex items-start gap-20 justify-between p-24 bg-accent">
          <div className="flex flex-col text-background text-xl gap-2">
            <h2 className="font-dunk text-6xl">ABOUT</h2>
            <PortableTextLayout text={text} />
          </div>

          <div className="flex gap-4">
            <Image
              className="min-w-[30vw] h-[80vh] object-cover"
              src={images[imageIdx]}
              alt="image"
            />{" "}
            <div className="bg-background/20 h-[80vh] flex flex-col justify-start rounded-full !w-[4px]">
              <motion.div
                className="!w-[4px] bg-background rounded-full"
                style={{ height: scrollBar }}
              />
            </div>
          </div>
        </div>
      </div>
      <QuadraticBottom />
    </div>
  );
};

export default About;
