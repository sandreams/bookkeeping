import { memo } from 'react'
import styled from 'styled-components'
import Icon from 'src/components/Icon'
import { fontColor, bgColor, svgColor } from 'src/helper'
import { SearchProps } from 'types/tags'
const Wrapper = styled.section`
  background: ${bgColor.white};
  padding: 10px;
  .checked-num {
    text-align: center;
    padding-bottom: 7px;
  }
  > span {
    font-size: ${fontColor.normal};
    line-height: 20px;
  }
  .search-for-tag {
    background: ${bgColor.grey};
    border-radius: 35px;
    padding: 10px;
    display: flex;
    align-items: center;
    input {
      font-size: 12px;
      line-height: 20px;
      color: ${fontColor.light};
    }
    .icon {
      height: 20px;
      width: 20px;
      fill: ${svgColor.light};
      margin-right: 5px;
    }
  }
`
const SearchSection: React.FC<SearchProps> = (props) => {
  console.log('Search 组件 render 了')
  return (
    <Wrapper>
      <div className="checked-num">
        <span>已选择3条</span>
      </div>
      <div className="search-for-tag">
        <Icon name="search" />
        <input
          type="text"
          value={props.query}
          placeholder="请输入关键词进行搜索"
          onChange={(event) => props.onChange(event.currentTarget.value)}
        />
      </div>
    </Wrapper>
  )
}
export default memo(SearchSection)
