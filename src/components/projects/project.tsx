import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const Project: React.FC<{
  image: any;
  title: string;
  link: string;
  description: string;
}> = ({ image, title, link, description }) => {
  return (
    <Flex
      border="1px solid"
      borderColor="bg.500"
      p="1.5rem"
      borderRadius="12px"
      flexDirection="column">
      {/* Image Here also linked with link*/}
      <NextLink href={link} passHref>
        <Link display="flex" alignItems="center" gap="0.5rem" color="white">
          <Text fontWeight="bold" fontSize="1.15rem">
            {title}
          </Text>
        </Link>
      </NextLink>
      <Text>{description}</Text>
    </Flex>
  );
};

export default Project;
