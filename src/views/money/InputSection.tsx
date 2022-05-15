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
  padding: 30px 0 30px 35px;
  flex-wrap: wrap;

  .output-container {
    width: 100%;
    height: 100%;
    border-bottom: 2px solid ${borderColor.green};
    .output-num {
      font-size: 48px;
      color: ${fontColor.num};
    }
    .output-cal {
      font-size: 14px;
      color: ${fontColor.light};
    }
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
const matchDigit = (str: string): string[] => {
  return str.replace(/\s+/g, '').split(/\+|-/)
}
const matchOperator = (str: string): string[] => {
  return str.replace(/(\s|\d|\.)+/g, '').split('')
}
const sumStr = (str: string) => {
  const digitArray = matchDigit(str)
  const operatorArray = matchOperator(str)
  return operatorArray.reduce((pre, cur, index) => {
    return cur === '+'
      ? pre + Number(digitArray[index + 1])
      : pre - Number(digitArray[index + 1])
  }, Number(digitArray[0]))
}
/**
 * @description: 123+321-54  --> 123+321;  123 --> '' ; 123+ --> '123' ; '' --> ''
 * @param str
 * @return {*}
 */
const delCalText = (str: string) => {
  return str.replace(new RegExp(/[-|+]?(?:[\d|.]+)?$/, 'g'), '')
}
const InputSection = (props: any) => {
  const [numText, setNumText] = useState('0')
  const [calText, setCalText] = useState('')
  const [editMode, setMode] = useState(false)
  console.log('Input 组件 render 了')
  const setOutput = (output: string, text?: string) => {
    output = text ? numText + text : output
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
    let preCal = calText
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
        if (calText.endsWith('0')) {
          preCal = calText.slice(0, -1)
        }
        setCalText(preCal + text)
        if (!editMode) {
          setOutput(numText === '0' ? text : numText + text)
        } else {
          setOutput(sumStr(preCal + text).toString())
        }
        break
      case '.':
        if (numText.indexOf('.') < 0 && !editMode) {
          setOutput(numText + text)
        }
        if (calText.endsWith('.')) {
          preCal = calText.slice(0, -1)
        } else if (/[+|-]$/.test(calText)) {
          preCal = preCal + '0'
        }
        const lastNumInput = /[+|-](?:[\d|.]+)$/g.exec(preCal)
        if (
          lastNumInput &&
          lastNumInput[0] &&
          lastNumInput[0].indexOf('.') >= 0
        ) {
          return
        }
        setCalText((preCal || '0') + text)
        break
      case '-':
      case '+':
        if (/[+|-]$/.test(calText)) {
          preCal = calText.slice(0, -1)
        }
        setCalText((preCal || '0') + text)
        setMode(true)
        break
      case 'backspace':
        if (!editMode) {
          setOutput(numText.slice(0, -1))
        } else {
          const delCal = delCalText(calText)
          if (!delCal) {
            setMode(false)
          } else {
            setOutput(sumStr(delCal).toString())
          }
          setCalText(delCal)
        }
        break
      case '=':
        const calValue = sumStr(calText).toString()
        setOutput(calValue)
        setCalText(calValue)
        setMode(false)
        break
      case 'save':
      default:
        break
    }
  }
  return (
    <Wrapper>
      <OutputSection>
        <div className="output-container">
          <div className="output-num">{numText}</div>
          {editMode ? (
            <div className="output-cal">{calText}</div>
          ) : (
            <div className="output-cal"></div>
          )}
        </div>
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
        {editMode ? (
          <Numkey cls="b-area" dataKey="=">
            {'='}
          </Numkey>
        ) : (
          <Numkey cls="b-area" dataKey="save">
            {'保存'}
          </Numkey>
        )}
      </NumberPadSection>
    </Wrapper>
  )
}
export default InputSection
