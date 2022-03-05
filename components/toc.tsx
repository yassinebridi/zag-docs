import { Stack } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { useScrollSpy } from "./use-scrollspy"

type TOC = Array<{
  content: string
  slug: string
  lvl: number
}>

export function TableOfContents({ data = [] }: { data: TOC }) {
  const activeId = useScrollSpy(data.map((item) => `[id="${item.slug}"]`))

  return (
    <div className="toc">
      <chakra.h5 fontSize="sm" fontWeight="bold" className="toc__heading">
        On this page
      </chakra.h5>

      <Stack as="ul" fontSize="0.8rem" listStyleType="none" mt="3">
        {data.map((item) => (
          <chakra.li
            data-selected={activeId === item.slug || undefined}
            key={item.slug}
            marginLeft={item.lvl > 2 ? "2" : undefined}
            _selected={{
              textDecoration: "underline",
              textUnderlineOffset: "2px",
            }}
          >
            <chakra.a href={`#${item.slug}`}>{item.content}</chakra.a>
          </chakra.li>
        ))}
      </Stack>
    </div>
  )
}
