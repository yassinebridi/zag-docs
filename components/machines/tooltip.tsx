import { useMachine, useSetup } from "@ui-machines/react"
import * as tooltip from "@ui-machines/tooltip"
import { chakra } from "@chakra-ui/system"

export function Tooltip(props) {
  const [state, send] = useMachine(tooltip.machine, { context: props.controls })
  const ref = useSetup<HTMLButtonElement>({ send, id: "1" })
  const api = tooltip.connect(state, send)

  return (
    <>
      <chakra.button
        px="3"
        py="2"
        bg="green.500"
        color="white"
        ref={ref}
        {...api.triggerProps}
      >
        Over me
      </chakra.button>
      {api.isOpen && (
        <div {...api.positionerProps}>
          <chakra.div
            px="2"
            py="1"
            fontSize="sm"
            bg="white"
            shadow="base"
            color="#444"
            borderWidth="1px"
            {...api.contentProps}
          >
            Tooltip
          </chakra.div>
        </div>
      )}
    </>
  )
}
