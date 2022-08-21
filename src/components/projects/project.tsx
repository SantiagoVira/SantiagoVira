import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { projectDataType } from "@components/cms/cms-data";
import PortableTextLayout from "@components/cms/portable-text";
import NextLink from "next/link";

const Project: React.FC<projectDataType> = ({
  image,
  title,
  link,
  codeLink,
  body,
  langs,
  slug,
}) => {
  const langString = langs?.map((lang) => lang.name).join(" ∙ ");

  return (
    <Flex
      border="1px solid"
      borderColor="bg.600"
      p="1.5rem"
      borderRadius="9px"
      flexDirection="column">
      <Flex w="100%" h="100%" flexDirection="column">
        <Flex alignItems="center" justifyContent="center" w="100%" mb="2rem">
          <Flex
            alignItems="center"
            justifyContent="center"
            w="80%"
            style={{ aspectRatio: "1/1" }}>
            {link ? (
              <NextLink href={link} passHref>
                <Link
                  display="flex"
                  target="_blank"
                  alignItems="center"
                  justifyContent="center"
                  gap="0.5rem"
                  color="white"
                  w="100%"
                  h="100%">
                  <Image
                    src={image}
                    alt={`${slug} logo`}
                    h="100%"
                    maxW="100%"
                    maxH="100%"
                  />
                </Link>
              </NextLink>
            ) : (
              <Image
                src={image}
                alt={`${slug} logo`}
                h="100%"
                maxW="100%"
                maxH="100%"
              />
            )}
          </Flex>
        </Flex>

        {link ? (
          <NextLink href={link} passHref>
            <Link
              display="flex"
              target="_blank"
              alignItems="center"
              gap="0.5rem"
              color="white">
              <Text fontWeight="bold" fontSize="1.7rem">
                {title}
              </Text>
            </Link>
          </NextLink>
        ) : (
          <Text fontWeight="bold" fontSize="1.7rem">
            {title}
          </Text>
        )}
        <Text fontWeight={600} color="extras.smallText">
          {langString}
        </Text>
        <Divider mt="0.5rem" mb="0.75rem" />
        <PortableTextLayout text={body} />
      </Flex>
      {codeLink ? (
        <NextLink href={codeLink} passHref style={{ flex: 1 }}>
          <Button mt="1.5rem" p="1rem" as={Link} target="_blank">
            View Source Code
          </Button>
        </NextLink>
      ) : (
        <Button mt="1.5rem" p="1rem" disabled>
          Code Unvailable
        </Button>
      )}
    </Flex>
  );
};

export default Project;
