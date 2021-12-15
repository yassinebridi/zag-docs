import { createContext, useContext } from "react"
import { SiReact } from "react-icons/si"
import { FaVuejs } from "react-icons/fa"
import { AiFillCode } from "react-icons/ai"

export const frameworks = {
  react: {
    icon: SiReact,
    label: "React",
  },
  vue: {
    icon: FaVuejs,
    label: "Vue",
  },
  solid: {
    icon: AiFillCode,
    label: "Solid",
  },
}

export const FRAMEWORKS = ["react", "vue", "solid"] as const

export type Framework = keyof typeof frameworks

export const FrameworkContext = createContext<Framework>("react")

export function useFramework() {
  return useContext(FrameworkContext)
}

export function isFramework(str: string): str is Framework {
  return FRAMEWORKS.includes(str as any)
}

export function getFrameworkIndex(str: string): number {
  return FRAMEWORKS.indexOf(str as any)
}
