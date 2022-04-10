import { Box } from "@chakra-ui/layout"
import { getSnippetDoc } from "lib/get-paths"
import { useMDX } from "./mdx-components"

export function CodeArea({ slug, bg }: { slug: string; bg?: string }) {
  const doc = getSnippetDoc(slug)
  const Component = useMDX(doc.body.code)
  return (
    <Box
      height="full"
      sx={{
        "pre[class*=language-]": {
          bg: bg ?? "green.50",
          margin: "0",
          padding: "64px 24px !important",
          height: "full",
        },
      }}
    >
      {Component}
    </Box>
  )
}
