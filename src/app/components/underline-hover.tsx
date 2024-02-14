const UnderlineHover: React.FC<
  React.PropsWithChildren<{ variant?: "ltol" | "ltor" }>
> = ({ variant = "ltor", children }) => {
  "after:origin-left";
  return (
    <div
      className={`after:bg-accent after:w-full after:h-[2px] relative after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:origin-${
        variant === "ltol" ? "left" : "right"
      } overflow-hidden text-white hover:after:scale-x-100 hover:after:origin-left after:transition-transform group-hover/box:after:scale-x-100 group-hover/box:after:origin-left
      `}>
      {children}
    </div>
  );
};

export default UnderlineHover;
