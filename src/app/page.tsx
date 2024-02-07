import About from "./components/about-section";
import Hero from "./components/hero";
import Projects from "./components/projects/project-section";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <div className="h-[300vh]"></div>
    </>
  );
}
