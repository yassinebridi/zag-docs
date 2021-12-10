const theme = {
  config: {
    useSystemColorMode: true,
    initialColorMode: "light",
  },
  colors: {
    bg: "#fff",
    fg: "#000",
    accent: {
      "100": "#FAFAFA",
      "200": "#EAEAEA",
      "300": "#999",
      "400": "#888",
      "500": "#666",
      "600": "#444",
      "700": "#333",
      "800": "#111",
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
  fonts: {
    heading: "The Seasons, serif",
    body: '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;',
  },
  textStyles: {
    h1: {
      fontSize: "3rem",
      letterSpacing: "-.066875rem",
      fontWeight: 700,
      lineHeight: "3.5rem",
    },
    h2: {
      fontSize: "2rem",
      letterSpacing: "-.049375rem",
      fontWeight: 600,
      lineHeight: "2.5rem",
    },
    h3: {
      fontSize: "1.5rem",
      letterSpacing: "-.029375rem",
      fontWeight: 600,
      lineHeight: "2rem",
    },
    h4: {
      fontSize: "1.25rem",
      letterSpacing: "-.020625rem",
      fontWeight: 600,
      lineHeight: "1.5rem",
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.5rem",
    },
    h6: {
      fontSize: ".875rem",
      fontWeight: 400,
      lineHeight: "1.25rem",
    },
  },
};

export default theme;
