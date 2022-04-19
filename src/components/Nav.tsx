import { Link } from 'react-router-dom'
import styled from 'styled-components'
const NavWrapper = styled.nav`
  border: 1px solid black;
  > ul {
    display: flex;
    > li {
      text-align: center;
      width: 33.3333%;
      padding: 10px;
    }
  }
`
export default function Nav() {
  return (
    <NavWrapper>
      <ul className="nav navbar-nav">
        <li>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <Link to="/money">记一笔</Link>
        </li>
        <li>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}
