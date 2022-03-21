import * as menu from "@ui-machines/menu"
import { useMachine, useSetup } from "@ui-machines/react"
import { chakra } from "@chakra-ui/system"

const data = [
  { label: "Edit", value: "edit" },
  { label: "Delete", value: "delete" },
  { label: "Export", value: "export" },
  { label: "Duplicate", value: "duplicate" },
]

export function Menu(props) {
  const [state, send] = useMachine(
    menu.machine.withContext({
      placementOptions: {
        placement: "bottom-start",
      },
    }),
    { context: props.controls },
  )
  const ref = useSetup<HTMLDivElement>({ send, id: "1" })
  const api = menu.connect(state, send)

  return (
    <div className="focus-outline" ref={ref}>
      <chakra.button
        bg="green.500"
        color="white"
        px="3"
        py="2"
        {...api.triggerProps}
      >
        Actions <span aria-hidden>▾</span>
      </chakra.button>
      <div {...api.positionerProps}>
        <chakra.ul
          bg="white"
          width="240px"
          padding="2"
          listStyleType="none"
          {...api.contentProps}
        >
          {data.map((item) => (
            <chakra.li
              px="1"
              py="2"
              key={item.value}
              _selected={{ bg: "green.200" }}
              {...api.getItemProps({ id: item.value })}
            >
              {item.label}
            </chakra.li>
          ))}
        </chakra.ul>
      </div>
    </div>
  )
}
