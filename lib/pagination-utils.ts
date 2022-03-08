import sidebar from "sidebar.config"

function formatUrl(group: string, item: string, framework?: string) {
  return "/" + [group, framework, item].filter(Boolean).join("/")
}

export function getPaginationData(framework: string) {
  const result: { label: string; url: string }[] = []
  for (const group of sidebar.docs) {
    if (group.type !== "category") continue
    const items = group.items.map((item) => {
      const _framework = group.id === "components" ? framework : undefined
      return {
        label: item.label,
        url: formatUrl(group.id, item.id, _framework),
      }
    })
    result.push(...items)
  }
  return result
}

type PaginationData = { framework: string; current: string }

export function paginate({ framework, current }: PaginationData) {
  const data = getPaginationData(framework)
  const index = data.map((item) => item.url).indexOf(current)
  if (index === -1) return { prev: undefined, next: undefined }
  const prev = index > 0 ? data[index - 1] : undefined
  const next = index < data.length - 1 ? data[index + 1] : undefined
  return { prev, next }
}
