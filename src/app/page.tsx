import dynamic from "next/dynamic";
import Section1 from "./components/section1";
const Hero = dynamic(() => import("@/components/hero"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Hero />
      <Section1 />
    </>
  );
}
