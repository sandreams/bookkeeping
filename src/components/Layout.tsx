import styled from 'styled-components'
import Nav from 'components/Nav'
const Wrapper = styled.div`
  border: 1px solid red;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  border: 1px solid green;
  flex: 1;
`
const Layout = (props: any) => {
  return (
    <Wrapper>
      <Main>{props.children}</Main>
      <Nav />
    </Wrapper>
  )
}
export default Layout
