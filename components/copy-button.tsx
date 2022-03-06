import { HStack } from "@chakra-ui/layout"
import { useState } from "react"
import { HiCheck, HiOutlineClipboardCopy } from "react-icons/hi"

export function CopyButton({ content }: { content: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <HStack
      spacing="1"
      position="absolute"
      right="3"
      top="3"
      as="button"
      type="button"
      fontSize="xs"
      onClick={() => {
        navigator.clipboard.writeText(content)
        setCopied(true)
        setTimeout(() => setCopied(false), 1000)
      }}
    >
      {copied ? <HiCheck /> : <HiOutlineClipboardCopy />}
      <span>{copied ? "Copied" : "Copy"}</span>
    </HStack>
  )
}
