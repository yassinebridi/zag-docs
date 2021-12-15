import { ChakraProvider } from "@chakra-ui/provider"
import theme from "lib/theme"

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
