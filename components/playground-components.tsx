import { Accordion } from "./machines/accordion"
import { Dialog } from "./machines/dialog"
import { Playground } from "./playground"

export const __components = {
  Dialog: () => <Playground component={Dialog} defaultProps={{}} />,
  Accordion: () => (
    <Playground
      component={Accordion}
      defaultProps={{
        collapsible: true,
        multiple: true,
        value: {
          default: "Aircrafts",
          options: ["Aircrafts", "Automobiles", "Watercraft"],
        },
      }}
    />
  ),
}
