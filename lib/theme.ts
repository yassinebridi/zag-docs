export const space = {
  "4xl": "8rem",
  "3xl": "6rem",
  "2xl": "4rem",
  xl: "2.5rem",
  lg: "1.5rem",
  md: "1rem",
  sm: "0.75rem",
  xs: "0.5rem",
  "2xs": "0.25rem",
}

const sizes = {
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
}

const theme = {
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
  sizes,
  space,
  colors: {
    bg: "#fff",
    fg: "#000",
    text: "#e5e5e5",
    gray: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },
    red: {
      lighter: "#F7D4D6",
      light: "#FF1A1A",
      default: "#E00",
      dark: "#C50000",
    },
    orange: {
      lighter: "#FFEFCF",
      light: "#F7B955",
      default: "#F5A623",
      dark: "#AB570A",
    },
    blue: {
      lighter: "#D3E5FF",
      light: "#3291FF",
      default: "#0070F3",
      dark: "#0761D1",
    },
    violet: {
      lighter: "#D8CCF1",
      light: "#8A63D2",
      default: "#7928CA",
      dark: "#4C2889",
    },
    cyan: {
      lighter: "#AAFFEC",
      light: "#79FFE1",
      default: "#50E3C2",
      dark: "#29BC9B",
    },
  },
  styles: {
    global: {
      body: {
        bg: "#171717",
        color: "text",
        lineHeight: "1.75",
      },
      ":root": {
        "--font-fallback":
          '-apple-system,"BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
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
  fonts: {
    heading: "system-ui",
    body: "system-ui",
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
