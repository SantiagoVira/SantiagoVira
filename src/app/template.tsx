"use client";

import { useEffect } from "react";
import { animatePageIn } from "@/animations";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <>
      <div
        id="transition-element"
        className="w-full h-screen bg-darkBackground z-[100] fixed top-0 left-0"
      />
      {children}
    </>
  );
}
