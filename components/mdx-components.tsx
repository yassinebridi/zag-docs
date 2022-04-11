import { allSnippets } from ".contentlayer/data"
import { Icon } from "@chakra-ui/icon"
import { Box, HStack } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs"
import { MDX } from "contentlayer/core"
import {
  frameworks,
  FRAMEWORKS,
  getFrameworkIndex,
  useFramework,
} from "lib/framework"
import { useMDXComponent } from "next-contentlayer/hooks"
import Link from "next/link"
import { FC, useState } from "react"
import { CopyButton } from "./copy-button"
import { Showcase } from "./showcase"

function SnippetItem({ body, id }: { body: MDX; id: string }) {
  const content = useMDX(body.code)
  const textContent = body.raw.split("\n").slice(1, -2).join("\n")
  return (
    <div className="prose" id="snippet" data-framework={id}>
      {content}
      <CopyButton content={textContent} />
    </div>
  )
}

const components: Record<string, FC<Record<string, any>>> = {
  Showcase,
  blockquote(props) {
    return <chakra.blockquote layerStyle="blockquote" {...props} />
  },
  h1(props) {
    return <chakra.h1 textStyle="display.lg" mb="5" maxW="85ch" {...props} />
  },
  h2(props) {
    return <chakra.h2 textStyle="display.md" mt="12" mb="3" {...props} />
  },
  h3(props) {
    return <chakra.h3 textStyle="display.sm" mt="6" mb="4" {...props} />
  },
  h4(props) {
    return <chakra.h4 textStyle="display.xs" mt="6" mb="2" {...props} />
  },
  pre(props) {
    return <chakra.pre {...props} className={`prose ${props.className}`} />
  },
  li(props) {
    return (
      <chakra.li
        sx={{
          "&::marker": {
            color: "cyan.default",
          },
        }}
        {...props}
      />
    )
  },
  inlineCode(props) {
    return <chakra.code className="prose" layerStyle="inlineCode" {...props} />
  },
  code(props) {
    if (typeof props.children === "string") {
      return <components.inlineCode {...props} />
    }
    return <div className="prose">{props.children}</div>
  },
  CodeSnippet(props) {
    const { framework: userFramework } = useFramework()
    const snippets = allSnippets.filter((p) => {
      const [_, __, ...rest] = p.params
      const str = rest.join("/") + ".mdx"
      return str === props.id
    })
    const [index, setIndex] = useState(
      getFrameworkIndex(userFramework ?? "react"),
    )

    return (
      <Tabs
        index={index}
        onChange={setIndex}
        width="full"
        maxW="768px"
        my="8"
        bg="hsl(230, 1%, 98%)"
        rounded="6px"
      >
        <TabList>
          {FRAMEWORKS.map((framework) => (
            <Tab
              py="2"
              px="8"
              fontSize="sm"
              fontWeight="medium"
              borderBottom="2px solid transparent"
              _selected={{ borderColor: "currentColor", color: "green.500" }}
              _focusVisible={{ outline: "2px solid blue" }}
              key={framework}
            >
              <HStack>
                <Icon as={frameworks[framework].icon} />
                <p>{frameworks[framework].label}</p>
              </HStack>
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {FRAMEWORKS.map((framework) => {
            const snippet = snippets.find((p) => p.framework === framework)
            return (
              <TabPanel
                position="relative"
                key={framework}
                mt="-6"
                _focusVisible={{ outline: "2px solid blue" }}
              >
                {snippet ? (
                  <SnippetItem id={framework} body={snippet.body} />
                ) : (
                  <Box mt="6" padding="4" fontSize="sm" opacity="0.5">
                    Snippet not found :(
                  </Box>
                )}
              </TabPanel>
            )
          })}
        </TabPanels>
      </Tabs>
    )
  },
  a(props) {
    const href = props.href
    const isInternalLink =
      href && (href.startsWith("/") || href.startsWith("#"))

    if (isInternalLink) {
      return (
        <Link href={href} passHref>
          <chakra.a textStyle="link" {...props}>
            {props.children}
          </chakra.a>
        </Link>
      )
    }

    return (
      <chakra.a textStyle="link" target="_blank" rel="noopener" {...props} />
    )
  },
}

export function useMDX(code: string) {
  const MDXComponent = useMDXComponent(code)
  return <MDXComponent components={components} />
}
