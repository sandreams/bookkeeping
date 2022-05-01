import styled from 'styled-components'
import { fontColor, borderColor } from 'helper'
import { memo } from 'react'
const Wrapper = styled.section`
  height: 140px;
  display: flex;
  align-items: start;
  padding-left: 35px;
  .output-num {
    width: 100%;
    input {
      width: 100%;
      font-size: 44px;
      padding: 27px 0;
      border-bottom: 2px solid ${borderColor.green};
      color: ${fontColor.num};
    }
  }
`
const OutputSection = (props: { output: string }) => {
  console.log('Output 组件渲染了')
  return (
    <Wrapper>
      <div className="output-num">{props.output}</div>
    </Wrapper>
  )
}
export default memo(OutputSection)
