import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full max-w-[60rem] origin-top justify-center h-full scale-y-[2]">
        <h1 className="font-dunk text-9xl mr-auto text-accent">SAN</h1>
        <h1 className="font-dunk text-9xl ml-auto text-accent ">
          TIAGO
          <br />
          <span className="opacity-0">
            _<br />_
          </span>
        </h1>
      </div>

      <div className="h-[300vh]"></div>
    </>
  );
}
