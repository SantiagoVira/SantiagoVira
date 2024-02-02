import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="font-dunk text-8xl text-accent">SAN</h1>
        <h1 className="font-dunk text-8xl text-accent ">TIAGO</h1>
        <div className="h-[300vh]"></div>
      </div>
    </main>
  );
}
