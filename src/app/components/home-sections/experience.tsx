"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

import { Accordion } from "@components/ui/accordion";
import ExperienceItem from "@components/experience-item";

import useWindowSize from "@utils/use-window-size";
import { ExperienceType } from "@/sanity-helpers";
import QuadraticBottom from "../quadratic-bottom";
import SectionHeader from "../ui/section-header";

const ExperienceSection: React.FC<{ experiences: ExperienceType[] }> = ({
  experiences,
}) => {
  // HOOK CALLS
  const { isDesktop } = useWindowSize();

  return (
    <>
      <div
        className="flex flex-col relative w-full justify-start items-center mt-20"
        id="experience">
        <div className="flex flex-col gap-16 relative w-full justify-start h-fit md:h-screen items-center py-24 ">
          <SectionHeader>EXPERIENCE</SectionHeader>
          <Accordion
            type="multiple"
            className="md:max-w-[60rem] md:w-4/5 w-full mb-32 px-12 md:px-0 text-accent ">
            {experiences.map((e, i) => (
              <ExperienceItem {...e} key={i} />
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default ExperienceSection;
