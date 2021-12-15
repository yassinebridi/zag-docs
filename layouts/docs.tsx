import { chakra } from "@chakra-ui/system"

export function Container({ children }) {
  return (
    <chakra.main px={{ base: "16", md: "8" }}>
      <chakra.div maxW="6xl" mx="auto">
        <chakra.div display="flex">
          <chakra.aside width="256px"></chakra.aside>
          <chakra.div flex="1" mt="12" mb="40" pl={{ sm: "8" }}>
            {children}
          </chakra.div>
        </chakra.div>
      </chakra.div>
    </chakra.main>
  )
}
