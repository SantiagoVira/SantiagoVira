import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Divider,
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import Button from "@components/button";
import { projectDataType } from "@components/cms/cms-data";
import PortableTextLayout from "@components/cms/portable-text";
import LinkButton from "@components/link-button";
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
              <NextLink
                href={link}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  color: "white",
                  width: "100%",
                  height: "100%",
                }}
                target="_blank">
                <Image
                  src={image}
                  alt={`${slug} logo`}
                  h="100%"
                  maxW="100%"
                  maxH="100%"
                />
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
          <NextLink
            href={link}
            target="_blank"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "white",
              fontWeight: "bold",
              fontSize: "1.7rem",
            }}>
            {title}
          </NextLink>
        ) : (
          <Text fontWeight="bold" fontSize="1.7rem">
            {title}
          </Text>
        )}

        <Accordion allowMultiple>
          <AccordionItem border={0}>
            <AccordionButton justifyContent="space-between" p={0}>
              <Text fontWeight={600} color="extras.smallText">
                {langString}
              </Text>
              <AccordionIcon boxSize="1.8rem" />
            </AccordionButton>
            <Divider mt="0.5rem" mb="0.75rem" borderColor="#636363" />
            <AccordionPanel p="1rem 0.5rem">
              <PortableTextLayout text={body} />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
      {link ? (
        <NextLink href={link} passHref style={{ flex: 1 }}>
          <LinkButton mt="1.5rem" p="1rem" target="_blank">
            View Project
          </LinkButton>
        </NextLink>
      ) : (
        <Button mt="1.5rem" p="1rem" disabled>
          Project Not Hosted
        </Button>
      )}
      {codeLink ? (
        <NextLink href={codeLink} passHref style={{ flex: 1 }}>
          <LinkButton mt="1.5rem" p="1rem" target="_blank">
            View Source Code
          </LinkButton>
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
