import { motion } from "framer-motion";
import UnderlineHover from "../underline-hover";

const Project: React.FC<{
  year: number;
  title: string;
  description: string;
  category: string;
}> = ({ year, title, description, category }) => {
  return (
    <div
      className={`p-2 py-6 flex group/box items-start peer justify-between gap-24 rounded-lg w-full h-full transition-all duration-[400ms] group-hover:opacity-40 group-hover:hover:opacity-100 `}>
      <p className="text-accent/60 font-bold">{year}</p>
      <div className="flex items-start justify-start flex-col flex-1 gap-1">
        <p className="text-accent/80 text-xs">{category}</p>
        <UnderlineHover>
          <h3 className="font-bold text-2xl text-accent">{title}</h3>
        </UnderlineHover>

        <p className="text-accent/75">{description}</p>
      </div>
    </div>
  );
};

export default Project;
