import { useCallback, useState } from 'react'
import { TagItem } from 'types/money'
import { createId } from 'src/lib/createId'
import { useUpdate } from 'src/hooks/useUpdate'
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
  useUpdate(() => {
    console.log('setItem')
    localStorage.setItem('tagList', JSON.stringify(tags))
  }, [tags])
  const findTag = useCallback(
    (id: string) => tags.filter((t) => t.id.toString() === id)[0],
    [tags]
  )
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
  const getCheckedTags = () => tags.filter((t) => t.isActive === true)
  const removeTag = (id: number) => setTags(tags.filter((t) => t.id !== id))
  return {
    tags,
    setTags,
    findTag,
    createTag,
    updateTag,
    getCheckedTags,
    removeTag,
  }
}
export { useTags }
