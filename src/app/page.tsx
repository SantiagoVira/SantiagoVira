import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/hero"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Hero />

      <div className="h-[300vh]"></div>
    </>
  );
}
