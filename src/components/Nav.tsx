import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Icon from './Icon'
import { fontColor, svgColor } from 'helper'
const NavWrapper = styled.nav`
  background-color: #fff;
  > ul {
    display: flex;
    > li {
      text-align: center;
      width: 33.3333%;
      a {
        padding: 4px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 12px;
        .icon {
          width: 24px;
          height: 24px;
        }
        &.selected {
          color: ${fontColor.active};
          .icon {
            fill: ${svgColor.active};
          }
        }
      }
    }
  }
`
export default function Nav() {
  return (
    <NavWrapper>
      <ul className="nav navbar-nav">
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tag" />
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money" />
            记一笔
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="chart" />
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}
