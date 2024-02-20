"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const ContactsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const spinner = useTransform(scrollYProgress, [0, 1], [0, -25]);
  const link = useTransform(scrollYProgress, [0.8, 1], [200, 100]);
  const container = useTransform(scrollYProgress, [0, 1], [200, 50]);

  return (
    <motion.div
      ref={containerRef}
      style={{ y: container }}
      className=" bg-darkBackground w-full h-80">
      <motion.div style={{ y: spinner }} className="bg-red-500 w-10 h-10 ">
        <p className="animate-spin">Email me</p>
      </motion.div>
      <motion.div
        style={{ y: link }}
        className="bg-red-500 w-full flex justify-center gap-10 items-center">
        <p className="">Linkedin</p>
        <p>Github</p>
      </motion.div>
    </motion.div>
  );
};

export default ContactsSection;
