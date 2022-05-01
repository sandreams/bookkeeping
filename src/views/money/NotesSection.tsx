import styled from 'styled-components'
import Icon from 'components/Icon'
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
  return (
    <Wrapper>
      <div className="note-editor">
        <Icon name="editor" />
        <input type="text" placeholder="在这里添加注释" />
      </div>
    </Wrapper>
  )
}
export default NotesSection
