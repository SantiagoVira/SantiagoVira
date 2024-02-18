export const Tab: React.FC<
  React.PropsWithChildren<{
    onClick: () => void;
    active?: boolean;
  }>
> = ({ onClick, active = false, children }) => (
  <div
    className={`flex flex-1 items-center justify-center transition-all pt-6 hover:pt-4 group border-b  border-accent/30 hover:border-accent/65 
  `}
    onClick={onClick}>
    <p
      className={`transition-all select-none pb-1 ${
        active ? "text-accent" : "text-accent/30 group-hover:text-accent/65"
      }`}>
      {children}
    </p>
  </div>
);
