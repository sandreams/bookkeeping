import { useEffect, useState } from 'react'
import { TagData, TagItem } from 'types/money'
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
  useEffect(() => {
    console.log('set store tagList')
    localStorage.setItem('tagList', JSON.stringify(tags))
  }, [tags])

  const findTag = (id: string) => tags.filter((t) => t.id.toString() === id)[0]
  const createTag = (tag: TagItem) => {
    const newTagId = Math.max(...tags.map((t) => t.id)) + 1
    tag.id = newTagId
    setTags(tags.concat(tag))
  }
  const updateTag = (tag: TagItem) => {
    setTags(
      tags.map((t) => {
        return t.id === tag.id ? tag : t
      })
    )
  }
  return {
    tags,
    setTags,
    findTag,
    createTag,
    updateTag,
  }
}
export { useTags }
