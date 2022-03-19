import * as tagsInput from "@ui-machines/tags-input"
import { useMachine, useSetup } from "@ui-machines/react"
import { chakra } from "@chakra-ui/system"

export function TagsInput(props: any) {
  const [state, send] = useMachine(
    tagsInput.machine.withContext({
      value: ["React", "Vue"],
    }),
    { context: props.controls },
  )
  const ref = useSetup<HTMLDivElement>({ send, id: "1" })
  const api = tagsInput.connect(state, send)

  return (
    <div>
      <div>
        <label>Enter frameworks:</label>
      </div>
      <chakra.div
        mt="2"
        py="2px"
        px="1"
        bg="white"
        borderWidth="1px"
        _focus={{
          outline: "2px solid hsl(204, 100%, 40%)",
          outlineOffset: "2px",
        }}
        ref={ref}
        {...api.rootProps}
      >
        {api.value.map((value, index) => (
          <span key={index}>
            <chakra.div
              bg="gray.100"
              px="2"
              rounded="2px"
              display="inline-block"
              margin="4px"
              _selected={{
                bg: "green.200",
                outline: "2px solid var(--colors-green-200)",
                outlineOffset: "2px",
              }}
              _disabled={{ opacity: 0.6 }}
              {...api.getTagProps({ index, value })}
            >
              <span>{value} </span>
              <chakra.button
                ml="1"
                {...api.getTagDeleteButtonProps({ index, value })}
              >
                &#x2715;
              </chakra.button>
            </chakra.div>
            <chakra.input
              px="2"
              width="10"
              outline="0"
              {...api.getTagInputProps({ index })}
            />
          </span>
        ))}
        <chakra.input
          margin="4px"
          px="2"
          placeholder="Add tag..."
          _focus={{ outline: "0" }}
          {...api.inputProps}
        />
      </chakra.div>
    </div>
  )
}
