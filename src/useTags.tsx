import { useState } from 'react'
import { TagItem } from 'types/money'
import { createId } from 'src/lib/createId'
const getBool = () => {
  return Math.random() > 0.5
}
const defaultTagList = [
  {
    id: createId(),
    tagName: '餐饮',
    isActive: getBool(),
    iconName: '餐饮',
  },
  {
    id: createId(),
    tagName: '购物',
    isActive: getBool(),
    iconName: '购物',
  },
  {
    id: createId(),
    tagName: '交通',
    isActive: getBool(),
    iconName: '交通',
  },
  {
    id: createId(),
    tagName: '水电费',
    isActive: getBool(),
    iconName: '水电',
  },
  {
    id: createId(),
    tagName: '外卖',
    isActive: getBool(),
    iconName: '外卖',
  },
  {
    id: createId(),
    tagName: '租赁',
    isActive: getBool(),
    iconName: '租赁',
  },
  {
    id: createId(),
    tagName: '娱乐',
    isActive: getBool(),
    iconName: '娱乐',
  },
]
const getTagList = () => {
  return localStorage.getItem('tagList')
    ? (JSON.parse(localStorage.getItem('tagList') as string) as Array<TagItem>)
    : defaultTagList
}
const useTags = () => {
  const [tags, setTags] = useState<TagItem[]>(getTagList())
  return {
    tags,
    setTags,
  }
}
export { useTags }
