import { Box, Flex, HStack } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { useFramework } from "lib/framework"
import { paginate } from "lib/pagination-utils"
import Link from "next/link"
import { useRouter } from "next/router"
import { HiChevronRight, HiChevronLeft } from "react-icons/hi"

export function MdxFooter() {
  const framework = useFramework()
  const { asPath } = useRouter()
  const { prev, next } = paginate({ framework, current: asPath })
  return (
    <chakra.footer fontSize="sm" mt="12">
      <Flex
        align="center"
        justify="space-between"
        mb="10"
        color="gray.700"
        fontWeight="semibold"
      >
        <Link href={prev?.url} passHref>
          <HStack as="a" visibility={!prev ? "hidden" : undefined} spacing="3">
            <HiChevronLeft />
            <span>{prev?.label}</span>
          </HStack>
        </Link>
        <Link href={next?.url} passHref>
          <HStack visibility={!prev ? "hidden" : undefined} as="a" spacing="3">
            <span>{next?.label}</span>
            <HiChevronRight />
          </HStack>
        </Link>
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
