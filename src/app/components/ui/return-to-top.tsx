"use client";

import { cn } from "@/utils/cn";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState } from "react";

const ReturnToTop: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowButton(latest > 300);
  });

  return (
    <button
      className={cn(
        "border-accent border flex gap-3 items-center rounded bg-background px-3 py-2 sticky right-8 bottom-8",
        showButton ? "" : "hidden"
      )}
      onClick={() =>
        document.documentElement.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }>
      <ArrowUp /> Back to Top
    </button>
  );
};

export default ReturnToTop;
