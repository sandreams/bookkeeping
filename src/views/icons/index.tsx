import styled from 'styled-components'
import Icon from 'src/components/Icon'
const iconList = [
  { name: '奖金', className: 'home-line' },
  { name: '商务', className: 'account-box-line' },
  { name: '衣服', className: 'clothes' },
  { name: '日常开销', className: 'daily' },
  { name: '捐赠', className: 'donate' },
  { name: '娱乐', className: 'entertainment' },
  { name: '食物', className: 'food' },
  { name: '燃油', className: 'fuel' },
  { name: '房租', className: 'houserent' },
  { name: '爱好', className: 'interest' },
  { name: '投资', className: 'investment' },
  { name: '化妆品', className: 'makeup' },
  { name: '医疗', className: 'medicine' },
  { name: '其他', className: 'other' },
  { name: '通信账单', className: 'phone' },
  { name: '工资', className: 'salary' },
  { name: '购物', className: 'shopping' },
  { name: '烟酒', className: 'smoke_wine' },
  { name: '学习', className: 'study' },
  { name: '旅游', className: 'tour' },
  { name: '交通', className: 'traffic' },
  { name: '奖品', className: 'winning' },
]
const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .icon-wrapper {
    display: flex;
    flex: 0 0 25%;
    flex-direction: column;
    align-items: center;
    .icon {
      width: 20px;
      height: 20px;
      fill: #444;
    }
  }
`
const Icons = () => {
  return (
    <Wrapper>
      {iconList.map((i) => (
        <div key={i.className} className="icon-wrapper">
          <Icon name={'ri-' + i.className} />
          <p>{i.name}</p>
        </div>
      ))}
    </Wrapper>
  )
}
export default Icons
