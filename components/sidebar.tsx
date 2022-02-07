import { Box, Flex, Stack } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import React from "react"
import sidebar from "sidebar.config"

type DocLinkProps = {
  href: LinkProps["href"]
  children: React.ReactNode
}

function DocLink(props: DocLinkProps) {
  const { asPath } = useRouter()
  const { href, children } = props
  const current = asPath.startsWith(href.toString())

  return (
    <Box as="li" fontSize="0.8rem">
      <Link href={href} passHref>
        <chakra.a
          display="block"
          px="6"
          py="1"
          transition="color 0.2s ease-in-out"
          aria-current={current ? "page" : undefined}
          color="gray.300"
          _hover={{ color: "white" }}
          _activeLink={{ color: "cyan.default" }}
        >
          {children}
        </chakra.a>
      </Link>
    </Box>
  )
}

type HeaderProps = {
  children: React.ReactNode
}

function CategoryHeader({ children }: HeaderProps) {
  return (
    <chakra.a px="6" py="2" fontWeight="600">
      {children}
    </chakra.a>
  )
}

export function Sidebar() {
  return (
    <nav aria-label="sidebar navigation">
      <Stack listStyleType="none" direction="column" pl="0" spacing="6">
        {sidebar.docsSidebar.map((item) => {
          if (item.type === "category") {
            return (
              <div key={item.id}>
                <CategoryHeader>{item.label}</CategoryHeader>
                <Flex as="ul" listStyleType="none" direction="column" pl="0">
                  {item.items.map((subItem) => {
                    if (subItem.type === "doc") {
                      return (
                        <DocLink
                          key={subItem.id}
                          href={`/${item.id}/${subItem.id}`}
                        >
                          {subItem.label}
                        </DocLink>
                      )
                    }
                  })}
                </Flex>
              </div>
            )
          }
          return (
            <DocLink key={item.id} href={`/docs/${item.id}`}>
              {item.label}
            </DocLink>
          )
        })}
      </Stack>
    </nav>
  )
}
