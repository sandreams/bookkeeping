import Layout from 'src/components/Layout'
import { useState } from 'react'
import { Toast, Loading, Modal } from 'zarm'
import CategorySection from './CategorySection'
import TagsSection from './TagsSection'
import NotesSection from './NotesSection'
import InputSection from './InputSection'
import { TagData, MoneyDataSet, CategoryData } from 'types/money'
import { useRecords } from 'src/hooks/useRecords'

const defaultFormData = {
  category: 'expend' as CategoryData,
  tag: { id: 0 } as TagData,
  note: '',
  amount: '0',
}
const Money = () => {
  const [dataset, setDataSet] = useState<MoneyDataSet>(defaultFormData)
  const { addRecord } = useRecords()
  const onChange = (obj: Partial<MoneyDataSet>) => {
    setDataSet({
      ...dataset,
      ...obj,
    })
  }
  const submit = () => {
    console.log('用户点击了确认')
    Loading.show()
    // 校验数据
    if (
      !dataset.amount ||
      dataset.amount === '0' ||
      !/^(\d|\.)+[0-9]$/.test(dataset.amount)
    ) {
      showErrorDislog('金额输入有误！')
      return
    }
    if (!(dataset.tag && dataset.tag.id)) {
      showErrorDislog('请选择一个分类！')
      return
    }
    addRecord({ ...dataset })
      .then((res) => {
        console.log('res :>> ', res)
        Toast.show({
          content: '保存成功',
          stayTime: 2500,
          afterClose: () => {
            setDataSet(defaultFormData)
          },
        })
      })
      .finally(() => {
        Loading.hide()
      })
  }
  const showErrorDislog = (text: string) => {
    const modal = Modal.alert({
      className: 'dialog',
      title: '错误',
      content: text,
      animationType: 'fade',
      onCancel: () => {
        modal.hide()
        Loading.hide()
      },
    })
  }
  console.log('主组件渲染了')
  return (
    <Layout title="记一笔">
      {/* <p>{JSON.stringify(dataset)}</p> */}
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
