import { Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import type { ITab } from "./tabs";

interface ITabProps {
  tab: ITab;
  selected: boolean;
  passQuery?: boolean;
}

export const Tab: React.FC<ITabProps> = ({
  tab,
  selected,
  passQuery = true,
}) => {
  const { query } = useRouter();

  return (
    <NextLink
      href={{
        pathname: tab.route,
        hash: tab.hash,
        query: passQuery ? query : undefined,
      }}
      passHref>
      <Link
        display="flex"
        alignItems="center"
        gap="0.5rem"
        color={selected ? "white" : "whiteAlpha.700"}>
        <Text fontWeight="medium">{tab.name}</Text>
      </Link>
    </NextLink>
  );
};
