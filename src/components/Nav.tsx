import { Link } from 'react-router-dom'
import styled from 'styled-components'
require('icons/tag.svg')
require('icons/money.svg')
require('icons/chart.svg')

const NavWrapper = styled.nav`
  border: 1px solid black;
  > ul {
    display: flex;
    > li {
      text-align: center;
      width: 33.3333%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`
export default function Nav() {
  return (
    <NavWrapper>
      <ul className="nav navbar-nav">
        <li>
          <svg className="icon">
            <use xlinkHref="#tag"></use>
          </svg>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#money"></use>
          </svg>
          <Link to="/money">记一笔</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#chart"></use>
          </svg>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}
