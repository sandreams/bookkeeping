import React, { memo, useState } from 'react'
import styled from 'styled-components'
import Numkey from './components/Numkey'
import { fontColor } from 'helper'

const Wrapper = styled.section`
  background-color: #fff;
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
    padding: 0 20px;
    text-align: center;
  }
  .icon {
    fill: ${fontColor.normal};
    width: 24px;
    height: 24px;
  }
`
const NumberPadSection = ({
  setNumText,
  setCalText,
  output,
}: {
  setNumText: React.Dispatch<string>
  setCalText: React.Dispatch<string>
  output: string
}) => {
  console.log('NumberPad 组件渲染了')
  const [left, setLeft] = useState('')
  const [right, setRight] = useState('')
  const [mode, setMode] = useState('')
  const concatCalText = () => {}
  const onClickNum = (e: React.MouseEvent) => {
    const dataset = (e.target as HTMLDivElement).dataset
    if (!dataset || !dataset['key']) {
      return
    }
    const text = dataset['key']
    console.log('text', text)
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (text === '0.00') break
      case '.':
      case '-':
      case '+':
      case 'backspace':
      case 'save':
      default:
        break
    }
  }
  return (
    <Wrapper onClick={onClickNum}>
      <Numkey cls="a-area" dataKey="7">
        {'7'}
      </Numkey>
      <Numkey cls="a-area" dataKey="4">
        {'4'}
      </Numkey>
      <Numkey cls="a-area" dataKey="1">
        {'1'}
      </Numkey>
      <Numkey cls="a-area" dataKey=".">
        {'•'}
      </Numkey>
      <Numkey cls="a-area" dataKey="8">
        {'8'}
      </Numkey>
      <Numkey cls="a-area" dataKey="5">
        {'5'}
      </Numkey>
      <Numkey cls="a-area" dataKey="2">
        {'2'}
      </Numkey>
      <Numkey cls="a-area" dataKey="0">
        {'0'}
      </Numkey>
      <Numkey cls="a-area" dataKey="9">
        {'9'}
      </Numkey>
      <Numkey cls="a-area" dataKey="6">
        {'6'}
      </Numkey>
      <Numkey cls="a-area" dataKey="3">
        {'3'}
      </Numkey>
      <Numkey cls="a-area" dataKey="backspace">
        {'退格'}
      </Numkey>
      <Numkey cls="a-area" dataKey="-">
        {'-'}
      </Numkey>
      <Numkey cls="a-area" dataKey="+">
        {'+'}
      </Numkey>
      {['plus', 'minus'].indexOf(mode) >= 0 ? (
        <Numkey cls="b-area" dataKey="save">
          {'保存'}
        </Numkey>
      ) : (
        <Numkey cls="b-area" dataKey="=">
          {'='}
        </Numkey>
      )}
    </Wrapper>
  )
}
export default memo(NumberPadSection)
