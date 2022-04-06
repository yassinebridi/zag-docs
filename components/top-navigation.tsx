import Icon from "@chakra-ui/icon"
import { Box, Center, Flex, HStack } from "@chakra-ui/layout"
import { GithubIcon } from "components/icons"
import Link from "next/link"
import { ElementType } from "react"
import { FaDiscord } from "react-icons/fa"
import { Logo } from "./logo"

type IconLinkProps = {
  label: string
  href: string
  icon: ElementType
}

function IconLink({ label, href, icon }: IconLinkProps) {
  return (
    <Center width="6" height="6" as="a" href={href} target="_blank">
      <Box srOnly>{label}</Box>
      <Icon as={icon} fontSize="lg" color="gray.500" />
    </Center>
  )
}

export function TopNavigation() {
  return (
    <Box
      bg="whiteAlpha.900"
      backdropFilter="auto"
      backdropBlur="sm"
      position="sticky"
      top="0"
      width="full"
      zIndex={50}
      py="4"
      borderBottomWidth="1px"
      borderBottomColor="gray.100"
    >
      <Flex
        align="center"
        justify="space-between"
        maxW="8xl"
        mx="auto"
        px={{ base: "4", sm: "6", md: "8" }}
      >
        <Link href="/" passHref>
          <a>
            <Logo color="#000" height="8" />
          </a>
        </Link>
        <HStack spacing="8">
          <nav>
            <HStack
              as="ul"
              spacing="8"
              listStyleType="none"
              fontWeight="semibold"
              fontSize="sm"
            >
              <li>Tutorials</li>
              <li>API</li>
              <li>Components</li>
            </HStack>
          </nav>
          <HStack spacing="4">
            <IconLink
              href="https://github.com/chakra-ui/ui-machines"
              icon={GithubIcon}
              label="UI machines on Github"
            />
            <IconLink
              href="#"
              icon={FaDiscord}
              label="Join the Discord server"
            />
          </HStack>
        </HStack>
      </Flex>
    </Box>
  )
}
