import styled from 'styled-components'
import Icon from 'src/components/Icon'
import { useLocation, useHistory } from 'react-router-dom'
import { stateType } from 'types/tags'
import { svgColor } from 'src/helper'
const iconList = [
  { name: '奖金', className: 'icon_bonus' },
  { name: '商务', className: 'icon_business' },
  { name: '衣服', className: 'icon_clothes' },
  { name: '日常开销', className: 'icon_daily' },
  { name: '捐赠', className: 'icon_donate' },
  { name: '娱乐', className: 'icon_entertainment' },
  { name: '食物', className: 'icon_food' },
  { name: '燃油', className: 'icon_fuel' },
  { name: '房租', className: 'icon-icon_houserent' },
  { name: '爱好', className: 'icon-icon_intrest' },
  { name: '投资', className: 'icon-icon_investment' },
  { name: '化妆品', className: 'icon-icon_makeup' },
  { name: '医疗', className: 'icon-icon_medicine' },
  { name: '其他', className: 'icon-icon_other' },
  { name: '通信账单', className: 'icon-icon_phone' },
  { name: '工资', className: 'icon-icon_salary' },
  { name: '购物', className: 'icon-icon_shopping' },
  { name: '烟酒', className: 'icon-icon_smoke_wine' },
  { name: '学习', className: 'icon-icon_study' },
  { name: '旅游', className: 'icon-icon_tour' },
  { name: '交通', className: 'icon-icon_traffic' },
  { name: '奖品', className: 'icon-icon_winning' },
]
const Wrapper = styled.section`
  padding-top: 24px;
  header {
    padding: 0 20px;
    font-size: 18px;
  }
  .icon-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    .icon-wrapper {
      display: flex;
      flex: 0 0 25%;
      flex-direction: column;
      align-items: center;
      padding: 10px 0;
      margin: 10px 0;
      position: relative;
      .icon.icon-checked {
        display: none;
      }
      &.current {
        background: #f1f0f5;
        .icon.icon-checked {
          position: absolute;
          display: inline-block;
          bottom: 0;
          right: 0;
          width: 18px;
          height: 18px;
          fill: ${svgColor.active};
          /* padding: 3px; */
          margin-right: 10px;
        }
      }
      .icon {
        width: 30px;
        height: 30px;
      }
      p {
        margin-top: 5px;
      }
    }
  }
`
const Icons = () => {
  const { state } = useLocation<stateType>()
  const history = useHistory()
  const selectIcon = (iconName: string) => {
    history.replace({ pathname: state.oldPath, state: { ...state, iconName } })
  }
  return (
    <Wrapper>
      <header>请选择一个图标:</header>
      <div className="icon-container">
        {iconList.map((i) => (
          <div
            key={i.className}
            className={
              'icon-wrapper' +
              (state.iconName === i.className ? ' current' : '')
            }
            onClick={() => selectIcon(i.className)}
          >
            <Icon name={i.className} />
            <p>{i.name}</p>
            <Icon name="check" iconClass="icon-checked" />
          </div>
        ))}
      </div>
    </Wrapper>
  )
}
export default Icons
