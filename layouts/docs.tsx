import { Box, chakra } from "@chakra-ui/react"
import { Sidebar } from "components/sidebar"

export default function DocsLayout({ children }) {
  return (
    <chakra.main pt="6.5rem" px={{ base: "16", md: "8" }}>
      <Box maxW="8xl" mx="auto">
        <Box display="flex" flexDirection="row" gap="48px">
          <Box width="14rem">
            <Sidebar />
          </Box>
          <Box flex="1" mt="12" mb="40" px="8">
            {children}
          </Box>
          <Box width="14rem">Side menu</Box>
        </Box>
      </Box>
    </chakra.main>
  )
}
