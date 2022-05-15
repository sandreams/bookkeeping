import styled from 'styled-components'
import { bgColor } from 'src/helper'
const TopTitleWrapper = styled.header`
  background: ${bgColor.grey};
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`
type Props = {
  title: string
}
const TopTitle = (props: Props) => {
  return <TopTitleWrapper>{props.title}</TopTitleWrapper>
}
export default TopTitle
