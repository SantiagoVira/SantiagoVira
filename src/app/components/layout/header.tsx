"use client";

import NavLink from "../nav-link";

const Header: React.FC = () => {
  return (
    <div className="flex items-start justify-between fixed top-0 left-0 w-screen px-6 pt-4 pb-5 z-50 bg-gradient-to-b from-background/40 to-transparent">
      <a className="font-dunk text-xl" href="/">
        SV
      </a>
      <div className="flex items-center justify-evenly gap-6">
        <NavLink id="about">ABOUT</NavLink>
        <NavLink id="projects">PROJECTS</NavLink>
        <NavLink id="experience">EXPERIENCE</NavLink>
      </div>
    </div>
  );
};

export default Header;
