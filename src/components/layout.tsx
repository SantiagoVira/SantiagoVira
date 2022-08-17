import { Flex, FlexProps } from "@chakra-ui/react";

const Layout: React.FC<React.PropsWithChildren<FlexProps>> = ({
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
      {...rest}>
      {children}
    </Flex>
  );
};

export default Layout;
