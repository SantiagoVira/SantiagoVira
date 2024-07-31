import { Fragment } from "react";

import Project from "@components/project";
import { ProjectDataType } from "@/sanity-helpers";

const ProjectList: React.FC<{ projects: ProjectDataType[] }> = ({
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
