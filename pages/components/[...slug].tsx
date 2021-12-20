import type { Component } from ".contentlayer/types"
import { useMDX } from "components/mdx-components"
import DocsLayout from "layouts/docs"
import { Framework, FrameworkContext } from "lib/framework"
import { extractParams, getComponentDoc, getComponentPaths } from "lib/get-paths"
import { GetStaticPaths, GetStaticProps } from "next"

type PageProps = {
  doc: Component
  framework: Framework
}

export default function ComponentPage({ doc, framework }: PageProps) {
  const mdx = useMDX(doc.body.code)
  return (
    <FrameworkContext.Provider value={framework}>
      <DocsLayout toc={doc.frontmatter.toc}>{mdx}</DocsLayout>
    </FrameworkContext.Provider>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getComponentPaths(), fallback: false }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { framework, slug } = extractParams(ctx.params.slug as string[])
  const doc = getComponentDoc(slug)
  return { props: { doc, framework } }
}
