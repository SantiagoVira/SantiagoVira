import { useBreakpointValue } from "@chakra-ui/react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res);

export const useMarv = (bp: "sm" | "md" | "lg" | "xl" | "2xl" = "md") => {
  const { data, error } = useSWR("/api/sarcasm", fetcher);

  return { data, error };
};
