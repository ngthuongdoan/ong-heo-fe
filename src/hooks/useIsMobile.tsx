import { useEffect, useState } from "react"

export const useIsMobile = () => {
  const [width, setWidth] = useState<number>(0)

  function handleWindowSizeChange() {
    setWidth(window?.innerWidth)
  }

  useEffect(() => {
    window?.addEventListener("resize", handleWindowSizeChange)
    return () => {
      window?.removeEventListener("resize", handleWindowSizeChange)
    }
  }, [])

  return { isMobile: width <= 768 }
}
