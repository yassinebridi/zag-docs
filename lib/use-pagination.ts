import { useFramework } from "lib/framework"
import { paginate } from "lib/pagination-utils"
import { useRouter } from "next/router"

export function usePagination() {
  const framework = useFramework()
  const { asPath } = useRouter()
  const { prev, next } = paginate({ framework, current: asPath })
  return { prev, next, hasPrev: !!prev, hasNext: !!next }
}
