import { useMachine, useSetup } from "@ui-machines/react"
import * as tabs from "@ui-machines/tabs"
import { chakra } from "@chakra-ui/system"

const data = [
  { value: "item-1", label: "Item one", content: "Item one content" },
  { value: "item-2", label: "Item two", content: "Item two content" },
  { value: "item-3", label: "Item three", content: "Item three content" },
]

export function Tabs(props: any) {
  const [state, send] = useMachine(
    tabs.machine.withContext({ value: "item-1" }),
    { context: props.controls },
  )
  const ref = useSetup<HTMLDivElement>({ send, id: "1" })
  const api = tabs.connect(state, send)

  return (
    <div className="focus-outline" ref={ref}>
      <chakra.div bg="white" {...api.tablistProps}>
        {data.map((item) => (
          <chakra.button
            py="2"
            px="4"
            borderBottomWidth="2px"
            borderBottomColor="transparent"
            _selected={{ color: "red", borderBottomColor: "currentColor" }}
            {...api.getTabProps({ value: item.value })}
            key={item.value}
          >
            {item.label}
          </chakra.button>
        ))}
      </chakra.div>
      {data.map((item) => (
        <chakra.div
          padding="4"
          bg="white"
          minHeight="20"
          {...api.getTabPanelProps({ value: item.value })}
          key={item.value}
        >
          <p>{item.content}</p>
        </chakra.div>
      ))}
    </div>
  )
}
