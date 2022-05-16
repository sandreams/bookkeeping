import styled from 'styled-components'
import Icon from 'src/components/Icon'
import { useRef, memo } from 'react'
import { NoteProps } from 'types/money'
const Wrapper = styled.div`
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
const NotesSection: React.FC<NoteProps> = (props) => {
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur = () => {
    if (refInput.current) {
      props.onChange(refInput.current.value)
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
          defaultValue={props.note}
          onBlur={onBlur}
        />
      </div>
    </Wrapper>
  )
}
export default memo(NotesSection)
