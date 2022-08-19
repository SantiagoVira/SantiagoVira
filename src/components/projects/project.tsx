import { Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { projectDataType } from "@components/cms/cms-data";
import PortableTextLayout from "@components/cms/portable-text";
import NextLink from "next/link";

const Project: React.FC<projectDataType> = ({
  image,
  title,
  link,
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
      <Image src={image} alt={`${slug} logo`} />
      <NextLink href={link} passHref>
        <Link display="flex" alignItems="center" gap="0.5rem" color="white">
          <Text fontWeight="bold" fontSize="1.15rem">
            {title}
          </Text>
        </Link>
      </NextLink>
      <PortableTextLayout text={body} />
    </Flex>
  );
};

export default Project;
