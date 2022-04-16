import Icon from "@chakra-ui/icon"
import { Box, Flex, FlexProps, HStack } from "@chakra-ui/layout"
import { paginate } from "lib/pagination-utils"
import Link from "next/link"
import { useRouter } from "next/router"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import { useFramework } from "./framework"

export function usePagination() {
  const { framework } = useFramework()
  const { asPath } = useRouter()
  const { prev, next } = paginate({ framework, current: asPath })
  return { prev, next, hasPrev: !!prev, hasNext: !!next }
}

export function Pagination(props: FlexProps) {
  const { prev, next } = usePagination()
  return (
    <Flex
      align="center"
      justify="space-between"
      mb="10"
      color="gray.700"
      {...props}
    >
      {prev ? (
        <Link href={prev.url} passHref>
          <Box as="a" rel="prev">
            <HStack spacing="1">
              <Icon as={HiChevronLeft} />
              <span>Previous</span>
            </HStack>
            <Box color="green.500" fontWeight="semibold" fontSize="md" mt="1">
              {prev.label}
            </Box>
          </Box>
        </Link>
      ) : (
        <div className="pagination__empty" />
      )}
      {next ? (
        <Link href={next.url} passHref>
          <Box as="a" rel="next">
            <HStack spacing="1" justify="flex-end">
              <span>Next</span>
              <Icon as={HiChevronRight} />
            </HStack>
            <Box color="green.500" fontWeight="semibold" fontSize="md" mt="1">
              {next.label}
            </Box>
          </Box>
        </Link>
      ) : (
        <div className="pagination__empty" />
      )}
    </Flex>
  )
}
