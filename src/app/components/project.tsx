"use client";

import Link from "next/link";

import UnderlineHover from "@components/ui/underline-hover";
import { ProjectDataType } from "@/sanity-helpers";
import useWindowSize from "@/utils/use-window-size";
import { cn } from "@/utils/cn";

interface ProjectProps extends ProjectDataType {
  colorVariant?: "light-bg" | "dark-bg";
}

const Project: React.FC<ProjectProps> = ({
  year,
  title,
  description,
  category,
  codeLink,
  caseStudyLink,
  link,
  colorVariant = "light-bg",
}) => {
  const { isDesktop } = useWindowSize();
  return (
    <div
      className={`py-6 flex  items-start peer justify-between gap-24 rounded-lg w-full h-full transition-all duration-300 group-hover:opacity-40 group-hover:hover:opacity-100 `}>
      {isDesktop && (
        <p
          className={cn(
            colorVariant === "light-bg"
              ? "text-background/60"
              : "text-accent/60",
            "font-bold"
          )}>
          {year}
        </p>
      )}
      <div className="flex items-start justify-start flex-col flex-1 gap-1">
        <Link
          href={link ?? "/"}
          className={cn(
            "w-full mt-2 inline-block",
            colorVariant === "light-bg" ? "text-background" : "text-accent",
            link ? "cursor-ne-resize" : "cursor-default pointer-events-none"
          )}
          target="_blank"
          aria-disabled={!link}>
          <div className="flex items-start justify-start flex-col flex-1 gap-1 group/box">
            <p
              className={cn(
                colorVariant === "light-bg"
                  ? "text-background/80"
                  : "text-accent/80",
                "text-xs"
              )}>
              {category}
            </p>
            <UnderlineHover
              disabled={!link}
              color={colorVariant === "light-bg" ? "dark" : "light"}>
              <h3
                className={cn(
                  colorVariant === "light-bg"
                    ? "text-background"
                    : "text-accent",
                  "font-bold text-2xl"
                )}>
                {title}
              </h3>
            </UnderlineHover>

            <p
              className={cn(
                colorVariant === "light-bg"
                  ? "text-background/75"
                  : "text-accent/75"
              )}>
              {description}
            </p>
          </div>
        </Link>
        <div className="flex items-center gap-[0.33rem]">
          {codeLink ? (
            <UnderlineHover
              thin
              color={colorVariant === "light-bg" ? "dark" : "light"}>
              <Link
                href={codeLink}
                className={cn(
                  colorVariant === "light-bg"
                    ? "text-background"
                    : "text-accent",
                  "mt-2 inline-block"
                )}
                target="_blank">
                View Code
              </Link>
            </UnderlineHover>
          ) : (
            <></>
          )}
          {codeLink && caseStudyLink ? (
            <p
              className={cn(
                colorVariant === "light-bg" ? "text-background" : "text-accent",
                "mt-2"
              )}>
              •
            </p>
          ) : (
            <></>
          )}
          {caseStudyLink ? (
            <UnderlineHover
              thin
              color={colorVariant === "light-bg" ? "dark" : "light"}>
              <Link
                href={caseStudyLink}
                className={cn(
                  colorVariant === "light-bg"
                    ? "text-background"
                    : "text-accent",
                  "mt-2 inline-block"
                )}
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
