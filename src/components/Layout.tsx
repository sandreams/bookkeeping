import styled from 'styled-components'
import Nav from 'src/components/Nav'
import TopTitle from './TopTitle'
import { bgColor } from 'src/helper'
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${bgColor.grey};
`

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const Layout = (props: any) => {
  return (
    <Wrapper>
      <TopTitle title={props.title} />
      <Main>{props.children}</Main>
      <Nav />
    </Wrapper>
  )
}
export default Layout
