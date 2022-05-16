import { memo } from 'react'
import styled from 'styled-components'
import Icon from 'src/components/Icon'
import { fontColor, svgColor } from 'src/helper'
const Wrapper = styled.section`
  height: 55px;
  background: linear-gradient(180deg, #f6f6f6 16%, #ffffff 90%);
  display: flex;
  align-items: center;
  .icon {
    width: 24px;
    height: 24px;
    fill: ${svgColor.active};
    margin: 0 7px 0 20px;
  }
  span {
    font-size: 13px;
    line-height: 24px;
    color: ${fontColor.light};
  }
`
const NewTagSection: React.FC = () => {
  return (
    <Wrapper>
      <Icon name="plus" />
      <span>添加标签</span>
    </Wrapper>
  )
}
export default memo(NewTagSection)
