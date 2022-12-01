import { ButtonProps, Button as ChakraButton } from "@chakra-ui/react";

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => (
  <ChakraButton
    bg="#ffffff14"
    _hover={{ bg: "#ffffff10" }}
    _active={{ bg: "#ffffff08" }}
    {...props}>
    {children}
  </ChakraButton>
);

export default Button;
