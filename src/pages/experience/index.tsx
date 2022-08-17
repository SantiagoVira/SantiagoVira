import { Accordion } from "@chakra-ui/react";
import { Category } from "@components/experience/category";
import Layout from "@components/layout";
import Navbar from "@components/navigation/navbar";
import Title from "@components/title";
import type { NextPage } from "next";

const Experience: NextPage = () => {
  return (
    <Layout>
      <Title page="Experience" />
      <Navbar />
      <Accordion allowMultiple>
        <Category title="TechCodes" text="hola" />
        <Category title="TechCodes" text="hola" />
        <Category title="TechCodes" text="hola" />
      </Accordion>
    </Layout>
  );
};

export default Experience;
