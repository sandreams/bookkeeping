import styled from 'styled-components'
import Layout from 'components/Layout'
import { useState, useRef, forwardRef, useImperativeHandle } from 'react'
const CategorySection = styled.section`
  ul {
    display: flex;
    > li {
      width: 50%;
      text-align: center;
      border: 1px solid #999;
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
  align-items: center;
  padding-left: 25px;
`
const TagsSection = styled.section``
const NotesSection = styled.section``
const NumberPadSection = styled.section``
const NumInputWrapper = styled.div`
  /* border: 1px solid black; */
  font-size: 50px;
  border-bottom: 1px solid black;
  padding: 10px 0;
`
const NumInput = forwardRef((props, parentRef) => {
  const inputRef = useRef(null)
  useImperativeHandle(parentRef, () => {
    return {
      num() {
        return (inputRef.current as any).value
      }
    }
  })
  return (
    <NumInputWrapper>
      <input type="number" ref={inputRef} />
    </NumInputWrapper>
  )
})
const Tags = () => {
  const parentRef = useRef(null)
  const [type, setType] = useState('expend')
  const tabConfig = [
    { key: 'expend', name: '支出' },
    { key: 'income', name: '收入' }
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
            <li key={index} className={t.key === type ? 'active' : ''} onClick={() => setType(t.key)}>
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
      <NotesSection />
      <NumberPadSection />
    </Layout>
  )
}
export default Tags
