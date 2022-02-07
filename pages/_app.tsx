import { ChakraProvider } from "@chakra-ui/provider"
import theme from "lib/theme"
import "../styles/prism.css"

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
