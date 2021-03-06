import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Icon from './Icon'
import { fontColor, svgColor } from 'src/helper'
const NavWrapper = styled.nav`
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
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
          fill: ${svgColor.normal};
        }
        span {
          margin-top: 5px;
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
            <span>标签</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money" />
            <span>记一笔</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="chart" />
            <span>统计</span>
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}
