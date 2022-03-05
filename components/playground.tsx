import { chakra } from "@chakra-ui/system"
import { Box, Divider, Flex } from "@chakra-ui/layout"
import React, { useState } from "react"

const Header = (props: any) => (
  <Flex
    fontSize="sm"
    align="center"
    height="48px"
    bg="white"
    borderBottomWidth="1px"
    px="4"
    fontWeight="medium"
    {...props}
  />
)

type PlaygroundProps = {
  component: React.ElementType
  defaultProps: Record<
    string,
    string | number | boolean | { options: string[]; default: string }
  >
  debug?: boolean
}

export function Playground(props: PlaygroundProps) {
  const { component: Comp, defaultProps, debug } = props
  const [state, setState] = useState(
    Object.fromEntries(
      Object.entries(defaultProps).map(([key, value]) => [
        key,
        typeof value === "object" ? value.default : value,
      ]),
    ),
  )

  return (
    <Flex borderWidth="1px" minHeight="24em" my="16">
      <Box
        padding="5"
        bg="gray.50"
        flex="1"
        bgImage="radial-gradient(circle,var(--colors-gray-200) 1px, transparent 1px);"
        bgSize="16px 16px"
      >
        <Comp controls={state} />
      </Box>

      <Divider orientation="vertical" width="1px" borderColor="red" />

      <Box width="240px" fontSize="sm">
        <Header>Properties</Header>
        <Flex direction="column" gap="4" px="5" py="4">
          {Object.keys(state).map((key) => {
            const value = state[key]
            const type = defaultProps[key]

            if (typeof type === "boolean") {
              return (
                <Flex
                  as="label"
                  htmlFor={key}
                  justify="space-between"
                  align="center"
                  gap="2"
                  key={key}
                >
                  <div>{key}</div>
                  <input
                    id={key}
                    type="checkbox"
                    defaultChecked={value as any}
                    onChange={(e) => {
                      setState({ ...state, [key]: !value })
                    }}
                  />
                </Flex>
              )
            }

            if (typeof type === "string") {
              return (
                <div key={key}>
                  <label htmlFor={key}>{key}</label>
                  <input
                    id={key}
                    type="text"
                    defaultValue={value as any}
                    onChange={(e) => {
                      setState({ ...state, [key]: e.target.value })
                    }}
                  />
                </div>
              )
            }

            if (typeof type === "number") {
              return (
                <Flex justify="space-between" key={key}>
                  <label htmlFor={key}>{key}</label>
                  <chakra.input
                    id={key}
                    type="number"
                    maxWidth="5ch"
                    defaultValue={state[key] as number}
                    onChange={(e) => {
                      const val = parseFloat(e.currentTarget.value)
                      setState((s) => ({ ...s, [key]: isNaN(val) ? 0 : val }))
                    }}
                  />
                </Flex>
              )
            }

            return (
              <Flex justify="space-between" key={key}>
                <label htmlFor={key}>{key}</label>
                <chakra.select
                  id={key}
                  borderWidth="1px"
                  fontSize="xs"
                  px="1"
                  defaultValue={state[key] as any}
                  onChange={(e) => {
                    setState((s) => ({ ...s, [key]: e.target.value }))
                  }}
                >
                  <option>-----</option>
                  {(type as any).options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </chakra.select>
              </Flex>
            )
          })}

          {debug && (
            <Box as="pre" fontSize="xs">
              {JSON.stringify(state, null, 2)}
            </Box>
          )}
        </Flex>
      </Box>
    </Flex>
  )
}
