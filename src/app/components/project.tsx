const Project: React.FC<{
  setHoverIdx: React.Dispatch<React.SetStateAction<number>>;
  idx: number;
  rows: number;
  cols: number;
  faded?: boolean;
}> = ({ setHoverIdx, idx, rows, cols, faded = false }) => {
  "row-span-3";
  return (
    <div
      className={`p-2 flex flex-col items-center justify-center gap-4 hover:bg-accent/10 rounded-lg border-accent border w-full h-full transition-all duration-[400ms] ${
        faded && "opacity-40"
      } col-span-${cols} row-span-${rows}`}
      onMouseEnter={() => setHoverIdx(idx)}>
      <p className="text-9xl font-black text-accent">☃︎</p>
      <h3 className="font-bold text-2xl text-accent">Hello, world!</h3>
      <p className="text-accent">TEST TEST TEST TEST</p>
    </div>
  );
};

export default Project;
