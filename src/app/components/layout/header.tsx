"use client";

import useWindowSize from "@/utils/use-window-size";
import NavLink from "../nav-link";
import TransitionLink from "../ui/transition-link";

const Header: React.FC = () => {
  const { isDesktop } = useWindowSize();
  return (
    <div className="flex items-start justify-between fixed top-0 left-0 w-screen px-6 pt-4 pb-5 z-50 bg-gradient-to-b from-background/40 to-transparent">
      <TransitionLink className="font-dunk text-xl" href="/">
        SV
      </TransitionLink>
      {isDesktop && (
        <div className="flex items-center justify-evenly gap-6">
          <NavLink id="about">ABOUT</NavLink>
          <NavLink id="projects">PROJECTS</NavLink>
          <NavLink id="experience">EXPERIENCE</NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
