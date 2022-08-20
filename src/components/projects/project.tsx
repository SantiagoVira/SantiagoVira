import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { projectDataType } from "@components/cms/cms-data";
import PortableTextLayout from "@components/cms/portable-text";
import NextLink from "next/link";

const Project: React.FC<projectDataType> = ({
  image,
  title,
  link,
  codeLink,
  body,
  slug,
}) => {
  return (
    <Flex
      border="1px solid"
      borderColor="bg.600"
      p="1.5rem"
      borderRadius="9px"
      flexDirection="column">
      <Flex
        alignItems="center"
        justifyContent="center"
        w="100%"
        style={{ aspectRatio: "1/1" }}>
        <Image
          src={image}
          alt={`${slug} logo`}
          h="100%"
          maxW="100%"
          maxH="100%"
        />
      </Flex>

      {link ? (
        <NextLink href={link} target="_blank" passHref>
          <Link display="flex" alignItems="center" gap="0.5rem" color="white">
            <Text fontWeight="bold" fontSize="1.15rem">
              {title}
            </Text>
          </Link>
        </NextLink>
      ) : (
        <Text fontWeight="bold" fontSize="1.15rem">
          {title}
        </Text>
      )}
      <PortableTextLayout text={body} />
      {codeLink ? (
        <NextLink href={codeLink} target="_blank" passHref>
          <Link display="flex" alignItems="center" gap="0.5rem" color="white">
            View Source Code
          </Link>
        </NextLink>
      ) : (
        <></>
      )}
    </Flex>
  );
};

export default Project;
