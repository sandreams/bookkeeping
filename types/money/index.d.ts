import React, { ReactChild } from 'react'

interface TagItem {
  id: number
  tagName: string
  isActive: boolean
  iconName: string
}
interface TagData extends TagItem {
  tagName?: string
  isActive?: boolean
  iconName?: string
}

type CategoryData = 'expend' | 'income'
type MoneyDataSet = {
  category: CategoryData
  tag: TagData
  note: string
  amount: string
}
interface TagItemProps {
  iconName: string
  tagName: string
  isActive: boolean
  onTagChange: () => void
}
interface TagProps {
  selected: TagData
  onChange: (tag: TagData) => void
}
interface CategoryProps {
  cate: CategoryData
  onChange: (cate: CategoryData) => void
}
interface NoteProps {
  note: string
  onChange: (note: string) => void
}
interface InputProps {
  numText: string
  children: Array<ReactChild>
  onChange: (amount: string) => void
}
export {
  TagItem,
  TagData,
  TagProps,
  TagItemProps,
  CategoryData,
  MoneyDataSet,
  CategoryProps,
  NoteProps,
  InputProps,
}
