import { Fragment } from "react";

import Project from "@components/project";
import { ProjectDataType } from "@/sanity-helpers";
import { cn } from "@/utils/cn";

const ProjectList: React.FC<{
  projects: ProjectDataType[];
  colorVariant?: "light-bg" | "dark-bg";
}> = ({ projects, colorVariant = "light-bg" }) => {
  return (
    <div className="flex flex-col -mt-2 items-center w-full px-12 justify-start group">
      {projects.map((project, i) => (
        <Fragment key={i}>
          <Project {...project} colorVariant={colorVariant} />
          {i < projects.length - 1 ? (
            <hr
              className={cn(
                colorVariant === "light-bg"
                  ? "border-background/60"
                  : "border-accent/60",
                "w-full"
              )}
            />
          ) : (
            <></>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default ProjectList;
