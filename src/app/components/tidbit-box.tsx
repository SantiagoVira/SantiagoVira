"use client";

import useWindowSize from "@/utils/use-window-size";
import { useScroll } from "framer-motion";
import { useRef } from "react";

export const tidbits = ["✧", "⏺", "☺︎", "✸", "⏣", "❤︎", "❄︎", "✌︎", "☀︎"];
const SPAWN_CHANCE = 0.16;

export const chooseRandomTidbit = () =>
  tidbits[Math.floor(Math.random() * tidbits.length)];

const TidbitBox: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({
    target: boxRef,

    offset: ["start start", "end start"],
  });

  const {
    windowSize: { width, height },
  } = useWindowSize();

  return (
    <div
      ref={boxRef}
      onMouseMove={(e) => {
        const { innerWidth, innerHeight } = window;
        const { clientX, clientY } = e;
        const x = clientX / innerWidth;
        const y = clientY / innerHeight;

        if (boxRef.current && width && height && Math.random() < SPAWN_CHANCE) {
          const tidbit = document.createElement("span");
          tidbit.appendChild(document.createTextNode(chooseRandomTidbit()));

          tidbit.className = "tidbit";
          tidbit.style.left = `${x * width}px`;
          tidbit.style.top = `${y * height + scrollY.get()}px`;
          tidbit.style.animationName =
            Math.random() > 0.5 ? "fall-1" : "fall-2";

          boxRef.current.appendChild(tidbit);
          setTimeout(() => boxRef.current?.removeChild(tidbit), 1500);
        }
      }}
      className="w-full h-full z-20 top-0 left-0 absolute"></div>
  );
};

export default TidbitBox;
