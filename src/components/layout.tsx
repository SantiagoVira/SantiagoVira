import { Flex, FlexProps } from "@chakra-ui/react";
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
    <Flex maxW="100vw" w="100vw" minH="100vh" flexDirection="column">
      <Navbar
        selectedTab={
          pageIndex !== undefined ? navigationTabs[pageIndex] : undefined
        }
      />
      <Title page={pageIndex ? navigationTabs[pageIndex].name : ""} />
      <Flex w="100%" flex={1} p="1rem" flexDirection="column" {...rest}>
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
