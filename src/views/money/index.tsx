import Layout from 'src/components/Layout'
import { useState } from 'react'
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
  const onChange = (obj: Partial<MoneyDataSet>) => {
    setDataSet({
      ...dataset,
      ...obj,
    })
  }
  const submit = () => {
    console.log('用户点击了确认')
  }
  console.log('主组件渲染了')
  return (
    <Layout title="记一笔">
      <p>{JSON.stringify(dataset)}</p>
      <CategorySection
        cate={dataset.category}
        onChange={(cate: CategoryData) => onChange({ category: cate })}
      />
      <InputSection
        numText={dataset.amount}
        onChange={(amount: string) => onChange({ amount })}
        onConfirm={submit}
      >
        <TagsSection
          selected={dataset.tag}
          onChange={(tag: TagData) => onChange({ tag })}
        />
        <NotesSection
          note={dataset.note}
          onChange={(note: string) => onChange({ note })}
        />
      </InputSection>
    </Layout>
  )
}
export default Money
