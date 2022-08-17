import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Layout from "@components/layout";
import Navbar from "@components/navigation/navbar";
import Title from "@components/title";
import type { NextPage } from "next";
import { Animation, spinUpVariants } from "@components/animation/animations";
import SlideUpAnimation from "@components/animation/slideUpAnimation";

const Home: NextPage = () => {
  // Placeholder text data, as if from API
  const text = [
    { text: "Framer Motion" },
    {
      text: "Animating responsive text!",
    },
  ];

  return (
    <Layout>
      <Title />
      <Navbar />
      <Flex flexDirection="column" flex={1} w="100%" p="1.4rem">
        <Animation variants={spinUpVariants}>
          <Heading display="inline-block" fontSize="3.5rem">
            Hi, I&apos;m Santiago.
          </Heading>
        </Animation>
        <SlideUpAnimation text={text} />
      </Flex>
    </Layout>
  );
};

export default Home;
