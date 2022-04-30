import styled from 'styled-components'
import Numkey from './Numkey'
import { fontColor } from 'helper'
const NumpadWrapper = styled.div`
  height: 200px;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(3, 1fr) 0.65fr;
  grid-auto-flow: column;
  gap: 2px 3px;
  .a-area {
    color: ${fontColor.normal};
    background: linear-gradient(121deg, #f5f5f7 18.26%, #fcfcfc 82.13%);
  }
  .b-area {
    grid-row: 3/-1;
    grid-column: 4;
    color: #fff;
    background: linear-gradient(130deg, #ff9a40 16%, #ffbd3b 88%);
    border-radius: 3px;
  }
`

const Numpad = () => {
  return (
    <NumpadWrapper>
      <Numkey cls="a-area">{'7'}</Numkey>
      <Numkey cls="a-area">{'4'}</Numkey>
      <Numkey cls="a-area">{'1'}</Numkey>
      <Numkey cls="a-area">{'.'}</Numkey>
      <Numkey cls="a-area">{'8'}</Numkey>
      <Numkey cls="a-area">{'5'}</Numkey>
      <Numkey cls="a-area">{'2'}</Numkey>
      <Numkey cls="a-area">{'0'}</Numkey>
      <Numkey cls="a-area">{'9'}</Numkey>
      <Numkey cls="a-area">{'6'}</Numkey>
      <Numkey cls="a-area">{'3'}</Numkey>
      <Numkey cls="a-area">{'-'}</Numkey>
      <Numkey cls="a-area">{'-'}</Numkey>
      <Numkey cls="a-area">{'+'}</Numkey>
      <Numkey cls="b-area">{'保存'}</Numkey>
    </NumpadWrapper>
  )
}
export default Numpad
