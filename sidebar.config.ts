type SidebarItem =
  | {
      type: "category"
      id: string
      label: string
      collapsible?: boolean
      collapsed?: boolean
      items: SidebarItem[]
    }
  | {
      type: "doc"
      id: string
      label: string
      new?: boolean
    }
  | {
      type: "link"
      id: string
      label: string
      href: string
    }

const sidebar: Record<string, SidebarItem[]> = {
  docsSidebar: [
    { type: "doc", label: "Introduction", id: "introduction" },
    {
      type: "category",
      label: "Overview",
      id: "overview",
      items: [
        { type: "doc", label: "Installation", id: "installation" },
        { type: "doc", label: "Motivation", id: "motivation" },
        { type: "doc", label: "State machine", id: "whats-a-machine" },
      ],
    },
    {
      type: "category",
      label: "Components",
      id: "components",
      items: [
        { type: "doc", label: "Accordion", id: "accordion" },
        { type: "doc", label: "Dialog", id: "dialog" },
        { type: "doc", label: "Editable", id: "editable" },
        { type: "doc", label: "Menu", id: "menu" },
        { type: "doc", label: "Number Input", id: "number-input" },
        { type: "doc", label: "Pin Input", id: "pin-input" },
        { type: "doc", label: "Popover", id: "popover" },
        { type: "doc", label: "Range Slider", id: "range-slider" },
        { type: "doc", label: "Slider", id: "slider" },
        { type: "doc", label: "Split View", id: "split-view" },
        { type: "doc", label: "Tabs", id: "tabs" },
        { type: "doc", label: "Tags Input", id: "tags-input" },
        { type: "doc", label: "Toast", id: "toast" },
        { type: "doc", label: "Tooltip", id: "tooltip" },
      ],
    },
  ],
}

export default sidebar
