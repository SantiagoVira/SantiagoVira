import { Box, Heading } from "@chakra-ui/react";
import Navbar from "@components/navigation/navbar";
import Title from "@components/title";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box>
      <Title />
      <Navbar />
    </Box>
  );
};

export default Home;
