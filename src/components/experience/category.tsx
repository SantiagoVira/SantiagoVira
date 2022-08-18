import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";

export const Category: React.FC<{ title: string; text: string }> = ({
  title,
  text,
}) => {
  return (
    <AccordionItem border={0} mb="1.5rem">
      <AccordionButton>
        <Heading flex={1} textAlign="left" pl="0.4rem">
          {title}{" "}
        </Heading>
        <AccordionIcon boxSize="1.8rem" />
      </AccordionButton>
      <Divider borderColor="#636363" />
      <AccordionPanel>
        <Text p="1.5rem 2.5rem 0 2.5rem" fontSize="1.2rem">
          {text}
          <br />
          hola
          <br /> hola <br />
          hola
        </Text>
      </AccordionPanel>
    </AccordionItem>
  );
};
