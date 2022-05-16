import Layout from 'src/components/Layout'
import { useRef, useState } from 'react'
import CategorySection from './CategorySection'
import TagsSection from './TagsSection'
import NotesSection from './NotesSection'
import InputSection from './InputSection'
import { TagData, MoneyDataSet, CategoryData } from 'types/money'

const Money = () => {
  const [dataset, setDataSet] = useState<MoneyDataSet>({
    category: 'expend',
    tag: { id: 0 },
    note: '',
    amount: '0',
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
      <CategorySection
        cate={dataset.category}
        onChange={(cate: CategoryData) =>
          setDataSet({
            ...dataset,
            category: cate,
          })
        }
      />
      <InputSection
        numText={dataset.amount}
        onChange={(amount: string) =>
          setDataSet({
            ...dataset,
            amount,
          })
        }
      >
        <TagsSection
          selected={dataset.tag}
          onChange={(tag: TagData) =>
            setDataSet({
              ...dataset,
              tag,
            })
          }
        />
        <NotesSection
          note={dataset.note}
          onChange={(note: string) =>
            setDataSet({
              ...dataset,
              note,
            })
          }
        />
      </InputSection>
    </Layout>
  )
}
export default Money
