import About from "./components/about-section";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <div className="h-[300vh]"></div>
    </>
  );
}
