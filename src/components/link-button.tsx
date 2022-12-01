import { Link, LinkProps } from "@chakra-ui/react";

const LinkButton: React.FC<React.PropsWithChildren<LinkProps>> = ({
  children,
  ...props
}) => (
  <Link
    bg="#ffffff14"
    _hover={{ bg: "#ffffff10" }}
    _active={{ bg: "#ffffff08" }}
    borderRadius="md"
    textAlign="center"
    height="2.5rem"
    display="flex"
    justifyContent="center"
    alignItems="center"
    px="16px"
    fontWeight={600}
    {...props}>
    {children}
  </Link>
);

export default LinkButton;
