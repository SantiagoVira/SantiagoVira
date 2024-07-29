import { useState, useEffect } from "react";
import { chooseRandomTidbit } from "@components/tidbit-box";
import { cn } from "@utils/cn";

const ChangingTidbit: React.FC<{
  delay: number;
  className?: string;
}> = ({ delay, className }) => {
  const [symbol, setSymbol] = useState(chooseRandomTidbit());

  useEffect(() => {
    const interval = setInterval(() => {
      setSymbol(chooseRandomTidbit());
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);

  return (
    <span className={cn("inline-block", className)} suppressHydrationWarning>
      {symbol}
    </span>
  );
};

export default ChangingTidbit;
