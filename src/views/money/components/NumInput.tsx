import { useRef, forwardRef, useImperativeHandle } from 'react'
import styled from 'styled-components'
import { fontColor, borderColor } from 'helper'
const NumInputWrapper = styled.div`
  width: 100%;
  input {
    width: 100%;
    font-size: 44px;
    padding: 27px 0;
    border-bottom: 2px solid ${borderColor.green};
    color: ${fontColor.num};
  }
`
const NumInput = forwardRef((props, parentRef) => {
  const inputRef = useRef(null)
  useImperativeHandle(parentRef, () => {
    return {
      num() {
        return (inputRef.current as any).value
      },
    }
  })
  return (
    <NumInputWrapper>
      <input type="number" ref={inputRef} />
    </NumInputWrapper>
  )
})
export default NumInput
