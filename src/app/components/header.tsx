import UnderlineHover from "./ui/underline-hover";

const Header: React.FC = () => {
  return (
    <div className="flex items-start justify-between fixed top-0 left-0 w-screen px-6 pt-4 pb-5 z-10 bg-gradient-to-b from-background/40 to-transparent">
      <a className="font-dunk text-xl" href="/">
        SANTIAGO
      </a>
      <div className="flex items-center justify-evenly gap-6">
        <NavLink href="/#about">ABOUT</NavLink>
        <NavLink href="/#projects">PROJECTS</NavLink>
        <NavLink href="/#experience">EXPERIENCE</NavLink>
      </div>
    </div>
  );
};

export default Header;

const NavLink: React.FC<React.PropsWithChildren<{ href: string }>> = ({
  href,
  children,
}) => (
  <UnderlineHover>
    <a className="" href={href}>
      {children}
    </a>
  </UnderlineHover>
);
