import { IconType } from "react-icons";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const ContactLink: React.FC<{ link: string; Icon: IconType }> = ({
  link,
  Icon,
}) => {
  return (
    <NextLink href={link} passHref>
      <Link target="_blank">
        <Icon size="2rem" />
      </Link>
    </NextLink>
  );
};

export default ContactLink;
