import styled from 'styled-components'
import Icon from 'components/Icon'
import { useRef, useState, memo } from 'react'
const Wrapper = styled.section`
  background-color: #fff;
  padding: 18px 0 18px 35px;
  .note-editor {
    display: flex;
    .icon {
      width: 18px;
      height: 18px;
      fill: #aaaaaa;
    }
    input {
      font-size: 14px;
      padding-left: 10px;
      color: #aaaaaa;
    }
  }
`
const NotesSection = () => {
  const [note, setNote] = useState('')
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur = () => {
    if (refInput.current) {
      setNote(refInput.current.value)
    }
  }
  console.log('Note 组件渲染了')
  return (
    <Wrapper>
      <div className="note-editor">
        <Icon name="editor" />
        <input
          ref={refInput}
          type="text"
          placeholder="在这里添加注释"
          defaultValue={note}
          onBlur={onBlur}
        />
      </div>
    </Wrapper>
  )
}
export default memo(NotesSection)
