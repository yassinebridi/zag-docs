import { useMachine, useSetup } from "@ui-machines/react"
import * as tooltip from "@ui-machines/tooltip"
import { chakra } from "@chakra-ui/system"

export function Tooltip() {
  const [state, send] = useMachine(tooltip.machine)
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
      {api.isVisible && (
        <div {...api.positionerProps}>
          <chakra.div
            px="4"
            py="2"
            bg="black"
            color="white"
            {...api.contentProps}
          >
            Tooltip
          </chakra.div>
        </div>
      )}
    </>
  )
}
