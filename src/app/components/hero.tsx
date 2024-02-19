"use client";

import { useState, useEffect } from "react";
import { chooseRandomTidbit, tidbits } from "./tidbit-canvas";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-[105vh] select-none max-w-[58rem] origin-top justify-center items-center scale-y-150">
      <h1 className="font-dunk text-9xl mr-auto text-accent">
        SAN <Tidbit delay={1750} />
      </h1>
      <h1 className="font-dunk text-9xl ml-auto text-accent ">
        <Tidbit delay={1500} /> TIAGO
        <br />
        <span className="opacity-0">
          _<br />_
        </span>
      </h1>
    </div>
  );
};

const Tidbit: React.FC<{ delay: number }> = ({ delay }) => {
  const [symbol, setSymbol] = useState(chooseRandomTidbit());

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      setSymbol(chooseRandomTidbit());
    }, delay);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [delay]);

  return (
    <span className="scale-y-[0.66] inline-block" suppressHydrationWarning>
      {symbol}
    </span>
  );
};

export default Hero;
