import Layout from 'components/Layout'
import { useRef, useState } from 'react'
import CategorySection from './CategorySection'
import OutputSection from './OutputSection'
import TagsSection from './TagsSection'
import NotesSection from './NotesSection'
import NumberPadSection from './NumberPadSection'

const Tags = () => {
  const [num, setNum] = useState('0.00')
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
      <OutputSection output={num} />
      <TagsSection />
      <NotesSection />
      <NumberPadSection setNum={setNum} />
    </Layout>
  )
}
export default Tags
