import { cn } from "@/utils/cn";

const SectionHeader: React.FC<
  React.PropsWithChildren<{ variant?: "light" | "dark"; className?: string }>
> = ({ variant = "light", children, className = "" }) => {
  return (
    <h2
      className={cn(
        "font-dunk text-5xl md:text-7xl",
        variant === "light" ? "text-accent" : "text-background",
        className
      )}>
      {children}
    </h2>
  );
};

export default SectionHeader;
