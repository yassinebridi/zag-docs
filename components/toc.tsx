import { chakra } from "@chakra-ui/react"
import { useScrollSpy } from "./use-scrollspy"

type TOC = Array<{
  content: string
  slug: string
  lvl: number
}>

export function TableOfContents({ data = [] }: { data: TOC }) {
  const activeId = useScrollSpy(data.map((item) => `[id="${item.slug}"]`))

  return (
    <div>
      <chakra.h5 fontWeight="bold">On this page</chakra.h5>
      <chakra.ul fontSize="0.8rem" listStyleType="none" paddingLeft="0">
        {data.map((item) => (
          <chakra.li
            data-selected={activeId === item.slug || undefined}
            key={item.slug}
            marginLeft={item.lvl > 2 ? "sm" : undefined}
            _selected={{
              color: "cyan.default",
            }}
          >
            <chakra.a href={`#${item.slug}`}>{item.content}</chakra.a>
          </chakra.li>
        ))}
      </chakra.ul>
    </div>
  )
}
