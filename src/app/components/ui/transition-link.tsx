"use client";

import { useRouter } from "next/navigation";
import { animatePageOut } from "@/animations";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";

const TransitionLink: React.FC<
  React.PropsWithChildren<{ href: string; className?: string }>
> = ({ href, className = "", children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <button
      className={cn("cursor-pointer p-0 outline-none border-none", className)}
      onClick={handleClick}>
      {children}
    </button>
  );
};

export default TransitionLink;
