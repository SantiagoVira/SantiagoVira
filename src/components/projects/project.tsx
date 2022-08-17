import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const Project: React.FC<{
  image: any;
  name: string;
  link: string;
  description: string;
}> = ({ image, name, link, description }) => {
  return (
    <Flex
      border="1px solid"
      borderColor="bg.700"
      p="1.5rem"
      borderRadius="12px"
      flexDirection="column">
      {/* Image Here also linked with link*/}
      <NextLink href={link} passHref>
        <Link display="flex" alignItems="center" gap="0.5rem" color="white">
          <Text fontWeight="bold" fontSize="1.15rem">
            {name}
          </Text>
        </Link>
      </NextLink>
      <Text>{description}</Text>
    </Flex>
  );
};

export default Project;
