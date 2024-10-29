"use client";

import { Accordion } from "@components/ui/accordion";
import ExperienceItem from "@components/experience-item";

import useWindowSize from "@utils/use-window-size";
import { ExperienceType } from "@/sanity-helpers";
import SectionHeader from "../ui/section-header";

const ExperienceSection: React.FC<{ experiences: ExperienceType[] }> = ({
  experiences,
}) => {
  // HOOK CALLS
  const { isDesktop } = useWindowSize();

  return (
    <>
      <div
        className="flex flex-col relative gap-16 w-full justify-start items-center h-fit md:h-screen py-12"
        id="experience">
        <SectionHeader>EXPERIENCE</SectionHeader>
        <Accordion
          type="multiple"
          className="md:max-w-[60rem] md:w-4/5 w-full px-12 md:px-0 text-accent ">
          {experiences.map((e, i) => (
            <ExperienceItem {...e} key={i} />
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default ExperienceSection;
