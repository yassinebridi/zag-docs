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
    minWidth: "180px",
    transition: "background 0.2s ease",
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
    ghost: {
      color: "gray.900",
      bg: "gray.200",
      _hover: {
        bg: "gray.300",
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
    variant: "ghost",
  },
}

export const components = {
  Button,
}
