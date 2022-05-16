import { useState } from 'react'
import { TagItem } from 'types/money'

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
const useTags = () => {
  const [tags, setTags] = useState<TagItem[]>(tagList)
  return {
    tags,
    setTags,
  }
}
export { useTags }
