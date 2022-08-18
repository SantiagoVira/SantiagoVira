import {
  Avatar,
  Box,
  Collapse,
  Divider,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  Image,
  ImageProps,
  Button,
} from "@chakra-ui/react";
import ResumeButton from "@components/experience/resume-button";
import Logo from "@components/logo";
import { Cross } from "hamburger-react";
import NextLink from "next/link";
import type React from "react";
import { Tab } from "./tab";
import { navigationTabs, ITab } from "./tabs";

export interface INavigationProps {
  selectedTab?: ITab;
}

export const LogoLink: React.FC<{ highlight?: boolean }> = ({ highlight }) => (
  <NextLink href="/" passHref>
    <Link>
      <Logo color={highlight ? "white" : "#ffffffa1"} />
    </Link>
  </NextLink>
);

export const Navigation: React.FC<INavigationProps> = ({ selectedTab }) => {
  return (
    <Flex
      w="100%"
      mx={{ md: "auto" }}
      px="1rem"
      pt="2rem"
      pb="1rem"
      maxW="100rem"
      justifyContent="space-between">
      <Flex flex={1}>
        <LogoLink highlight={selectedTab === undefined} />
      </Flex>
      <Flex flex={1} justifyContent="center" alignItems="center" gap="2.5rem">
        {navigationTabs.map((tab, index) => (
          <Tab
            tab={tab}
            key={index}
            selected={tab === selectedTab}
            passQuery={false}
          />
        ))}
      </Flex>
      <Flex flex={1} justifyContent="flex-end">
        <ResumeButton />
      </Flex>
    </Flex>
  );
};

export const MobileNavigation: React.FC<INavigationProps> = ({
  selectedTab,
}) => {
  const controls = useDisclosure();

  return (
    <>
      <Flex
        px="1rem"
        py="1rem"
        maxW="100rem"
        transition="background-color 0.25s ease-in-out"
        bgColor={controls.isOpen ? "bg.950" : undefined}
        justifyContent="space-between"
        alignItems="center">
        <LogoLink highlight={selectedTab === undefined} />
        <Cross onToggle={controls.onToggle} />
      </Flex>
      <Collapse in={controls.isOpen}>
        <Box w="100vw" bgColor="bg.950">
          <Flex flexDir="column" gap="1rem" px="1rem" py="1rem">
            {navigationTabs.map((tab, index) => (
              <Tab
                tab={tab}
                key={index}
                selected={tab === selectedTab}
                passQuery={false}
              />
            ))}
            <Divider />
            <Link href="/Santiago_Vira_Resume.pdf" download>
              Download my resume
            </Link>
          </Flex>
        </Box>
      </Collapse>
    </>
  );
};
