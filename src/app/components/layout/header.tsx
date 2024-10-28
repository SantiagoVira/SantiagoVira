"use client";

import useWindowSize from "@/utils/use-window-size";
import NavLink from "../nav-link";
import TransitionLink from "../ui/transition-link";
import Image from "next/image";

const Header: React.FC = () => {
  const { isDesktop } = useWindowSize();
  return (
    <div className="flex items-start mix-blend-difference justify-between fixed top-0 left-0 w-screen px-6 pt-4 pb-5 z-50 ">
      <TransitionLink className="font-dunk text-xl w-8 relative h-6" href="/">
        <Image src="/img/logo.png" fill alt="Logo" className="object-contain" />
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
