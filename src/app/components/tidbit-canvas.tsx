"use client";

import useWindowSize from "@/utils/use-window-size";
import { useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

const TidbitCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
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
      //   console.log(mouse.x.get(), mouse.y.get());

      const ctx = canvasRef.current?.getContext("2d");
      if (ctx && width && height) {
        ctx.reset();
        ctx.fillStyle = "red";
        ctx.fillRect(x * width - 5, y * height - 5, 10, 10);
        console.log(x * width, y * height);
      }
    };

    window.addEventListener("mousemove", manageMouse);
    return () => window.removeEventListener("mousemove", manageMouse);
  }, [mouse.x, mouse.y, width, height]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full top-0 left-0 fixed select-none pointer-events-none"
      width={width}
      height={height}></canvas>
  );
};

export default TidbitCanvas;
