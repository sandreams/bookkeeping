import { useState, memo } from 'react'
import styled from 'styled-components'
import TagItem from './components/TagItem'
import { TagItem as TI, TagProps } from 'types/money'
const Wrapper = styled.div`
  padding: 10px 25px;
  background-color: #fff;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
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
const TagsSection: React.FC<TagProps> = (props) => {
  const tags = useState<TI[]>(tagList)[0]
  console.log('tags 组件渲染了')
  return (
    <Wrapper>
      {tags.map((t) => (
        <TagItem
          key={t.id}
          isActive={props.selected.id === t.id}
          tagName={t.tagName}
          iconName={t.iconName}
          onTagChange={() => props.onChange(t)}
        />
      ))}
    </Wrapper>
  )
}
export default memo(TagsSection)
