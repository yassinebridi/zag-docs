import foundations from "@chakra-ui/theme/foundations"

const theme = {
  ...foundations,
  config: {
    useSystemColorMode: true,
    initialColorMode: "light",
  },
  styles: {
    global: {
      "*": {
        borderColor: "gray.200",
      },
      body: {
        bg: "gray.50",
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
          scrollMarginTop: "8",
          "&:hover": {
            "a.anchor": {
              opacity: 1,
            },
          },
        },
        "p+p": {
          marginTop: "8",
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
      mt: "5",
      px: "4",
      py: "3",
      bg: "orange.100",
      borderLeftWidth: "2px",
      borderLeftColor: "orange.500",
      rounded: "4px",
    },
    inlineCode: {
      bg: "blackAlpha.100",
      rounded: "sm",
      py: "0.5",
      px: "1.5",
      fontSize: "0.85em",
      fontFamily: "Menlo",
    },
  },
  textStyles: {
    h1: {
      fontFamily: "heading",
      letterSpacing: "tight",
      fontWeight: "extrabold",
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
      fontWeight: "regular",
      fontSize: "2xl",
      marginTop: "xl",
      marginBottom: "4",
      lineHeight: "1.5",
    },
    h4: {
      fontWeight: "regular",
      marginTop: "lg",
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
      px: "6",
      py: "1",
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
