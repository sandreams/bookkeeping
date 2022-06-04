import React, { memo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Icon from 'src/components/Icon'
import { fontColor, svgColor, bgColor } from 'src/helper'
import { TagItem } from 'types/money'
import { useTags } from 'src/useTags'

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
type TagListProps = {
  query: string
}
const TagListSection: React.FC<TagListProps> = props => {
  const { tags, setTags } = useTags()
  const changeSelectStatus = (e: React.MouseEvent<HTMLAnchorElement>, tag: TagItem) => {
    e.preventDefault()
    setTags(tags.map(t => (tag.id === t.id ? { ...t, isActive: !t.isActive } : t)))
  }
  useEffect(() => {
    return () => {
      localStorage.setItem('tagList', JSON.stringify(tags))
    }
  }, [tags])
  console.log('TagList 组件 render 了')
  return (
    <Wrapper>
      <ul>
        {tags
          .filter(t => t.tagName.includes(props.query))
          .map(tag => (
            <li key={tag.id}>
              <a href="#!" onClick={e => changeSelectStatus(e, tag)}>
                <Icon
                  name={tag.isActive === true ? 'round_check' : 'round'}
                  iconClass={'icon-check' + (tag.isActive === true ? ' checked' : '')}
                />
              </a>
              <div className="tag-item">
                <Icon name={tag.iconName} iconClass="icon-item" />
                <span>{tag.tagName}</span>
                <Link to={`tag/${tag.id}`}>
                  <Icon name="icon_config" iconClass="icon-config" />
                </Link>
              </div>
            </li>
          ))}
      </ul>
    </Wrapper>
  )
}
export default memo(TagListSection)
