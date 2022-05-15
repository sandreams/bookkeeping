import styled from 'styled-components'
import Icon from 'src/components/Icon'
import { bgColor, svgColor, fontColor } from 'src/helper'
import { TagItemProps } from 'types/money'
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
const TagItem: React.FC<TagItemProps> = (props) => {
  console.log('tagItem 组件 render 了')
  return (
    <TagItemWrapper>
      <div
        className={`icon-container ${props.isActive ? ' icon-active' : ''}`}
        onClick={props.onTagChange}
        data-name={props.tagName}
      >
        <Icon name={props.iconName} />
      </div>
      <div className="tag-name">{props.tagName}</div>
    </TagItemWrapper>
  )
}
export default TagItem
