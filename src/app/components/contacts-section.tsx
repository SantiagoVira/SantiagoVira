"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import santiagoCircle from "@/images/santiago-circle.svg";
import Image from "next/image";
import Link from "next/link";
import UnderlineHover from "./underline-hover";
import { chooseRandomTidbit } from "./tidbit-box";
import { ChangingTidbit } from "./hero";

const ContactsSection: React.FC = () => {
  return (
    <div className="bg-darkBackground w-full relative py-20 mt-32">
      <div className="w-52 aspect-square absolute -top-20 -left-20">
        <Image
          src={santiagoCircle}
          alt="Santiago Vira"
          className="animate-[spin_4s_linear_infinite]"
        />
      </div>
      <h3 className="font-dunk w-full text-center text-6xl">REACH OUT</h3>
      <div className="w-80 ml-auto mr-auto flex justify-center text-xl gap-2 items-center">
        <CustomLink href="https://www.linkedin.com/in/santiago-vira/">
          LinkedIn
        </CustomLink>
        <CustomLink href="https://github.com/SantiagoVira">GitHub</CustomLink>
        <CustomLink href="mailto:santiagovira06@gmail.com">Email</CustomLink>
      </div>
    </div>
  );
};

const CustomLink: React.FC<React.PropsWithChildren<{ href: string }>> = ({
  href,
  children,
}) => {
  return (
    <div className="flex-1 flex justify-center">
      <UnderlineHover>
        <Link href={href} target="_blank" className="cursor-ne-resize">
          {children}
        </Link>
      </UnderlineHover>
    </div>
  );
};

export default ContactsSection;
