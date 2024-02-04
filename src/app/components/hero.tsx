"use client";

import { useState, useEffect } from "react";

const tidbits = ["✧", "⏺", "☺︎", "✸"];

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-[105vh] max-w-[58rem] origin-top justify-center items-center scale-y-150">
      <h1 className="font-dunk text-9xl mr-auto text-accent">
        SAN <Tidbit />
      </h1>
      <h1 className="font-dunk text-9xl ml-auto text-accent ">
        <Tidbit /> TIAGO
        <br />
        <span className="opacity-0">
          _<br />_
        </span>
      </h1>
    </div>
  );
};

const Tidbit: React.FC = () => {
  const chooseRandom = () =>
    tidbits[Math.floor(Math.random() * tidbits.length)];

  const [symbol, setSymbol] = useState(chooseRandom());

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      setSymbol(chooseRandom());
    }, 2500);

    //Clearing the interval
    return () => clearInterval(interval);
  }, []);

  return <span className="scale-y-[0.66] inline-block">{symbol}</span>;
};

export default Hero;
