import { ChakraProvider } from "@chakra-ui/react"
import theme from "lib/theme"
import "../styles/prism.css"

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
