import Layout from 'components/Layout'
import Icon from 'components/Icon'
import { useState, useRef } from 'react'
import Numpad from './components/Numpad'
import NumInput from './components/NumInput'
import TagItem from './components/TagItem'
import CategorySection from './CategorySection'
import InputSection from './InputSection'
import TagsSection from './TagsSection'
import NotesSection from './NotesSection'
import NumberPadSection from './NumberPadSection'

const tagList = [
  {
    tagName: '餐饮',
    isActive: false,
    iconName: '餐饮',
  },
  {
    tagName: '购物',
    isActive: false,
    iconName: '购物',
  },
  {
    tagName: '交通',
    isActive: false,
    iconName: '交通',
  },
  {
    tagName: '水电费',
    isActive: false,
    iconName: '水电',
  },
  {
    tagName: '外卖',
    isActive: false,
    iconName: '外卖',
  },
  {
    tagName: '租赁',
    isActive: false,
    iconName: '租赁',
  },
  {
    tagName: '娱乐',
    isActive: false,
    iconName: '娱乐',
  },
]
const Tags = () => {
  const parentRef = useRef(null)
  const [type, setType] = useState('expend')
  const [activeIndex, setIndex] = useState(0)
  const tabConfig = [
    { key: 'expend', name: '支出' },
    { key: 'income', name: '收入' },
  ]
  const getInputNum = () => {
    // 获取 input 的实时输入值
    const num = (parentRef.current as any).num()
    console.log('num :>> ', num)
  }
  return (
    <Layout title="标签">
      <CategorySection>
        <ul>
          {tabConfig.map((t, index) => (
            <li
              key={index}
              className={t.key === type ? 'active' : ''}
              onClick={() => setType(t.key)}
            >
              {t.name}
            </li>
          ))}
        </ul>
        {/* <button onClick={getInputNum}>获取input的值</button> */}
      </CategorySection>
      <InputSection>
        <NumInput ref={parentRef} />
      </InputSection>
      <TagsSection>
        {tagList.map((t, index) => (
          <TagItem
            key={index}
            isActive={activeIndex === index}
            tagName={t.tagName}
            iconName={t.iconName}
            onTagChange={(index) => setIndex(index)}
          />
        ))}
      </TagsSection>
      <NotesSection>
        <div className="note-editor">
          <Icon name="editor" />
          <input type="text" placeholder="在这里添加注释" />
        </div>
      </NotesSection>
      <NumberPadSection>
        <Numpad />
      </NumberPadSection>
    </Layout>
  )
}
export default Tags
