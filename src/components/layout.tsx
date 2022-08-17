import { Flex, FlexProps } from "@chakra-ui/react";
import { useEffect } from "react";
import Navbar from "./navigation/navbar";
import { navigationTabs } from "./navigation/tabs";
import Title from "./title";

interface LayoutProps extends FlexProps {
  pageIndex?: number;
}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  pageIndex,
  children,
  ...rest
}) => {
  return (
    <Flex
      maxW="100vw"
      w="100vw"
      minH="100vh"
      flexDirection="column"
      p="1rem"
      pt={0}
      {...rest}>
      <Navbar
        selectedTab={
          pageIndex !== undefined ? navigationTabs[pageIndex] : undefined
        }
      />
      <Title page={pageIndex ? navigationTabs[pageIndex].name : ""} />
      {children}
    </Flex>
  );
};

export default Layout;
