import * as slider from "@ui-machines/slider"
import { useMachine, useSetup } from "@ui-machines/react"
import { chakra } from "@chakra-ui/system"
import { Center, Flex } from "@chakra-ui/layout"

export function Slider(props: any) {
  const [state, send] = useMachine(
    slider.machine.withContext({ min: -50, max: 50 }),
    { context: props.controls },
  )
  const ref = useSetup<HTMLDivElement>({ send, id: "1" })
  const api = slider.connect(state, send)

  return (
    <div className="focus-outline" ref={ref}>
      <div>
        <chakra.label mr="2" {...api.labelProps}>
          Slider Label:
        </chakra.label>
        <output {...api.outputProps}>
          <b>{api.value}</b>
        </output>
      </div>
      <Flex
        mt="5"
        align="center"
        position="relative"
        maxW="200px"
        py="10px"
        {...api.rootProps}
      >
        <chakra.div
          height="4px"
          rounded="full"
          flex="1"
          bg="gray.300"
          {...api.trackProps}
        >
          <chakra.div
            height="100%"
            bg="green.500"
            rounded="inherit"
            _disabled={{ bg: "green.200" }}
            {...api.rangeProps}
          />
        </chakra.div>
        <Center
          boxSize="20px"
          rounded="full"
          bg="white"
          shadow="base"
          _disabled={{ bg: "gray.200" }}
          {...api.thumbProps}
        >
          <input {...api.inputProps} />
        </Center>
      </Flex>
    </div>
  )
}
