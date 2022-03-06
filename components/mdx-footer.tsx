import { Box, Flex } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { HiChevronRight, HiChevronLeft } from "react-icons/hi"

export function MdxFooter() {
  return (
    <chakra.footer fontSize="sm" mt="12">
      <Flex
        align="center"
        justify="space-between"
        mb="10"
        color="gray.700"
        fontWeight="semibold"
      >
        <Flex align="center" as="a" href="#" gap="3">
          <HiChevronLeft />
          Min-Width
        </Flex>
        <Flex align="center" as="a" href="#" gap="3">
          Height
          <HiChevronRight />
        </Flex>
      </Flex>

      <Box
        pt="10"
        borderTopWidth="1px"
        display={{ sm: "flex" }}
        justifyContent="space-between"
      >
        <Box mb={{ base: "6", sm: "0" }}>
          <p>
            Proudly made in
            <chakra.span role="img" aria-label="Nigeria" mx="2">
              🇳🇬
            </chakra.span>
            by Segun Adebayo
          </p>
        </Box>
        <a href="#">Edit this page on GitHub</a>
      </Box>

      <Box fontSize="xs" mt="4" mb="28" opacity={0.5}>
        Copyright © {new Date().getFullYear()}
      </Box>
    </chakra.footer>
  )
}
