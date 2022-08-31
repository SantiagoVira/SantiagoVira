import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Layout from "@components/layout";
import Title from "@components/title";
import type { NextPage } from "next";
import { Animation, spinUpVariants } from "@components/animation/animations";
import SlideUpAnimation from "@components/animation/slideUpAnimation";
import client from "@components/cms/cms-data";
import ContactLink from "@components/contact-link";
import { IoMdMail } from "react-icons/io";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Home: NextPage<{ descriptionText: any[] }> = ({ descriptionText }) => {
  return (
    <Layout p="3rem" justifyContent="space-between">
      <Flex flexDirection="column" w="100%">
        <Animation variants={spinUpVariants}>
          <Heading display="inline-block" fontSize="3.5rem" mb="2rem">
            Hi, I&apos;m Santiago.
          </Heading>
        </Animation>
        <SlideUpAnimation text={descriptionText} />
      </Flex>

      <Flex flexDirection="column" w="fit-content">
        <Text fontSize="1.6rem" display="inline-block">
          Contact Me
        </Text>
        <Divider />
        <Flex py="0.5rem" pr="3rem" gap="0.5rem">
          <ContactLink link="mailto:santiagovira06@gmail.com" Icon={IoMdMail} />
          <ContactLink
            link="https://github.com/SantiagoVira"
            Icon={AiFillGithub}
          />

          <ContactLink
            link="https://www.instagram.com/santiagovira_/"
            Icon={AiOutlineInstagram}
          />
          <ContactLink
            link="https://www.linkedin.com/in/santiago-vira/"
            Icon={AiFillLinkedin}
          />
        </Flex>
      </Flex>
    </Layout>
  );
};

export async function getStaticProps() {
  const descriptionTextArray =
    await client.fetch(`*[_type == 'textChunk' && title == "about"] {
    body
  }`);

  const descriptionText = descriptionTextArray[0].body.map(
    (chunk: any) => chunk.children[0].text
  );

  return {
    props: {
      descriptionText,
    },
  };
}

export default Home;
