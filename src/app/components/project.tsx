import { motion } from "framer-motion";

const Project: React.FC<{
  setHoverIdx: React.Dispatch<React.SetStateAction<number>>;
  idx: number;
  faded?: boolean;
}> = ({ setHoverIdx, idx, faded = false }) => {
  "row-span-3";
  return (
    <div
      className={`p-2 flex items-start justify-between gap-24 rounded-lg w-full h-full transition-all duration-[400ms] ${
        faded && "opacity-30"
      } `}
      onMouseEnter={() => setHoverIdx(idx)}>
      <p className="text-accent/60 font-bold">2023</p>
      <div className="flex items-start justify-start flex-col flex-1 gap-1">
        <p className="text-accent/80 text-xs">FULLSTACK</p>
        <h3 className="font-bold text-2xl text-accent">Hello, world!</h3>
        <p className="text-accent/75">TEST TEST TEST TEST</p>
      </div>
      <p className="text-9xl font-black text-accent">☃︎</p>
    </div>
  );
};

export default Project;
