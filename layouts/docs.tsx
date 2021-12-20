import { Box, chakra } from "@chakra-ui/react"
import { Sidebar } from "components/sidebar"
import { TableOfContents } from "components/toc"
import { useRouter } from "next/router"

export default function DocsLayout({ children, toc }) {
  const { asPath } = useRouter()
  const isComponent = asPath.includes("/components/")

  return (
    <chakra.main pt="6.5rem" px={{ base: "16", md: "8" }}>
      <Box maxW="8xl" mx="auto" position="relative">
        <Box
          display="flex"
          flexDirection="row"
          gap="48px"
          alignItems="flex-start"
        >
          <Box width="14rem">
            <Sidebar />
          </Box>
          <Box flex="1" mt="12" mb="40" px="8">
            {children}
          </Box>
          <Box
            width="14rem"
            position="sticky"
            top="xl"
            visibility={!isComponent ? "hidden" : undefined}
          >
            <TableOfContents data={toc} />
          </Box>
        </Box>
      </Box>
    </chakra.main>
  )
}
