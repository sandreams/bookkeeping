import styled from 'styled-components'
import Icon from 'src/components/Icon'
import { bgColor, svgColor, fontColor } from 'src/helper'
import { TagItemProps } from 'types/money'
import { memo } from 'react'
const TagItemWrapper = styled.div`
  .outer-wrapper {
    width: 65px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
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
    }
    .tag-name {
      line-height: 20px;
      font-size: 12px;
      color: ${svgColor.normal};
    }
    &.icon-active {
      /* background-color: ${bgColor.grey}; */
      background-color: #e3e3e3;
    }
  }
`
const TagItem: React.FC<TagItemProps> = (props) => {
  console.log('tagItem 组件 render 了')
  return (
    <TagItemWrapper>
      <div
        className={`outer-wrapper ${props.isActive ? ' icon-active' : ''}`}
        onClick={props.onTagChange}
      >
        <div className={`icon-container`} data-name={props.tagName}>
          <Icon name={props.iconName} />
        </div>
        <div className="tag-name">{props.tagName}</div>
      </div>
    </TagItemWrapper>
  )
}
export default memo(TagItem)
