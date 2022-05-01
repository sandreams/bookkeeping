import styled from 'styled-components'
import Icon from 'components/Icon'
import { bgColor, svgColor, fontColor } from 'helper'
const TagItemWrapper = styled.div`
  width: 65px;
  height: 66px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon-container {
    width: 36px;
    height: 36px;
    padding: 3px;
    background-color: ${bgColor.shallow_grey};
    border-radius: 100%;
    .icon {
      width: 30px;
      height: 30px;
      fill: ${fontColor.normal};
    }
    &.icon-active {
      background-color: ${svgColor.active};
      .icon {
        fill: #fff;
      }
    }
  }
  .tag-name {
    line-height: 20px;
    font-size: 12px;
    color: ${svgColor.normal};
  }
`
interface PropType {
  iconName: string
  tagName: string
  isActive: boolean
  onTagChange: () => void
}
const TagItem = (prop: PropType) => {
  console.log('tagItem 组件 render 了')
  return (
    <TagItemWrapper>
      <div
        className={`icon-container ${prop.isActive ? ' icon-active' : ''}`}
        onClick={prop.onTagChange}
      >
        <Icon name={prop.iconName} />
      </div>
      <div className="tag-name">{prop.tagName}</div>
    </TagItemWrapper>
  )
}
export default TagItem
