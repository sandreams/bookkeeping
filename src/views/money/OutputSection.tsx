import styled from 'styled-components'
import { fontColor, borderColor } from 'helper'
import { memo } from 'react'
const Wrapper = styled.section`
  height: 140px;
  display: flex;
  align-items: start;
  padding-left: 35px;
  flex-wrap: wrap;
  .output-num {
    width: 100%;
    font-size: 48px;
    padding: 25px 0 0 0;
    color: ${fontColor.num};
  }
  .output-cal {
    width: 100%;
    font-size: 20px;
    padding: 25px 0 0 0;
    border-bottom: 2px solid ${borderColor.green};
    color: ${fontColor.normal};
  }
`
const OutputSection = (props: { output: string; calText: string }) => {
  console.log('Output 组件渲染了')
  return (
    <Wrapper>
      <div className="output-num">{props.output}</div>
      <div className="output-cal">{props.calText}</div>
    </Wrapper>
  )
}
export default memo(OutputSection)
