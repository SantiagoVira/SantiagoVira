"use client";

import Link from "next/link";

import UnderlineHover from "@components/ui/underline-hover";
import { ProjectDataType } from "@/sanity-helpers";
import useWindowSize from "@/utils/use-window-size";

const Project: React.FC<ProjectDataType> = ({
  year,
  title,
  description,
  category,
  codeLink,
  caseStudyLink,
  link,
}) => {
  const { isDesktop } = useWindowSize();
  return (
    <div
      className={`md:p-2 py-6 flex  items-start peer justify-between gap-24 rounded-lg w-full h-full transition-all duration-[400ms] group-hover:opacity-40 group-hover:hover:opacity-100 `}>
      {isDesktop && <p className="text-accent/60 font-bold">{year}</p>}
      <div className="flex items-start justify-start flex-col flex-1 gap-1">
        <Link
          href={link ?? "/"}
          className={`text-accent w-full ${
            link ? "cursor-ne-resize" : "cursor-default pointer-events-none"
          } mt-2 inline-block`}
          target="_blank"
          aria-disabled={!link}>
          <div className="flex items-start justify-start flex-col flex-1 gap-1 group/box">
            <p className="text-accent/80 text-xs">{category}</p>
            <UnderlineHover disabled={!link}>
              <h3 className="font-bold text-2xl text-accent">{title}</h3>
            </UnderlineHover>

            <p className="text-accent/75">{description}</p>
          </div>
        </Link>
        <div className="flex items-center gap-[0.33rem]">
          {codeLink ? (
            <UnderlineHover thin>
              <Link
                href={codeLink}
                className="text-accent mt-2 inline-block"
                target="_blank">
                View Code
              </Link>
            </UnderlineHover>
          ) : (
            <></>
          )}
          {codeLink && caseStudyLink ? <p className="mt-2">•</p> : <></>}
          {caseStudyLink ? (
            <UnderlineHover thin>
              <Link
                href={caseStudyLink}
                className="text-accent mt-2 inline-block"
                target="_blank">
                See Case Study
              </Link>
            </UnderlineHover>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
