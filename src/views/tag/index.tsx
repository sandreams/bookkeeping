import { useParams } from 'react-router-dom'
import { useTags } from 'src/useTags'
import { TagItem } from 'types/money'
type Params = {
  id: string
}
const Tag: React.FC = () => {
  const { id } = useParams<Params>()
  const { findTag } = useTags()
  const currentTag = findTag(id)
  console.log('currentTag :>> ', currentTag)
  return (
    <div>
      <span>23123</span>
      {currentTag ? <span>{currentTag.tagName}</span> : null}
    </div>
  )
}
export default Tag
