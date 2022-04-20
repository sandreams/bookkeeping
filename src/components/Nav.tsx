import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Icon from './Icon'

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
          <Icon name="tag" />
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <Icon name="money" />
          <Link to="/money">记一笔</Link>
        </li>
        <li>
          <Icon name="chart" />
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}
