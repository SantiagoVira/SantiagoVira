import { SimpleGrid, Heading } from "@chakra-ui/react";
import client, { projectDataType } from "@components/cms/cms-data";
import Layout from "@components/layout";
import Navbar from "@components/navigation/navbar";
import Project from "@components/projects/project";
import Title from "@components/title";
import type { NextPage } from "next";

const Projects: NextPage<{ projectData: projectDataType[] }> = ({
  projectData,
}) => {
  return (
    <Layout pageIndex={0}>
      <SimpleGrid columns={[1, 2, 3]} gap="1rem">
        {projectData.map((project, i) => {
          return <Project key={i} {...project} />;
        })}
      </SimpleGrid>
    </Layout>
  );
};

export async function getStaticProps() {
  const projectData =
    await client.fetch(`*[_type == 'project'] | order(index asc) {
    title,
    "slug": slug.current,
    link,
    "image": image.asset->url,
    body
  }`);

  return {
    props: {
      projectData,
    },
  };
}

export default Projects;
