"use client";

import { useCallback, useEffect, useRef } from "react";

const QuadraticBottom: React.FC = () => {
  const path = useRef<SVGPathElement>(null);

  const setPath = useCallback(
    (controlXRatio: number, controlYRatio: number) => {
      const screenWidth = window.innerWidth;

      if (path.current)
        path.current.setAttributeNS(
          null,
          "d",
          `M 0 0 Q ${controlXRatio * screenWidth} ${
            controlYRatio * 100
          } ${screenWidth} 0`
        );
    },
    []
  );

  useEffect(() => {
    setPath(0.5, 0.5);

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      setPath(clientX / window.innerWidth, clientY / window.innerHeight);
    });
  }, [setPath]);

  return (
    <svg height="100" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <path ref={path} className="stroke-1 stroke-accent fill-accent"></path>
    </svg>
  );
};

export default QuadraticBottom;
