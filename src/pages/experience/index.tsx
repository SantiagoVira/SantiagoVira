import { Accordion } from "@chakra-ui/react";
import client, { experienceSectionType } from "@components/cms/cms-data";
import { Category } from "@components/experience/category";
import Layout from "@components/layout";
import type { NextPage } from "next";

const Experience: NextPage<{ experienceData: experienceSectionType[] }> = ({
  experienceData,
}) => {
  return (
    <Layout pageIndex={1}>
      <Accordion allowMultiple>
        {experienceData.map((section, i) => (
          <Category key={i} {...section} />
        ))}
      </Accordion>
    </Layout>
  );
};

export async function getStaticProps() {
  const experienceData = await client.fetch(`*[_type == 'experienceSection']{
    title,
    position,
    time,
    body
  }`);

  return {
    props: {
      experienceData,
    },
  };
}

export default Experience;
