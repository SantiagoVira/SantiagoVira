import { Fragment } from "react";
import Project from "./project";
import { projectDataType } from "@/utils/client";

const ProjectList: React.FC<{ projects: projectDataType[] }> = ({
  projects,
}) => {
  return (
    <div className="flex flex-col -mt-2 items-center w-full justify-start group">
      {projects.map((project, i) => (
        <Fragment key={i}>
          <Project {...project} />
          {i < projects.length - 1 ? (
            <hr className="w-full border-accent/60" />
          ) : (
            <></>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default ProjectList;
