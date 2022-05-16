import { memo } from 'react'
import styled from 'styled-components'
import Icon from 'src/components/Icon'
import { fontColor, svgColor, bgColor } from 'src/helper'
const Wrapper = styled.section`
  background: ${bgColor.white};
  margin-top: 5px;
  > ul > li {
    display: flex;
    align-items: center;
    padding-left: 20px;
    .icon {
      width: 25px;
      height: 25px;
    }
    .icon.icon-check {
      fill: ${svgColor.light};
      margin-right: 10px;
    }
    .icon.icon-check.checked {
      fill: ${svgColor.active};
    }
    .icon.icon-item {
      fill: ${svgColor.normal};
    }
    .icon.icon-config {
      fill: ${svgColor.light};
    }
    .tag-item {
      flex: 1;
      padding: 20px 20px 20px 0px;
      border-bottom: 1px solid #efeff1;
      display: flex;
      align-items: center;
      span {
        display: inline-block;
        flex: 1;
        line-height: 25px;
        font-size: 16px;
        color: ${fontColor.normal};
      }
      .icon.icon-item {
        margin-right: 10px;
      }
    }
  }
`
const tagList = [
  {
    id: 1,
    tagName: '餐饮',
    isActive: false,
    iconName: '餐饮',
  },
  {
    id: 2,
    tagName: '购物',
    isActive: false,
    iconName: '购物',
  },
  {
    id: 3,
    tagName: '交通',
    isActive: false,
    iconName: '交通',
  },
  {
    id: 4,
    tagName: '水电费',
    isActive: false,
    iconName: '水电',
  },
  {
    id: 5,
    tagName: '外卖',
    isActive: false,
    iconName: '外卖',
  },
  {
    id: 6,
    tagName: '租赁',
    isActive: false,
    iconName: '租赁',
  },
  {
    id: 7,
    tagName: '娱乐',
    isActive: false,
    iconName: '娱乐',
  },
]
const TagListSection: React.FC = () => {
  return (
    <Wrapper>
      <ul>
        {tagList.map((tag) => (
          <li key={tag.id}>
            <Icon
              name="round_check"
              iconClass={'icon-check' + (1 === 1 ? ' checked' : '')}
            />
            <div className="tag-item">
              <Icon name={tag.iconName} iconClass="icon-item" />
              <span>{tag.tagName}</span>
              <Icon name="icon_config" iconClass="icon-config" />
            </div>
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}
export default memo(TagListSection)
