import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import PortableTextLayout from "@components/cms/portable-text";

export const Category: React.FC<{
  title: string;
  position: string;
  time: string;
  body: any[];
}> = ({ title, position, time, body }) => {
  return (
    <AccordionItem border={0} mb="1.5rem">
      <AccordionButton>
        <Heading flex={1} textAlign="left" pl="0.4rem">
          {title}{" "}
        </Heading>
        <AccordionIcon boxSize="1.8rem" />
      </AccordionButton>
      <Divider borderColor="#636363" />
      <AccordionPanel p="1.5rem 2.5rem 0 2.5rem">
        <Text fontStyle="italic">{position}</Text>
        <Text fontWeight={100} mb="1.5rem">
          {time}
        </Text>
        <Box ml="1rem">
          <PortableTextLayout
            text={body}
            // p="1.5rem 2.5rem 0 2.5rem"
            // fontSize="1.2rem"
          />
        </Box>
      </AccordionPanel>
    </AccordionItem>
  );
};
