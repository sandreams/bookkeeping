import Layout from 'components/Layout'
import { useRef } from 'react'
import CategorySection from './CategorySection'
import TagsSection from './TagsSection'
import NotesSection from './NotesSection'
import InputSection from './InputSection'

const Money = () => {
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
        <TagsSection />
        <NotesSection />
      </InputSection>
    </Layout>
  )
}
export default Money
