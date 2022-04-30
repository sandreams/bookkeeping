import styled from 'styled-components'
import Layout from 'components/Layout'
import Icon from 'components/Icon'
import { useState, useRef } from 'react'
import Numpad from './components/Numpad'
import NumInput from './components/NumInput'
const CategorySection = styled.section`
  background-color: #fff;
  ul {
    display: flex;
    > li {
      width: 50%;
      text-align: center;
      padding: 5px 0;
      line-height: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      font-size: 14px;
      &:hover {
        cursor: pointer;
      }
      &.active {
        color: #f4a623;
        &::after {
          opacity: 1;
        }
      }
      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid #f4a623;
        bottom: 0px;
        opacity: 0;
        transition: opacity 0.5s ease-out;
        /* animation: 0.4s linear slidein; */
      }
    }
  }
  @keyframes slidein {
    from {
      transform: translateX(-400px);
    }
    50% {
      transform: translateX(-200px);
    }
    to {
      transform: translateX(0);
    }
  }
`
const InputSection = styled.section`
  height: 140px;
  display: flex;
  align-items: start;
  padding-left: 35px;
`
const TagsSection = styled.section`
  background-color: #fff;
  flex: 1;
`
const NotesSection = styled.section`
  background-color: #fff;
  padding: 18px 0 18px 35px;
  .note-editor {
    display: flex;
    .icon {
      width: 18px;
      height: 18px;
      fill: #aaaaaa;
    }
    input {
      font-size: 14px;
      padding-left: 10px;
      color: #aaaaaa;
    }
  }
`
const NumberPadSection = styled.section`
  background-color: #fff;
`

const Tags = () => {
  const parentRef = useRef(null)
  const [type, setType] = useState('expend')
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
      <TagsSection />
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
