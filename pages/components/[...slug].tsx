import type { Component } from ".contentlayer/types"
import { useMDX } from "components/mdx-components"
import DocsLayout from "layouts/docs"
import { Framework, FrameworkProvider } from "lib/framework"
import {
  extractParams,
  getComponentDoc,
  getComponentPaths,
} from "lib/get-paths"
import { GetStaticPaths, GetStaticProps } from "next"
import { NextSeo } from "next-seo"

type PageProps = {
  doc: Component
  framework: Framework
}

export default function ComponentPage({ doc, framework }: PageProps) {
  const mdx = useMDX(doc.body.code)
  return (
    <FrameworkProvider value={framework}>
      <NextSeo title={doc.title} description={doc.description} />
      <DocsLayout doc={doc}>{mdx}</DocsLayout>
    </FrameworkProvider>
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
