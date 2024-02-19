"use client";

import useWindowSize from "@/utils/use-window-size";
import { useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const tidbits = ["✧", "⏺", "☺︎", "✸", "⏣", "❤︎", "❄︎", "✌︎", "☀︎"];

export const chooseRandomTidbit = () =>
  tidbits[Math.floor(Math.random() * tidbits.length)];

const TidbitCanvas: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const {
    windowSize: { width, height },
  } = useWindowSize();

  useEffect(() => {
    const manageMouse = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const { clientX, clientY } = e;
      const x = clientX / innerWidth;
      const y = clientY / innerHeight;
      mouse.x.set(x);
      mouse.y.set(y);

      if (boxRef.current && width && height && Math.random() < 0.04) {
        const tidbit = document.createElement("span");
        tidbit.appendChild(document.createTextNode(chooseRandomTidbit()));

        tidbit.className = "tidbit";
        tidbit.style.left = `${x * width}px`;
        tidbit.style.top = `${y * height}px`;
        tidbit.style.animationName = Math.random() > 0.5 ? "fall-1" : "fall-2";

        boxRef.current.appendChild(tidbit);
        setTimeout(() => boxRef.current?.removeChild(tidbit), 1500);
        console.log(x * width, y * height);
      }
    };

    window.addEventListener("mousemove", manageMouse);
    return () => window.removeEventListener("mousemove", manageMouse);
  }, [mouse.x, mouse.y, width, height]);

  return (
    <div
      ref={boxRef}
      className="w-full h-full z-20 top-0 left-0 fixed select-none pointer-events-none"></div>
  );
};

export default TidbitCanvas;
