import { motion } from "framer-motion";
import UnderlineHover from "../underline-hover";
import { projectDataType } from "@/utils/client";
import Link from "next/link";

const Project: React.FC<projectDataType> = ({
  year,
  title,
  description,
  category,
  codeLink,
  link,
}) => {
  return (
    <div
      className={`p-2 py-6 flex  items-start peer justify-between gap-24 rounded-lg w-full h-full transition-all duration-[400ms] group-hover:opacity-40 group-hover:hover:opacity-100 `}>
      <p className="text-accent/60 font-bold">{year}</p>
      <div className="flex items-start justify-start flex-col flex-1 gap-1">
        <Link
          href={link ?? ""}
          className={`text-accent w-full ${
            link ? "cursor-ne-resize" : "cursor-default"
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
      </div>
    </div>
  );
};

export default Project;
