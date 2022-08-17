import { Box, Heading } from "@chakra-ui/react";
import Layout from "@components/layout";
import Navbar from "@components/navigation/navbar";
import Title from "@components/title";
import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <Layout>
      <Title />
      <Navbar />
      <Heading>projects</Heading>
    </Layout>
  );
};

export default About;
