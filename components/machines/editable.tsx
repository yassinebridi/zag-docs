import * as editable from "@zag-js/editable"
import { useMachine, useSetup } from "@zag-js/react"
import { chakra } from "@chakra-ui/system"
import { HStack } from "@chakra-ui/layout"

export function Editable(props: any) {
  const [state, send] = useMachine(editable.machine, {
    context: props.controls,
  })

  const ref = useSetup({ send, id: "1" })
  const api = editable.connect(state, send)

  return (
    <chakra.div width="300px" ref={ref} {...api.rootProps}>
      <chakra.div mb="3" {...api.areaProps}>
        <chakra.input
          className="focus-outline"
          bg="transparent"
          {...api.inputProps}
        />
        <span {...api.previewProps} />
      </chakra.div>

      <div>
        {!api.isEditing && (
          <chakra.button
            bg="white"
            px="2"
            borderWidth="1px"
            fontWeight="medium"
            {...api.editButtonProps}
          >
            Edit
          </chakra.button>
        )}
        {api.isEditing && (
          <HStack>
            <chakra.button
              bg="green.500"
              color="white"
              px="2"
              borderWidth="1px"
              fontWeight="medium"
              {...api.submitButtonProps}
            >
              Save
            </chakra.button>
            <chakra.button
              bg="white"
              px="2"
              borderWidth="1px"
              fontWeight="medium"
              {...api.cancelButtonProps}
            >
              Cancel
            </chakra.button>
          </HStack>
        )}
      </div>
    </chakra.div>
  )
}
