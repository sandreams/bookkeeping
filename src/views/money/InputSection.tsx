import { fontColor, borderColor } from 'helper'
import { useState } from 'react'
import styled from 'styled-components'
import Numkey from './components/Numkey'

const Wrapper = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  .section-slot {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`
const OutputSection = styled.div`
  height: 140px;
  display: flex;
  align-items: start;
  padding-left: 35px;
  flex-wrap: wrap;
  .output-num {
    width: 100%;
    font-size: 48px;
    padding: 25px 0 0 0;
    color: ${fontColor.num};
  }
  .output-cal {
    width: 100%;
    font-size: 20px;
    padding: 25px 0 0 0;
    border-bottom: 2px solid ${borderColor.green};
    color: ${fontColor.normal};
  }
`
const NumberPadSection = styled.div`
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
const InputSection = (props: any) => {
  const [numText, setNumText] = useState('0')
  const [calText, setCalText] = useState('')
  const [left, setLeft] = useState('')
  const [right, setRight] = useState('')
  const [mode, setMode] = useState('')
  const setOutput = (output: string) => {
    if (output.length > 10) {
      output = output.slice(0, 10)
    } else if (output.length === 0) {
      output = '0'
    } else if (output.indexOf('.') >= 0 && output.split('.')[1].length > 2) {
      return
    }
    setNumText(output)
  }
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
        if (numText === '0') {
          setOutput(text)
        } else {
          setOutput(numText + text)
        }
        break
      case '.':
        if (numText.indexOf('.') >= 0) {
          return
        }
        setOutput(numText + '.')
        break
      case '-':
      case '+':
      case 'backspace':
        setOutput(numText.slice(0, -1))
        break
      case 'save':
      default:
        break
    }
  }
  return (
    <Wrapper>
      <OutputSection>
        <div className="output-num">{numText}</div>
        <div className="output-cal">23423</div>
      </OutputSection>
      <div className="section-slot">{props.children}</div>
      <NumberPadSection onClick={onClickNum}>
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
            {'='}
          </Numkey>
        ) : (
          <Numkey cls="b-area" dataKey="=">
            {'保存'}
          </Numkey>
        )}
      </NumberPadSection>
    </Wrapper>
  )
}
export default InputSection
