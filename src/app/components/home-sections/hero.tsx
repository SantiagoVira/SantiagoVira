"use client";

import useWindowSize from "@/utils/use-window-size";
import ChangingTidbit from "../changing-tidbit";

const Hero: React.FC = () => {
  const { isDesktop } = useWindowSize();
  if (isDesktop) {
    return (
      <div className="flex flex-col w-full h-[105vh] select-none max-w-[60rem] origin-top justify-center gap-6 items-center">
        <p className="uppercase mr-auto">Fullstack developer</p>
        <div className="flex items-center justify-start gap-8 w-full scale-y-150 mb-4">
          <h1
            className="font-dunk text-9xl text-accent "
            style={{ lineHeight: 1.33 }}>
            SAN
          </h1>
          <ChangingTidbit
            delay={1750}
            className="mr-auto text-9xl scale-y-[0.66] font-dunk"
          />
        </div>
        <div className="flex items-center justify-start gap-8 w-full">
          <ChangingTidbit delay={1500} className="ml-auto text-9xl font-dunk" />

          <h1
            className="font-dunk text-9xl text-accent scale-y-150 origin-left"
            style={{ lineHeight: 0.57 }}>
            TIAGO
          </h1>
        </div>
        <p className="uppercase ml-auto">UI/UX Designer</p>
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
