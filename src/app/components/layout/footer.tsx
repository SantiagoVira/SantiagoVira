"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

import santiagoCircle from "@images/santiago-circle.svg";
import UnderlineHover from "@components/ui/underline-hover";
import { ResumeType } from "@/sanity-helpers";

const Footer: React.FC<{ resumeData: ResumeType }> = ({ resumeData }) => {
  const parentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: parentRef,

    offset: ["start end", "end end"],
  });

  const clipPath = useTransform(scrollYProgress, (y) => {
    const mult = 125;
    const topY = 50 - y * mult;
    const rightX = 50 + y * mult;
    const bottomY = 50 + y * mult;
    const leftX = 50 - y * mult;
    return `polygon(50% ${topY}%, ${rightX}% 50%, 50% ${bottomY}%, ${leftX}% 50%)`;
  });

  return (
    <motion.div
      ref={parentRef}
      className="w-full mt-24 h-[15.5rem]"
      style={{ clipPath }}>
      <div className="h-[15.5rem] gap-3 fixed w-full bottom-0 bg-darkBackground flex flex-col justify-center items-center">
        <div className="w-52 aspect-square absolute -top-20 -left-20">
          <Image
            src={santiagoCircle}
            alt="Santiago Vira"
            className="animate-[spin_4s_linear_infinite]"
          />
        </div>
        <div className="flex flex-col items-center w-fit gap-3">
          <h3 className="font-dunk w-full text-center text-6xl">REACH OUT</h3>
          <div className="flex justify-between w-full items-center px-3">
            <div className="flex items-center gap-2">
              <CustomLink href="https://www.linkedin.com/in/santiago-vira/">
                <FaLinkedin size="2rem" />
              </CustomLink>
              <CustomLink href="https://github.com/SantiagoVira">
                <FaGithub size="2rem" />
              </CustomLink>
              <CustomLink href="mailto:santiagovira06@gmail.com">
                <SiGmail size="2rem" />
              </CustomLink>
            </div>
            <UnderlineHover thin>
              <Link href={`${resumeData.link}?dl=Santiago_Vira_Resume.pdf`}>
                Download my resume
              </Link>
            </UnderlineHover>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;

const CustomLink: React.FC<React.PropsWithChildren<{ href: string }>> = ({
  href,
  children,
}) => {
  return (
    <div className="flex-1 flex justify-center">
      <Link href={href} target="_blank" className="cursor-ne-resize">
        {children}
      </Link>
    </div>
  );
};
