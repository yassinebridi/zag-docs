import foundations from "@chakra-ui/theme/foundations"

const theme = {
  ...foundations,
  config: {
    useSystemColorMode: true,
    initialColorMode: "light",
  },
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  styles: {
    global: {
      body: {
        bg: "#F1F0EE",
      },
      mark: {
        bg: "transparent",
      },
      li: {
        marginY: "2xs",
      },
      "ol, ul": {
        marginY: "md",
        paddingLeft: "lg",
      },
      "h2,h3,h4": {
        scrollMarginTop: "32px",
        "&:hover": {
          "a.anchor": {
            opacity: 1,
          },
        },
      },
      "p+p": {
        marginTop: "xl",
      },
      "a.anchor": {
        opacity: 0,
        transition: "opacity 0.2s ease-in-out",
        mx: "2xs",
        "&:before": {
          content: `"#"`,
        },
      },
    },
  },
  textStyles: {
    h1: {
      fontFamily: "heading",
      color: "white",
      fontWeight: 800,
      letterSpacing: "-0.05rem",
      fontSize: "3.5rem",
      marginBottom: "md",
      lineHeight: "1.2",
    },
    h2: {
      fontWeight: 800,
      fontFamily: "heading",
      fontSize: "2rem",
      marginTop: "3rem",
      marginBottom: "sm",
      lineHeight: "1.4",
    },
    h3: {
      fontFamily: "heading",
      fontWeight: 500,
      color: "gray.100",
      fontSize: "1.15rem",
      marginTop: "xl",
      marginBottom: "xs",
      lineHeight: "1.5",
    },
    h4: {
      fontWeight: 500,
      color: "gray.100",
      marginTop: "lg",
      marginBottom: "2xs",
      lineHeight: "1.5",
    },
    a: {
      cursor: "pointer",
      fontWeight: "600",
      textDecoration: "underline",
      textDecorationColor: "cyan.default",
      textDecorationThickness: "1px",
      textUnderlineOffset: "2px",
      _hover: {
        textDecorationThickness: "2px",
      },
    },
  },
}

export default theme
