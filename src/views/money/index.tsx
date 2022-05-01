import Layout from 'components/Layout'
import { useRef } from 'react'
import Numpad from './components/Numpad'
import NumInput from './components/NumInput'
import CategorySection from './CategorySection'
import InputSection from './components/InputSection'
import TagsSection from './TagsSection'
import NotesSection from './NotesSection'
import NumberPadSection from './NumberPadSection'

const Tags = () => {
  const parentRef = useRef(null)
  const getInputNum = () => {
    // 获取 input 的实时输入值
    const num = (parentRef.current as any).num()
    console.log('num :>> ', num)
  }
  return (
    <Layout title="记一笔">
      <CategorySection />
      <InputSection>
        <NumInput ref={parentRef} />
      </InputSection>
      <TagsSection />
      <NotesSection />
      <NumberPadSection>
        <Numpad />
      </NumberPadSection>
    </Layout>
  )
}
export default Tags
