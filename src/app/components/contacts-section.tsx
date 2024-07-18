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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const spinnerNum = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const spinner = useTransform(spinnerNum, (val) => `${val}%`);

  const link = useTransform(scrollYProgress, [0.4, 1], [200, -120]);
  const container = useTransform(scrollYProgress, [0, 1], [200, 50]);

  return (
    <>
      <motion.div
        ref={containerRef}
        style={{ y: container }}
        className="bg-darkBackground w-full h-60">
        <motion.div
          style={{ y: spinner, x: "-50%" }}
          className="w-52 aspect-square">
          <Image
            src={santiagoCircle}
            alt="Santiago Vira"
            className="animate-[spin_4s_linear_infinite]"
          />
        </motion.div>
        <motion.h3
          className="font-dunk w-full text-center text-6xl"
          style={{ y: link }}>
          REACH OUT
        </motion.h3>
        <motion.div
          style={{ y: link }}
          className="w-80 ml-auto mr-auto flex justify-center text-xl gap-2 items-center">
          <CustomLink href="https://www.linkedin.com/in/santiago-vira/">
            LinkedIn
          </CustomLink>
          <CustomLink href="https://github.com/SantiagoVira">GitHub</CustomLink>
          <CustomLink href="mailto:santiagovira06@gmail.com">Email</CustomLink>
        </motion.div>
      </motion.div>

      <div className="bg-darkBackground h-20 w-full"></div>
    </>
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
