import styled from 'styled-components'
const NumkeyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #fff;
    background: #ffdc00;
  }
`
const Numkey = ({ children, cls }: { children: any; cls: string }) => {
  return <NumkeyWrapper className={cls}>{children}</NumkeyWrapper>
}
export default Numkey
