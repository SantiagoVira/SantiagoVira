import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Layout from "@components/layout";
import Title from "@components/title";
import type { NextPage } from "next";
import { Animation, spinUpVariants } from "@components/animation/animations";
import SlideUpAnimation from "@components/animation/slideUpAnimation";
import client from "@components/cms/cms-data";

const Home: NextPage<{ descriptionText: any[] }> = ({ descriptionText }) => {
  // Placeholder text data, as if from API
  const text = [
    { text: "Framer Motion" },
    {
      text: "Animating responsive text!",
    },
  ];
  console.log(descriptionText);

  return (
    <Layout>
      <Title />
      <Flex flexDirection="column" flex={1} w="100%" p="1.4rem">
        <Animation variants={spinUpVariants}>
          <Heading display="inline-block" fontSize="3.5rem">
            Hi, I&apos;m Santiago.
          </Heading>
        </Animation>
        <SlideUpAnimation text={descriptionText} />
      </Flex>
    </Layout>
  );
};

export async function getStaticProps() {
  const descriptionTextArray =
    await client.fetch(`*[_type == 'textChunk' && title == "about"] {
    body
  }`);

  const descriptionText = descriptionTextArray[0].body.map(
    (chunk: any) => chunk.children[0].text
  );

  return {
    props: {
      descriptionText,
    },
  };
}

export default Home;
