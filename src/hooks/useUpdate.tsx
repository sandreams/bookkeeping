import { useEffect, useRef } from 'react'

export const useUpdate = (
  fn: () => void,
  deps: any[],
  beginCount: number = 2
) => {
  const count = useRef(0)
  useEffect(() => {
    count.current += 1
  })
  useEffect(() => {
    if (count.current > beginCount) {
      fn()
    }
  }, [...deps])
}
