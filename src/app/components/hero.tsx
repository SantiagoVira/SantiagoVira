"use client";

import { useState, useEffect } from "react";
import { chooseRandomTidbit } from "./tidbit-box";
import { cn } from "@/utils/cn";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-[105vh] select-none max-w-[58rem] origin-top justify-center items-center scale-y-150">
      <h1 className="font-dunk text-9xl mr-auto text-accent">
        SAN <ChangingTidbit delay={1750} className="scale-y-[0.66] " />
      </h1>
      <h1 className="font-dunk text-9xl ml-auto text-accent ">
        <ChangingTidbit delay={1500} className="scale-y-[0.66] " /> TIAGO
        <br />
        <span className="opacity-0">
          _<br />_
        </span>
      </h1>
    </div>
  );
};

export const ChangingTidbit: React.FC<{
  delay: number;
  className?: string;
}> = ({ delay, className }) => {
  const [symbol, setSymbol] = useState(chooseRandomTidbit());

  useEffect(() => {
    const interval = setInterval(() => {
      setSymbol(chooseRandomTidbit());
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);

  return (
    <span className={cn("inline-block", className)} suppressHydrationWarning>
      {symbol}
    </span>
  );
};

export default Hero;
