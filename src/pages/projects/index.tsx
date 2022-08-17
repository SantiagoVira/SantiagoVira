import { SimpleGrid, Heading } from "@chakra-ui/react";
import Layout from "@components/layout";
import Navbar from "@components/navigation/navbar";
import Project from "@components/projects/project";
import Title from "@components/title";
import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <Layout>
      <Title />
      <Navbar />
      <SimpleGrid columns={[1, 2, 3]} gap="1rem" p="1rem">
        <Project
          image="image here"
          name="Hello"
          link="edfd"
          description="THis is my greatest project"
        />
        <Project
          image="image here"
          name="Hello"
          link="edfd"
          description="THis is my greatest project"
        />
        <Project
          image="image here"
          name="Hello"
          link="edfd"
          description="THis is my greatest project"
        />
        <Project
          image="image here"
          name="Hello"
          link="edfd"
          description="THis is my greatest project"
        />
      </SimpleGrid>
    </Layout>
  );
};

export default About;
