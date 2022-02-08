import {
  chakra,
  forwardRef,
  HTMLChakraProps,
  useStyleConfig,
} from "@chakra-ui/system"
import { StyleConfig } from "@chakra-ui/theme-tools"

const styleConfig: StyleConfig = {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    fontSize: "lg",
    fontWeight: "semibold",
    textAlign: "start",
    rounded: "lg",
    paddingX: "5",
    transition: "background 0.2s ease",
    shadow: "md",
    _focusWithin: {
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
    md: {
      height: "14",
    },
  },
  defaultProps: {
    size: "md",
    variant: "white",
  },
}

type ButtonProps = HTMLChakraProps<"button"> & {
  children: React.ReactNode
  variant?: "green" | "white" | "black"
  size?: "md"
}

export const Button = forwardRef<ButtonProps, "button">((props, ref) => {
  const { size, variant, ...ownProps } = props
  const styles = useStyleConfig("Button", { styleConfig, variant, size })
  return <chakra.button ref={ref} __css={styles} {...ownProps}></chakra.button>
})
