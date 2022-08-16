import { Box, Heading } from "@chakra-ui/react";
import Navbar from "@components/navigation/navbar";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box>
      <Navbar />
    </Box>
  );
};

export default Home;
