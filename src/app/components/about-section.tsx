"use client";

import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Bread1 from "@/images/bread1.jpeg";
import Bread2 from "@/images/bread2.jpeg";
import Bread3 from "@/images/bread3.jpeg";
import QuadraticBottom from "./quadratic-bottom";

const About: React.FC = () => {
  const container = useRef(null);

  const images = [Bread1, Bread2, Bread3];
  const [imageIdx, setImageIdx] = useState(0);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });
  const scaled = useTransform(scrollYProgress, [0, 1], [0, 2.99999]);

  useMotionValueEvent(scaled, "change", (latest) => {
    setImageIdx(Math.floor(latest));
  });

  return (
    <div className="flex flex-col relative w-full justify-start items-center">
      <div className="border-t-[8vh] border-t-transparent border-l-[50vw] border-l-transparent border-r-[50vw] border-accent border-b-[8vh] w-0 h-0" />
      <div
        className="flex flex-col relative w-full justify-start h-[300vh] items-center"
        ref={container}>
        <div className="h-screen sticky top-0 w-full flex items-start justify-between p-24 bg-accent">
          <div className="flex flex-col">
            <h2 className="font-dunk text-6xl text-background">ABOUT</h2>
          </div>

          <Image
            className="w-[30vw] h-[80vh] object-cover"
            src={images[imageIdx]}
            alt="image"
          />
        </div>
      </div>
      <QuadraticBottom />
    </div>
  );
};

export default About;
