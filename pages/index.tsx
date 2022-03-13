import Icon from "@chakra-ui/icon"
import { Box, Flex, Text } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { Button } from "components/button"
import {
  AccessibilityIcon,
  ArrowRightIcon,
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

export default function Home() {
  return (
    <Box>
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
              UI components powered by Finite State Machines.
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
        <Box bg="green.100" padding={{ base: "0", md: "20" }}>
          <chakra.h2
            fontSize="6xl"
            mb="8"
            maxW="28ch"
            lineHeight="short"
            fontWeight="bold"
          >
            UI machines provides the component SDK for the Web.
          </chakra.h2>

          <Link href="/overview/introduction" passHref>
            <Button as="a" variant="black" display="inline-flex">
              Get Started
            </Button>
          </Link>

          <Flex gap="20" mt="12">
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
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
