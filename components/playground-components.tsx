import { Accordion } from "./machines/accordion"
import { Dialog } from "./machines/dialog"
import { Editable } from "./machines/editable"
import { PinInput } from "./machines/pin-input"
import { Playground } from "./playground"

const components = {
  Dialog: () => (
    <Playground
      component={Dialog}
      defaultProps={{
        preventScroll: true,
        closeOnOutsideClick: true,
        closeOnEsc: true,
        role: { options: ["dialog", "alertdialog"], default: "dialog" },
      }}
    />
  ),
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
  Editable: () => (
    <Playground
      component={Editable}
      defaultProps={{
        selectOnFocus: true,
        placeholder: "Enter text...",
        activationMode: {
          options: ["focus", "dblclick", "none"],
          default: "focus",
        },
        submitMode: {
          options: ["enter", "blur", "none", "both"],
          default: "enter",
        },
      }}
    />
  ),
  PinInput: () => (
    <Playground
      component={PinInput}
      defaultProps={{
        disabled: false,
        otp: false,
        type: {
          options: ["alphanumeric", "numeric", "alphabetic"],
          default: "alphanumeric",
        },
        mask: false,
      }}
    />
  ),
}

export function Showcase(props: { id: keyof typeof components }) {
  const Component = components[props.id]
  return <Component />
}
