import styled from 'styled-components'
const NumkeyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* &:hover {
    color: #fff;
    background: #ffdc00;
  } */
`
const Numkey = ({
  children,
  cls,
  dataKey,
}: {
  children: React.ReactChild | string
  cls: string
  dataKey: string
}) => {
  return (
    <NumkeyWrapper className={cls} data-key={dataKey}>
      {children}
    </NumkeyWrapper>
  )
}
export default Numkey
