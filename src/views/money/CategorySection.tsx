import styled from 'styled-components'
import { memo } from 'react'
import { CategoryProps, CategoryData } from 'types/money'
const Wrapper = styled.section`
  background-color: #fff;
  ul {
    display: flex;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
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
const CategorySection: React.FC<CategoryProps> = (props) => {
  const tabConfig = [
    { key: 'expend', name: '支出' },
    { key: 'income', name: '收入' },
  ]
  console.log('Category 组件渲染了')
  return (
    <Wrapper>
      <ul>
        {tabConfig.map((t, index) => (
          <li
            key={index}
            className={t.key === props.cate ? 'active' : ''}
            onClick={() => props.onChange(t.key as CategoryData)}
          >
            {t.name}
          </li>
        ))}
      </ul>
      {/* <button onClick={getInputNum}>获取input的值</button> */}
    </Wrapper>
  )
}
export default memo(CategorySection)
