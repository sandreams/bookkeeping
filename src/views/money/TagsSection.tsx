import { memo } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import TagItem from './components/TagItem'
import { TagProps } from 'types/money'
import { useTags } from 'src/useTags'
const Wrapper = styled.div`
  padding: 10px 25px;
  background-color: #fff;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`
const TagsSection: React.FC<TagProps> = (props) => {
  const { getCheckedTags } = useTags()
  const checkedTags = getCheckedTags()
  console.log('tags 组件渲染了')
  return (
    <Wrapper>
      {checkedTags.map((t) => (
        <TagItem
          key={t.id}
          isActive={props.selected.id === t.id}
          tagName={t.tagName}
          iconName={t.iconName}
          onTagChange={() => props.onChange(t)}
        />
      ))}
      <Link to={{ pathname: '/tag/new' }}>
        <TagItem key={0} isActive={false} tagName="添加" iconName="plus1" />
      </Link>
    </Wrapper>
  )
}
export default memo(TagsSection)
