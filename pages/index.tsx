import Icon from "@chakra-ui/icon"
import {
  Box,
  Center,
  Flex,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { Button } from "components/button"
import {
  AccessibilityIcon,
  ArrowRightIcon,
  CheckIcon,
  FrameworkAgnosticIcon,
  PlayIcon,
  ReactIcon,
  SolidIcon,
  StatechartIcon,
  VueIcon,
} from "components/icons"
import { Illustration } from "components/illustration"
import { ElementType } from "react"
import { TopNavigation } from "components/top-navigation"
import Link from "next/link"
import { useMDX } from "components/mdx-components"
import { getSnippetDoc } from "lib/get-paths"
import { MultiframeworkTabs } from "components/mutli-framework"
import { NextSeo } from "next-seo"
import siteConfig from "site.config"

type FeatureItemProps = {
  title: string
  icon: ElementType
  children: string
}

function FeatureItem(props: FeatureItemProps) {
  const { title, children, icon } = props
  return (
    <Box fontSize="lg">
      <Icon as={icon} fontSize="6xl" />
      <Box mt="4">
        <Text fontWeight="bold">{title}</Text>
        <Text mt={2}>{children}</Text>
      </Box>
    </Box>
  )
}

function CodeArea() {
  const doc = getSnippetDoc("website/snippet")
  const Component = useMDX(doc.body.code)
  return (
    <Box
      height="full"
      sx={{
        "pre[class*=language-]": {
          bg: "green.50",
          margin: "0",
          padding: "64px 24px !important",
          height: "full",
        },
      }}
    >
      {Component}
    </Box>
  )
}

export default function Home() {
  return (
    <Box>
      <NextSeo title={siteConfig.title} />
      <TopNavigation />
      <Box as="header" position="relative" maxW="8xl" mx="auto">
        <Box px={{ base: "4", sm: "6", md: "8" }}>
          <Box pos="relative" maxW="4xl" pt="24">
            <chakra.h1
              letterSpacing="tight"
              fontWeight="bold"
              fontSize={{ base: "4xl", sm: "5xl", lg: "7xl" }}
              lineHeight="short"
            >
              UI components powered by Finite State Machines
            </chakra.h1>
            <Text
              fontSize="xl"
              maxW="xl"
              mt="6"
              sx={{ mark: { color: "green.500", fontWeight: "semibold" } }}
            >
              A collection of framework-agnostic UI component patterns like{" "}
              <mark>accordion</mark>, <mark>menu</mark>, and <mark>dialog</mark>{" "}
              that can be used to build design systems for React, Vue and
              Solid.js
            </Text>
          </Box>

          <Icon
            display={{ base: "none", md: "initial" }}
            as={Illustration}
            pos="absolute"
            bottom="0"
            right="0"
            width="min(50%,48vw)"
            height="auto"
          />

          <Flex mt="8" mb="12" gap="5" fontSize="lg">
            <Link href="/overview/introduction" passHref>
              <Button as="a" variant="green" gap="8">
                <span>Get Started</span>
                <Icon as={ArrowRightIcon} />
              </Button>
            </Link>
            <Button gap="2">
              <Icon as={PlayIcon} />
              <span>Watch Demo</span>
            </Button>
          </Flex>

          <Flex gap="12">
            <ReactIcon />
            <VueIcon />
            <SolidIcon />
          </Flex>
        </Box>
      </Box>

      <Box
        as="section"
        px={{ base: "4", sm: "6", md: "8" }}
        my="32"
        maxW="8xl"
        mx="auto"
      >
        <Box bg="green.100" padding={{ base: "14", md: "20" }}>
          <chakra.h2
            fontSize={{ base: "4xl", md: "6xl" }}
            mb="8"
            maxW="24ch"
            lineHeight="short"
            fontWeight="bold"
          >
            Zag provides the component API for the Web.
          </chakra.h2>

          <Link href="/overview/introduction" passHref>
            <Button as="a" variant="black" display="inline-flex">
              Get Started
            </Button>
          </Link>

          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: "8", md: "20" }}
            mt="12"
          >
            <FeatureItem icon={StatechartIcon} title="Powered by Statecharts">
              Simple, resilient component logic. Write component logic once and
              use anywhere.
            </FeatureItem>
            <FeatureItem icon={AccessibilityIcon} title="Accessible">
              Built-in adapters that connects machine output to DOM semantics in
              a WAI-ARIA compliant way.
            </FeatureItem>
            <FeatureItem
              icon={FrameworkAgnosticIcon}
              title="Framework agnostic"
            >
              Component logic is largely JavaScript code and can be consumed in
              any JS framework.
            </FeatureItem>
          </Stack>
        </Box>
      </Box>

      <Box
        as="section"
        px={{ base: "4", sm: "6", md: "8" }}
        my="32"
        maxW="8xl"
        mx="auto"
      >
        <Flex
          gap="64px"
          direction={{ base: "column", xl: "row" }}
          align={{ base: "flex-start", xl: "center" }}
        >
          <Box flex="1" fontSize="xl">
            <chakra.h2
              fontSize={{ base: "4xl", md: "6xl" }}
              mb="8"
              maxW="24ch"
              lineHeight="shorter"
              fontWeight="bold"
            >
              Machines handle the logic. You handle the UI
            </chakra.h2>
            <Text maxW="64ch">
              Zag machine APIs are completely headless and unstyled. Use your
              favorite styling solution and get it matching your design system.
            </Text>

            <List spacing="5" mt="8">
              {[
                "Install and import the component you need",
                "Consume the component",
                "Define your UI and connect logic to",
              ].map((item, index) => (
                <ListItem key={index} display="flex" alignItems="flex-start">
                  <ListIcon fontSize="3xl" mr="2" as={CheckIcon} />
                  <span>{item}</span>
                </ListItem>
              ))}
            </List>
          </Box>

          <Center
            position="relative"
            width="full"
            maxW={{ xl: "800px" }}
            minHeight="500px"
          >
            <Box
              width="100%"
              mx="auto"
              height="84%"
              position="absolute"
              bg="green.400"
              rounded="2xl"
            />
            <Box
              width={{ base: "640px", xl: "80%" }}
              mx="auto"
              bg="white"
              rounded="2xl"
              shadow="base"
              height="full"
              position="relative"
            >
              <CodeArea />
            </Box>
          </Center>
        </Flex>
      </Box>

      <Box
        as="section"
        px={{ base: "4", sm: "6", md: "8" }}
        my="32"
        maxW="8xl"
        mx="auto"
      >
        <Box>
          <chakra.h2
            maxW="24ch"
            letterSpacing="tight"
            fontWeight="bold"
            fontSize={{ base: "4xl", sm: "5xl", lg: "7xl" }}
            lineHeight="normal"
          >
            Work in your favorite JSX framework
          </chakra.h2>
          <Text fontSize="xl" maxW="560px" mt="6">
            Finite state machines for building accessible design systems and UI
            components. Works with React, Vue and Solid.
          </Text>
        </Box>

        <MultiframeworkTabs />
      </Box>
    </Box>
  )
}
