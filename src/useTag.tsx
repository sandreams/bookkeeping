import { useState } from 'react'
import { TagItem, TagData } from 'types/money'

const defaultTagData = {
  id: 0,
  tagName: '',
  isActive: false,
  iconName: 'default'
}
const useTag = (initData: TagItem | undefined) => {
  const [tagData, setTag] = useState<TagData>(initData || defaultTagData)
  return {
    tagData,
    setTag
  }
}
export { useTag }
