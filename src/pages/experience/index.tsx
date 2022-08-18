import { Accordion } from "@chakra-ui/react";
import { Category } from "@components/experience/category";
import Layout from "@components/layout";
import type { NextPage } from "next";

const Experience: NextPage = () => {
  return (
    <Layout pageIndex={1}>
      <Accordion allowMultiple>
        <Category title="TechCodes" text="hola" />
        <Category title="TechCodes" text="hola" />
        <Category title="TechCodes" text="hola" />
      </Accordion>
    </Layout>
  );
};

export default Experience;
