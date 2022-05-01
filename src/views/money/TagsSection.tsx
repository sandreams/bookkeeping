import { useState } from 'react'
import styled from 'styled-components'
import TagItem from './components/TagItem'
const Wrapper = styled.section`
  padding: 10px 25px;
  background-color: #fff;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`
interface TagData {
  tagName: string
  isActive: boolean
  iconName: string
}
const tagList = [
  {
    tagName: '餐饮',
    isActive: false,
    iconName: '餐饮',
  },
  {
    tagName: '购物',
    isActive: false,
    iconName: '购物',
  },
  {
    tagName: '交通',
    isActive: false,
    iconName: '交通',
  },
  {
    tagName: '水电费',
    isActive: false,
    iconName: '水电',
  },
  {
    tagName: '外卖',
    isActive: false,
    iconName: '外卖',
  },
  {
    tagName: '租赁',
    isActive: false,
    iconName: '租赁',
  },
  {
    tagName: '娱乐',
    isActive: false,
    iconName: '娱乐',
  },
]
const TagsSection: React.FC = () => {
  const [activeIndex, setIndex] = useState(0)
  const [tags, setTags] = useState<TagData[]>(tagList)
  const onTagChange = (index: number) => setIndex(index)
  console.log('tagSection 组件 render 了')
  return (
    <Wrapper>
      {tags.map((t, index) => (
        <TagItem
          key={index}
          isActive={activeIndex === index}
          tagName={t.tagName}
          iconName={t.iconName}
          onTagChange={() => onTagChange(index)}
        />
      ))}
    </Wrapper>
  )
}
export default TagsSection
