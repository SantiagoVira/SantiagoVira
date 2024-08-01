"use client";

import useWindowSize from "@/utils/use-window-size";
import ChangingTidbit from "../changing-tidbit";

const Hero: React.FC = () => {
  const { isDesktop } = useWindowSize();
  if (isDesktop) {
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
  } else {
    return (
      <div className="flex w-full h-[35vh] select-none justify-center items-center">
        <h1 className="font-dunk text-[2rem] text-accent flex gap-2">
          SAN
          <ChangingTidbit delay={1750} className="" />
          TIAGO
        </h1>
      </div>
    );
  }
};

export default Hero;
