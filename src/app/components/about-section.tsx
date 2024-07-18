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
import QuadraticBottom from "./quadratic-bottom";
import PortableTextLayout from "@/utils/portable-text";

const About: React.FC<{ text: any[] }> = ({ text }) => {
  return (
    <div className="flex flex-col relative w-full justify-start items-center">
      <div className="border-t-[8vh] border-t-transparent border-l-[50vw] border-l-transparent border-r-[50vw] border-accent border-b-[8vh] w-0 h-0" />
      <div className="flex flex-col relative w-full justify-start h-screen items-center">
        <div className="h-screen sticky top-0 w-full flex items-start gap-20 justify-between p-24 bg-accent">
          <div className="flex flex-col text-background text-xl gap-2">
            <h2 className="font-dunk text-6xl">ABOUT</h2>
            <PortableTextLayout text={text} />
          </div>
          <Image
            className="min-w-[30vw] h-[80vh] object-cover"
            src={Bread1}
            alt="image"
          />{" "}
        </div>
      </div>
      <QuadraticBottom />
    </div>
  );
};

export default About;
