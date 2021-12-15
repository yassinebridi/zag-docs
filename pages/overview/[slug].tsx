import { Overview } from ".contentlayer/types"
import { chakra } from "@chakra-ui/system"
import { useMDX } from "components/mdx-components"
import { getOverviewDoc, getOverviewPaths } from "lib/get-paths"
import { GetStaticPaths, GetStaticProps } from "next"

export default function OverviewPage({ doc }: { doc: Overview }) {
  const mdx = useMDX(doc.body.code)
  return (
    <chakra.div maxW="40rem" mx="auto" px="3rem" py="4rem" fontFamily="Graphik" lineHeight="1.5">
      {mdx}
    </chakra.div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getOverviewPaths(), fallback: false }
}

export const getStaticProps: GetStaticProps<{ doc: Overview }> = async (ctx) => {
  return { props: { doc: getOverviewDoc(ctx.params.slug) } }
}
