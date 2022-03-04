import { Box, Spacer } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { MdxFooter } from "components/mdx-footer"
import { SearchTrigger } from "components/search-trigger"
import { Sidebar } from "components/sidebar"
import { TableOfContents } from "components/toc"
import { TopNavigation } from "components/top-navigation"
import { useRouter } from "next/router"
import React from "react"

type DocsLayoutProps = {
  children: React.ReactNode
  toc?: any[]
}

export default function DocsLayout({ children, toc }: DocsLayoutProps) {
  const { asPath } = useRouter()
  const isComponent = asPath.includes("/components/")

  return (
    <Box>
      <TopNavigation />
      <chakra.div pt="10">
        <Box maxW="8xl" mx="auto" px={{ sm: "6", base: "4", md: "8" }}>
          <Box
            display={{ base: "none", lg: "block" }}
            position="fixed"
            zIndex={20}
            bottom="0"
            top="3.8rem"
            left="max(0px, calc(50% - 45rem))"
            right="auto"
            width="19.5rem"
            pb="10"
            px="8"
            overflowY="auto"
          >
            <SearchTrigger mt="10" />
            <Spacer height="5" />
            <Sidebar />
          </Box>

          <Box
            as="main"
            className="mdx-content"
            pl={{ lg: "19.5rem" }}
            pt="8"
            pr={{ xl: "16" }}
          >
            <Box
              maxW={{ base: "3xl", xl: "none" }}
              mr={{ xl: "15.5rem" }}
              mx="auto"
            >
              {children}
              <MdxFooter />
            </Box>
          </Box>

          <Box
            py="10"
            px="8"
            overflowY="auto"
            position="fixed"
            top="3.8rem"
            bottom="0"
            right="max(0px,calc(50% - 45rem))"
            display={{ base: "none", xl: "block" }}
            width="19.5rem"
            visibility={!isComponent ? "hidden" : undefined}
          >
            <TableOfContents data={toc} />
          </Box>
        </Box>
      </chakra.div>
    </Box>
  )
}
