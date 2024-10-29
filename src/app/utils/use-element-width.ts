import { useLayoutEffect, useRef, useState } from "react";

export const useElementWidth = <T extends HTMLElement>() => {
  const element = useRef<T>(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    element.current?.scrollWidth && setWidth(element.current.scrollWidth);
  }, [element]);

  return { ref: element, width };
};
