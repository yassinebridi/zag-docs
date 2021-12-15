import { allSnippets } from ".contentlayer/data"
import { HStack, Icon, Tab, TabList, TabPanel, TabPanels, Tabs, useTabs } from "@chakra-ui/react"
import { chakra } from "@chakra-ui/system"
import { frameworks, FRAMEWORKS, getFrameworkIndex, useFramework } from "lib/framework"
import { useMDXComponent } from "next-contentlayer/hooks"
import Link from "next/link"
import { FC, useEffect, useState } from "react"

function SnippetItem({ code, id }) {
  const content = useMDX(code)
  return (
    <div className="prose" id="snippet" data-framework={id}>
      {content}
    </div>
  )
}

const components: Record<string, FC<Record<string, any>>> = {
  blockquote(props) {
    return (
      <chakra.blockquote
        mt="8"
        mb="4"
        px="5"
        py="3"
        bg="rgb(35 211 171 / 18%)"
        borderLeftWidth="2px"
        borderLeftColor="cyan.default"
        rounded="4px"
        {...props}
      />
    )
  },
  h1(props) {
    return <chakra.h1 textStyle="h1" sx={{ maxW: "85ch", mb: "2rem" }} {...props} />
  },
  h2(props) {
    return <chakra.h2 textStyle="h2" sx={{ mb: "1rem" }} {...props} />
  },
  pre(props) {
    return <chakra.pre {...props} className={`prose ${props.className}`} />
  },
  inlineCode(props) {
    return (
      <chakra.code
        className="prose"
        sx={{
          px: "1.5",
          py: "2px",
          bg: "gray.700",
          rounded: "4px",
          color: "cyan.light",
          fontSize: "0.85em",
          fontFamily: "Menlo",
          whiteSpace: "nowrap",
        }}
        {...props}
      />
    )
  },
  code(props) {
    if (typeof props.children === "string") {
      return <components.inlineCode {...props} />
    }
    return <div className="prose">{props.children}</div>
  },
  InstallSnippet(props) {
    const { package: pkg, ...rest } = props
    const installSnippet = allSnippets.find((snippet) => snippet.slug === "install")
    const code = useMDX(installSnippet.body.code.replaceAll("pkg", pkg))
    return <div {...rest}>{code}</div>
  },
  CodeSnippet(props) {
    const userFramework = useFramework()
    const snippets = allSnippets.filter((p) => p._id.endsWith(props.id))
    const [index, setIndex] = useState(getFrameworkIndex(userFramework ?? "react"))
    return (
      <Tabs index={index} onChange={setIndex} mt="6" bg="#151515" rounded="6px">
        <TabList borderBottomWidth="1px" borderColor="gray.600">
          {FRAMEWORKS.map((framework) => (
            <Tab
              py="2"
              px="4"
              fontSize="0.9rem"
              borderBottom="2px solid transparent"
              _selected={{ borderColor: "currentColor", color: "cyan.light" }}
              key={framework}
            >
              <HStack>
                <Icon as={frameworks[framework].icon} />
                <p>{framework}</p>
              </HStack>
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {snippets.map((p) => (
            <TabPanel key={p._id} mt="-6">
              <SnippetItem id={p.framework} code={p.body.code} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    )
  },
  a(props) {
    const href = props.href
    const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"))

    if (isInternalLink) {
      return (
        <Link href={href} passHref>
          <chakra.a textStyle="a" {...props}>
            {props.children}
          </chakra.a>
        </Link>
      )
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />
  },
}

export function useMDX(code: string) {
  const MDXComponent = useMDXComponent(code)
  return <MDXComponent components={components} />
}
