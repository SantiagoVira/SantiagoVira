import { cn } from "@/utils/cn";
import { useElementWidth } from "@/utils/use-element-width";
import { MouseEventHandler, useCallback, useEffect, useRef } from "react";

export const Quadratic: React.FC<{
  className?: string;
}> = ({ className = "" }) => {
  const container = useElementWidth<HTMLDivElement>();
  const pathRef = useRef<SVGPathElement>(null);
  let progress = 0;
  let time = 0;
  let reqId: number | null = null;

  const setPath = useCallback(
    (progress: number) => {
      pathRef.current?.setAttributeNS(
        "",
        "d",
        `M0 50 Q${container.width / 2} ${50 + progress}, ${container.width} 50`
      );
    },
    [container.width]
  );
  useEffect(() => {
    setPath(progress);
  }, [container.width, progress, setPath]);

  const onMouseEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    if (reqId !== null) {
      window.cancelAnimationFrame(reqId);
      time = 0;
      progress = 0;
    }
  };

  const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const { movementY } = e;

    progress += movementY / 2;
    setPath(progress);
  };

  const onMouseLeave: MouseEventHandler<HTMLDivElement> = (e) => {
    animateOut();
  };

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const animateOut = () => {
    const newProgress = progress * Math.cos(time);
    setPath(newProgress);
    progress = lerp(progress, 0, 0.02);
    time += 0.2;
    if (Math.abs(progress) > 0.75) {
      reqId = window.requestAnimationFrame(animateOut);
    } else {
      time = 0;
      progress = 0;
      reqId = null;
    }
  };

  return (
    <div
      className={cn("w-full h-[1px] relative", className)}
      ref={container.ref}>
      <div
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="h-10 relative -top-5 hover:h-20 hover:-top-10 z-50"></div>
      <svg className="w-full h-[100px] top-[-50px] absolute z-0 overflow-visible">
        <path
          ref={pathRef}
          className="stroke-[1px] stroke-white fill-none"></path>
      </svg>
    </div>
  );
};
