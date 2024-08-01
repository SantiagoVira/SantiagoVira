"use client";

import Image from "next/image";

import QuadraticBottom from "@components/quadratic-bottom";
import PortableTextLayout from "@utils/portable-text";
import { FileType } from "@/sanity-helpers";
import useWindowSize from "@/utils/use-window-size";

const AboutSection: React.FC<{ text: any[]; portraitData: FileType }> = ({
  text,
  portraitData,
}) => {
  const { isDesktop } = useWindowSize();
  return (
    <div
      className="flex flex-col relative w-full justify-start items-center"
      id="about">
      <div className="border-t-[8vh] border-t-transparent border-l-[50vw] border-l-transparent border-r-[50vw] border-accent border-b-[8vh] w-0 h-0" />
      <div className="flex flex-col relative w-full justify-start h-fit md:h-screen items-center">
        <div className="h-full w-full flex items-start gap-20 justify-between py-24 px-12 bg-accent">
          <div className="flex flex-col text-background text-lg md:text-xl gap-2">
            <h2 className="font-dunk text-4xl md:text-6xl">ABOUT</h2>
            <PortableTextLayout text={text} />
          </div>
          {isDesktop && (
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
    </div>
  );
};

export default AboutSection;
