import { Box, chakra } from "@chakra-ui/react"

export default function DocsLayout({ children }) {
  return (
    <chakra.main pt="6.5rem" px={{ base: "16", md: "8" }}>
      <Box maxW="8xl" mx="auto">
        <Box display="flex" flexDirection="row">
          <Box width="19.5rem">Side menu</Box>
          <Box flex="1" mt="12" mb="40">
            {children}
          </Box>
          <Box width="19.5rem">Side menu</Box>
        </Box>
      </Box>
    </chakra.main>
  )
}
