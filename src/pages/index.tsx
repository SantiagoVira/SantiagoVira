import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Layout from "@components/layout";
import Navbar from "@components/navigation/navbar";
import Title from "@components/title";
import type { NextPage } from "next";
import { Animation, spinUpVariants } from "@components/animation/animations";
import SlideUpAnimation from "@components/animation/slideUpAnimation";

const Home: NextPage = () => {
  return (
    <Layout>
      <Title />
      <Navbar />
      <Flex flexDirection="column" flex={1} w="100%">
        <Animation variants={spinUpVariants}>
          <Heading display="inline-block">Hi, I&apos;m Santiago.</Heading>
        </Animation>
        <SlideUpAnimation />
      </Flex>
    </Layout>
  );
};

export default Home;
