import toc from "markdown-toc"

export default function getTableOfContents(mdxContent: string) {
  return toc(mdxContent).json.map((t) => ({
    text: t.content,
    id: t.slug,
    level: t.lvl,
  }))
}
