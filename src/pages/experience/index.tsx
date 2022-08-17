import { Box, Heading } from "@chakra-ui/react";
import Navbar from "@components/navigation/navbar";
import Title from "@components/title";
import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <Box>
      <Title />
      <Navbar />
      <Heading>experience</Heading>
    </Box>
  );
};

export default About;
