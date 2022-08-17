import { Flex } from "@chakra-ui/react";

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Flex maxW="100vw" w="100vw" minH="100vh" flexDirection="column">
      {children}
    </Flex>
  );
};

export default Layout;
