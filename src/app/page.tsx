import Section1 from "./components/section1";

// import dynamic from "next/dynamic";
// const Hero = dynamic(() => import("@/components/hero"), {
//   ssr: false,
// });

import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Section1 />
      <div className="h-[300vh]"></div>
    </>
  );
}
