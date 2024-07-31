"use client";

import Image from "next/image";

import QuadraticBottom from "@components/quadratic-bottom";
import PortableTextLayout from "@utils/portable-text";
import { FileType } from "@/sanity-helpers";

const AboutSection: React.FC<{ text: any[]; portraitData: FileType }> = ({
  text,
  portraitData,
}) => {
  return (
    <div
      className="flex flex-col relative w-full justify-start items-center"
      id="about">
      <div className="border-t-[8vh] border-t-transparent border-l-[50vw] border-l-transparent border-r-[50vw] border-accent border-b-[8vh] w-0 h-0" />
      <div className="flex flex-col relative w-full justify-start h-screen items-center">
        <div className="h-screen sticky top-0 w-full flex items-start gap-20 justify-between p-24 bg-accent">
          <div className="flex flex-col text-background text-xl gap-2">
            <h2 className="font-dunk text-6xl">ABOUT</h2>
            <PortableTextLayout text={text} />
          </div>
          <div className="min-w-[30vw] w-full h-[80vh] relative rounded-lg overflow-hidden">
            <Image
              className="object-cover"
              fill
              src={portraitData.link}
              alt="image"
            />
          </div>
        </div>
      </div>
      <QuadraticBottom />
    </div>
  );
};

export default AboutSection;
