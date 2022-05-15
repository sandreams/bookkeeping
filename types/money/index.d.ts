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
export { TagItem, TagData, TagProps, TagItemProps }
