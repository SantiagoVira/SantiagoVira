const Project: React.FC<{
  faded?: boolean;
  setHoverIdx: React.Dispatch<React.SetStateAction<number>>;
  idx: number;
}> = ({ faded = false, setHoverIdx, idx }) => {
  return (
    <div
      className={`w-full h-32  p-2 flex items-start justify-start gap-4 hover:bg-accent/10 rounded transition-all duration-[400ms] ${
        faded && "opacity-15"
      }`}
      onMouseEnter={() => setHoverIdx(idx)}>
      <div className="h-full aspect-square bg-red-300" />
      <div className="flex flex-col items-start justify-start">
        <h3 className="font-bold text-xl text-accent">Hello, world!</h3>
        <p className="text-accent">TEST TEST TEST TEST</p>
      </div>
    </div>
  );
};

export default Project;
