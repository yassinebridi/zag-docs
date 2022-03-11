import foundations from "@chakra-ui/theme/foundations"

const theme = {
  ...foundations,
  fonts: {
    ...foundations.fonts,
    heading: "'Spline Sans', sans-serif",
    body: "'Spline Sans', sans-serif",
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
  styles: {
    global: {
      "@font-face": {
        fontFamily: "'Spline Sans'",
        src: "url('/fonts/spline-sans.woff2') format('woff2')",
        fontWeight: "100 1000",
      },
      "body, html": {
        fontFamily: "body",
        textRendering: "geometricprecision",
        textSizeAdjust: "100%",
        WebkitFontSmoothing: "antialiased",
      },
      "*": {
        borderColor: "gray.200",
        borderStyle: "solid",
      },
      mark: {
        bg: "transparent",
      },
      ".mdx-content": {
        li: {
          marginY: "1",
        },
        "ol, ul": {
          marginY: "5",
          paddingLeft: "4",
        },
        "h2,h3,h4": {
          scrollMarginTop: "24",
          "&:hover": {
            "a.anchor": { opacity: 1 },
          },
          "a:focus": { opacity: 1 },
        },
        "p + p": {
          marginTop: "6",
        },
        "a.anchor": {
          opacity: 0,
          transition: "opacity 0.2s ease-in-out",
          marginX: "3",
          "&:before": {
            content: `"#"`,
          },
        },
      },
    },
  },
  layerStyles: {
    blockquote: {
      marginY: "5",
      paddingX: "4",
      paddingY: "3",
      bg: "green.100",
      rounded: "4px",
    },
    inlineCode: {
      bg: "blackAlpha.100",
      rounded: "sm",
      paddingY: "0.5",
      paddingX: "1.5",
      fontSize: "0.8em",
      fontFamily: "mono",
      fontWeight: "bold",
      color: "red.600",
    },
  },
  textStyles: {
    h1: {
      fontFamily: "heading",
      letterSpacing: "tight",
      fontWeight: "900",
      fontSize: { base: "3xl", md: "4xl" },
      marginBottom: "5",
      lineHeight: "1.2",
      maxWidth: "85ch",
    },
    h2: {
      fontFamily: "heading",
      fontWeight: "bold",
      fontSize: { base: "xl", md: "2xl" },
      marginTop: "12",
      marginBottom: "3",
      lineHeight: "1.4",
    },
    h3: {
      fontFamily: "heading",
      fontWeight: "semibold",
      fontSize: "xl",
      marginTop: "6",
      marginBottom: "4",
      lineHeight: "1.5",
    },
    h4: {
      fontWeight: "semibold",
      marginTop: "6",
      marginBottom: "3",
      lineHeight: "1.5",
    },
    a: {
      cursor: "pointer",
      fontWeight: "medium",
      textDecoration: "underline",
      textDecorationColor: "cyan.default",
      textDecorationThickness: "1px",
      textUnderlineOffset: "2px",
      _hover: {
        textDecorationThickness: "2px",
      },
    },
    sidebarLink: {
      display: "block",
      paddingY: "1",
      transition: "color 0.2s ease-in-out",
      _hover: {
        textDecoration: "underline",
        textUnderlineOffset: "2px",
      },
      _activeLink: {
        textDecoration: "underline",
        textUnderlineOffset: "2px",
        fontWeight: "bold",
      },
    },
  },
}

export default theme
