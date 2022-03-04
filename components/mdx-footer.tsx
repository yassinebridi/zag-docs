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
        pb="28"
        borderTopWidth="1px"
        display={{ sm: "flex" }}
        justifyContent="space-between"
        color="gray.500"
      >
        <Box mb={{ base: "6", sm: "0" }}>
          <p>
            Proudly made in
            <chakra.span role="img" aria-label="Nigeria" mx="2">
              🇳🇬
            </chakra.span>
            by Segun Adebayo.
          </p>
          <p>Copyright © {new Date().getFullYear()}</p>
        </Box>
        <a href="#">Edit this page on GitHub</a>
      </Box>
    </chakra.footer>
  )
}
