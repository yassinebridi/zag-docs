import { AiFillCode } from "react-icons/ai"
import { FaVuejs } from "react-icons/fa"
import { SiReact } from "react-icons/si"

export const frameworks = {
  react: { icon: SiReact, label: "React" },
  vue: { icon: FaVuejs, label: "Vue" },
  solid: { icon: AiFillCode, label: "Solid" },
}

export const FRAMEWORKS = ["react", "vue", "solid"] as const

export type Framework = keyof typeof frameworks

export function isFramework(str: string): str is Framework {
  return FRAMEWORKS.includes(str as any)
}

export function getFrameworkIndex(str: string): number {
  return FRAMEWORKS.indexOf(str as any)
}
