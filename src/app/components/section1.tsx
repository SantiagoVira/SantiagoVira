"use client";

import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Bread1 from "@/images/bread1.jpeg";
import Bread2 from "@/images/bread2.jpeg";
import Bread3 from "@/images/bread3.jpeg";

const Section1: React.FC = () => {
  const container = useRef(null);

  const path = useRef<SVGPathElement>(null);
  let progress = 0;
  let x = 0.5;

  const setPath = useCallback(
    (value: number) => {
      const width = window.innerWidth * 0.7;

      if (path.current)
        path.current.setAttributeNS(
          null,
          "d",
          `M 0 50 Q ${width * x} ${50 + value} ${width} 50`
        );
    },
    [x]
  );

  useEffect(() => {
    setPath(progress);

    window.addEventListener("resize", () => {
      setPath(progress);
    });
  }, [progress, setPath]);

  const images = [Bread1, Bread2, Bread3];
  const [imageIdx, setImageIdx] = useState(0);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });
  const scaled = useTransform(scrollYProgress, [0, 1], [0, 2.99999]);

  useMotionValueEvent(scaled, "change", (latest) => {
    setImageIdx(Math.floor(latest));
  });

  return (
    <div className="flex flex-col relative w-full justify-start items-center">
      <div className="border-t-[5vw] border-t-transparent border-l-[50vw] border-l-transparent border-r-[50vw] border-accent border-b-[10vh] w-0 h-0" />
      <div
        className="flex flex-col relative w-full justify-start h-[300vh] items-center"
        ref={container}>
        <div className="h-screen sticky top-0 w-full flex items-start justify-between p-24 bg-accent">
          <div className="flex flex-col">
            <h2 className="font-dunk text-6xl text-background">ABOUT</h2>
          </div>

          <Image
            className="w-[30vw] h-[80vh] object-cover"
            src={images[imageIdx]}
            alt="image"
          />
        </div>
      </div>
      <div className="h-[1px] relative w-full mb-5">
        <span className="h-[40px] w-full flex relative -top-5 z-10"></span>

        <svg
          height="100"
          className="absolute h-[100px] w-full"
          xmlns="http://www.w3.org/2000/svg">
          <path ref={path} className="stroke-1 stroke-accent"></path>
        </svg>
      </div>
      {/* <svg height="400" width="450" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 100 250 Q 250 180 400 250"
          className="fill-none stroke-green-500 stroke-[3]"
        />
      </svg>
      <svg height="400" width="450" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 100 350 q 150 -300 300 0"
          stroke="blue"
          stroke-width="4"
          fill="none"
        />
      </svg> */}
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
