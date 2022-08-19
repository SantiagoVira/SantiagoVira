import type { experienceSectionType } from "./cms-data";
import { PortableText } from "@portabletext/react";
import { Code, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import NextLink from "next/link";

const PortableTextLayout: React.FC<{
  text: any[];
}> = ({ text }) => {
  if (!text) {
    return <></>;
  }
  return (
    <PortableText
      value={text}
      components={{
        list: ({ children }) => <UnorderedList>{children}</UnorderedList>,
        listItem: ({ children }) => <ListItem ml="1rem">{children}</ListItem>,
        marks: {
          code: ({ children }) => {
            return (
              <Code colorScheme="gray" fontSize="inherit">
                {children}
              </Code>
            );
          },
          link: ({ text, value }) => {
            return (
              <NextLink href={value.href} passHref>
                <Link textDecoration="underline" fontSize="inherit">
                  {text}
                </Link>
              </NextLink>
            );
          },
        },
        types: {
          code: ({ value }) => (
            <Code colorScheme="gray" my="0.75rem" fontSize="inherit" w="100%">
              {value.code.split("\n").map((line: string, index: number) => (
                <Text key={index}>{line}</Text>
              ))}
            </Code>
          ),
          break: () => <br />,
        },
      }}
    />
  );
};

export default PortableTextLayout;
