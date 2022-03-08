import { Box, Flex, HStack } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { usePagination } from "lib/use-pagination"
import Link from "next/link"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"

export function MdxFooter() {
  const { prev, next } = usePagination()
  return (
    <chakra.footer fontSize="sm" mt="12">
      <Flex
        align="center"
        justify="space-between"
        mb="10"
        color="gray.700"
        fontWeight="semibold"
      >
        {prev ? (
          <Link href={prev.url} passHref>
            <HStack as="a" spacing="3" rel="prev">
              <HiChevronLeft />
              <span>{prev.label}</span>
            </HStack>
          </Link>
        ) : (
          <div className="pagination__empty" />
        )}
        {next ? (
          <Link href={next.url} passHref>
            <HStack as="a" spacing="3" rel="next">
              <span>{next.label}</span>
              <HiChevronRight />
            </HStack>
          </Link>
        ) : (
          <div className="pagination__empty" />
        )}
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
