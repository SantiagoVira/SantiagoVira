import { Accordion } from "@chakra-ui/react";
import { Category } from "@components/experience/category";
import ResumeButton from "@components/experience/resume-button";
import Layout from "@components/layout";
import Navbar from "@components/navigation/navbar";
import Title from "@components/title";
import type { NextPage } from "next";

const Experience: NextPage = () => {
  return (
    <Layout pageIndex={1}>
      <Accordion allowMultiple>
        <Category title="TechCodes" text="hola" />
        <Category title="TechCodes" text="hola" />
        <Category title="TechCodes" text="hola" />
      </Accordion>
      <ResumeButton />
    </Layout>
  );
};

export default Experience;
