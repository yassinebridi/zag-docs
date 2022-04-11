import { Overview } from ".contentlayer/types"
import { useMDX } from "components/mdx-components"
import DocsLayout from "layouts/docs"
import { getOverviewDoc, getOverviewPaths } from "lib/path-utils"
import { GetStaticPaths, GetStaticProps } from "next"
import { NextSeo } from "next-seo"

export default function OverviewPage({ doc }: { doc: Overview }) {
  const Component = useMDX(doc.body.code)
  return (
    <>
      <NextSeo title={doc.title} description={doc.description} />
      <DocsLayout doc={doc}>{Component}</DocsLayout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getOverviewPaths(), fallback: false }
}

export const getStaticProps: GetStaticProps<{ doc: Overview }> = async (
  ctx,
) => {
  return { props: { doc: getOverviewDoc(ctx.params.slug) } }
}
