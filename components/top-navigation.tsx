import Icon from "@chakra-ui/icon"
import { Box, Flex } from "@chakra-ui/layout"
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
        <Flex align="center" gap="8">
          <nav>
            <Box
              as="ul"
              display="flex"
              alignItems="center"
              gap="8"
              listStyleType="none"
              fontWeight="semibold"
              fontSize="sm"
            >
              <li>Tutorials</li>
              <li>API</li>
              <li>Components</li>
            </Box>
          </nav>
          <Flex
            as="a"
            href="https://github.com/chakra-ui/ui-machines"
            target="_blank"
          >
            <Box srOnly>UI machines on Github</Box>
            <Icon as={GithubIcon} fontSize="lg" color="gray.500" />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
