"use client";

import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

const Section1: React.FC = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });
  const scaled = useTransform(scrollYProgress, [0, 1], [0, 2.99999]);

  useMotionValueEvent(scaled, "change", (latest) => {
    console.log("Page scroll: ", Math.floor(latest));
  });

  return (
    <div className="flex flex-col relative w-full justify-start items-center">
      <div className="border-t-[5vw] border-t-transparent border-l-[50vw] border-l-transparent border-r-[50vw] border-accent border-b-[10vh] w-0 h-0" />
      <div
        className="flex flex-col relative w-full justify-start h-[300vh] items-center"
        ref={container}>
        <div className="h-screen sticky top-0 w-full flex flex-col items-start justify-start p-24 bg-accent">
          <h2 className="font-dunk text-6xl text-background">ABOUT</h2>
        </div>
      </div>
    </div>
  );
};

export default Section1;
// "use client"

// import Image from 'next/image';
// import { useScroll, useTransform, motion} from 'framer-motion';
// import { useRef } from 'react';

// export default function Index() {

//     const container = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: container,
//         offset: ['start start', 'end end']
//     })

//     const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

//     return (
//         <div ref={container} className={styles.container}>
//             <div className={styles.sticky}>
//                 <motion.div style={{scale}} className={styles.el}>
//                     <div className={styles.imageContainer}>
//                         <div className="w-8 h-8 bg-red-500"></div>
//                     </div>
//                 </motion.div>
//             </div>
//         </div>
//     )
// }
