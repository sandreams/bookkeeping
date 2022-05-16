import { useState } from 'react'
import { TagItem } from 'types/money'
import { createId } from 'src/lib/createId'

const tagList = [
  {
    id: createId(),
    tagName: '餐饮',
    isActive: false,
    iconName: '餐饮',
  },
  {
    id: createId(),
    tagName: '购物',
    isActive: false,
    iconName: '购物',
  },
  {
    id: createId(),
    tagName: '交通',
    isActive: false,
    iconName: '交通',
  },
  {
    id: createId(),
    tagName: '水电费',
    isActive: false,
    iconName: '水电',
  },
  {
    id: createId(),
    tagName: '外卖',
    isActive: false,
    iconName: '外卖',
  },
  {
    id: createId(),
    tagName: '租赁',
    isActive: false,
    iconName: '租赁',
  },
  {
    id: createId(),
    tagName: '娱乐',
    isActive: false,
    iconName: '娱乐',
  },
]
const useTags = () => {
  const [tags, setTags] = useState<TagItem[]>(tagList)
  return {
    tags,
    setTags,
  }
}
export { useTags }
