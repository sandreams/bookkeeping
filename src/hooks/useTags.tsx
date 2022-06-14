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
    iconName: 'icon_food',
  },
  {
    id: createId(),
    tagName: '购物',
    isActive: getBool(),
    iconName: 'icon_shopping',
  },
  {
    id: createId(),
    tagName: '交通',
    isActive: getBool(),
    iconName: 'icon_traffic',
  },
  {
    id: createId(),
    tagName: '水电费',
    isActive: getBool(),
    iconName: 'icon_daily',
  },
  {
    id: createId(),
    tagName: '医疗',
    isActive: getBool(),
    iconName: 'icon_medicine',
  },
  {
    id: createId(),
    tagName: '租赁',
    isActive: getBool(),
    iconName: 'icon_houserent',
  },
  {
    id: createId(),
    tagName: '娱乐',
    isActive: getBool(),
    iconName: 'icon_entertainment',
  },
]
const getTagList = () => {
  return localStorage.getItem('tagList')
    ? (JSON.parse(localStorage.getItem('tagList') as string) as Array<TagItem>)
    : defaultTagList
}
const useTags = () => {
  const [tags, setTags] = useState<TagItem[]>(getTagList())
  useUpdate(
    () => {
      console.log('setItem')
      localStorage.setItem('tagList', JSON.stringify(tags))
    },
    [tags],
    1
  )
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
