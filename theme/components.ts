import { ComponentStyleConfig } from "@chakra-ui/theme"

const Button: ComponentStyleConfig = {
  baseStyle: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "lg",
    fontWeight: "semibold",
    textAlign: "start",
    paddingX: "5",
    transition: "background 0.2s ease",
    shadow: "md",
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "blue.600",
    },
  },
  variants: {
    green: {
      bg: "green.500",
      color: "white",
      _hover: {
        bg: "green.600",
      },
    },
    outline: {
      bg: "white",
      borderWidth: "1px",
      _hover: {
        bg: "gray.50",
      },
    },
    white: {
      color: "gray.900",
      bg: "white",
      _hover: {
        bg: "gray.100",
      },
    },
    black: {
      bg: "black",
      color: "white",
      _hover: {
        bg: "gray.900",
      },
    },
  },
  sizes: {
    sm: {
      px: "4",
      py: "2",
    },
    md: {
      height: "14",
    },
  },
  defaultProps: {
    size: "md",
    variant: "white",
  },
}

export const components = {
  Button,
}
