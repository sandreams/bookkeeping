import { memo, useState } from 'react'
import Numkey from './components/Numkey'
import { computeOutput } from './InputSection/computeOutput'
import {
  Wrapper,
  OutputSection,
  NumberPadSection,
} from './InputSection/Wrapper'
import { InputProps } from 'types/money'

const InputSection: React.FC<InputProps> = (props) => {
  const [calText, setCalText] = useState('')
  const [editMode, setMode] = useState(false)
  const { numText } = props
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
    props.onChange(output)
  }
  const onClickNum = (e: React.MouseEvent) => {
    const dataset = (e.target as HTMLDivElement).dataset
    if (!dataset || !dataset['key']) {
      return
    }
    const text = dataset['key']
    console.log('text', text)
    const output = computeOutput(text, numText, calText, editMode)
    for (const stateName in output) {
      if (stateName === 'numOutput') {
        setOutput(output[stateName] || '')
      }
      if (stateName === 'calOutput') {
        setCalText(output[stateName] || '')
      }
      if (stateName === 'modeOutput') {
        setMode(output[stateName] || false)
      }
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
export default memo(InputSection)
