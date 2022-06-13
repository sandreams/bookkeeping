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
  onTagChange?: () => void
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
  onConfirm: () => void
}
interface RecordItem extends MoneyDataSet {
  id: number
  amount: number
  created: number
  updated: number
}
interface RecordGroupedByDay {
  date: number
  day: string
  month: number
  year: number
  dateformat: string
  timestamp: number
  income: number
  expend: number
  offset: number
  records: Array<RecordItem>
}
type RecordMap = {
  [name: string]: RecordGroupedByDay
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
  RecordItem,
  RecordGroupedByDay,
  RecordMap,
}
