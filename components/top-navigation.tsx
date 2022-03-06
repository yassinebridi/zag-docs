import Icon from "@chakra-ui/icon"
import { Box, Flex, HStack } from "@chakra-ui/layout"
import { GithubIcon } from "components/icons"

export function TopNavigation() {
  return (
    <Box
      bg="white"
      position="sticky"
      top="0"
      width="full"
      zIndex={50}
      py="4"
      px={{ base: "4", sm: "6", md: "8" }}
      borderBottomWidth="1px"
    >
      <Flex align="center" justify="space-between" maxW="8xl" mx="auto">
        <div>Logo</div>
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
          <Flex
            as="a"
            href="https://github.com/chakra-ui/ui-machines"
            target="_blank"
          >
            <Box srOnly>UI machines on Github</Box>
            <Icon as={GithubIcon} fontSize="lg" color="gray.500" />
          </Flex>
        </HStack>
      </Flex>
    </Box>
  )
}
