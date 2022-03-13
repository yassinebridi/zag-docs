import * as numberInput from "@ui-machines/number-input"
import { useMachine, useSetup } from "@ui-machines/react"
import { chakra } from "@chakra-ui/system"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"

export function NumberInput(props: any) {
  const [state, send] = useMachine(numberInput.machine, {
    sync: true,
    context: props.controls,
  })
  const ref = useSetup<HTMLDivElement>({ send, id: "1" })
  const api = numberInput.connect(state, send)

  return (
    <div ref={ref}>
      <label {...api.labelProps}>Enter number:</label>
      <br />
      <chakra.div position="relative" display="inline-block">
        <chakra.input
          borderWidth="1px"
          height="10"
          pr="5"
          pl="3"
          {...api.inputProps}
        />
        <chakra.div
          display="flex"
          flexDirection="column"
          alignItems="center"
          position="absolute"
          width="6"
          right="3px"
          top="3px"
        >
          <chakra.button
            width="full"
            bg="gray.100"
            display="flex"
            justifyContent="center"
            _disabled={{ opacity: 0.5 }}
            {...api.incrementButtonProps}
          >
            <BiChevronUp />
          </chakra.button>
          <chakra.button
            mt="2px"
            width="full"
            bg="gray.100"
            display="flex"
            justifyContent="center"
            _disabled={{ opacity: 0.5 }}
            {...api.decrementButtonProps}
          >
            <BiChevronDown />
          </chakra.button>
        </chakra.div>
      </chakra.div>
    </div>
  )
}
