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
} from "@chakra-ui/react";
import { Cross } from "hamburger-react";
import NextLink from "next/link";
import type React from "react";
import { Tab } from "./tab";
import { navigationTabs, ITab } from "./tabs";

interface INavigationProps {
  tabList?: ITab[];
  selectedTab?: ITab;
}

export const Logo: React.FC<ImageProps> = (props) => (
  <NextLink href="/" passHref>
    <Link>
      <Image src="/Fox.svg" alt="logo" height="2.75rem" {...props} />
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
        <Logo />
      </Flex>
      <Flex flex={2}>
        <Flex w="50%" justifyContent="center">
          <Flex alignItems="center" gap="2.5rem">
            {navigationTabs.map((tab, index) => (
              <Tab
                tab={tab}
                key={index}
                selected={tab === selectedTab}
                passQuery={false}
              />
            ))}
          </Flex>
        </Flex>
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
        <Logo />
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
          </Flex>
        </Box>
      </Collapse>
    </>
  );
};
