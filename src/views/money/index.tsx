import Layout from 'src/components/Layout'
import { useRef, useState } from 'react'
import CategorySection from './CategorySection'
import TagsSection from './TagsSection'
import NotesSection from './NotesSection'
import InputSection from './InputSection'
import { TagData } from 'types/money'

const Money = () => {
  const [selected, setSelected] = useState<TagData>({
    id: 0,
  })
  const parentRef = useRef(null)
  const getInputNum = () => {
    // 获取 input 的实时输入值
    const num = (parentRef.current as any).num()
    console.log('num :>> ', num)
  }
  console.log('主组件渲染了')
  return (
    <Layout title="记一笔">
      <CategorySection />
      <InputSection>
        <TagsSection
          selected={selected}
          onChange={(tag: TagData) => setSelected(tag)}
        />
        <NotesSection />
      </InputSection>
    </Layout>
  )
}
export default Money
