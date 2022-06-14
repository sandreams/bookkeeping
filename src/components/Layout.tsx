import { ReactNode, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Nav from 'src/components/Nav'
import TopTitle from './TopTitle'
import { bgColor } from 'src/helper'
const Wrapper = styled.div`
  /* min-height: 100vh; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${bgColor.grey};
`

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 54px;
`
type Props = {
  scrollTop: number
  title: string
  children: ReactNode
}
const Layout = (props: Props) => {
  const mainRef = useRef<HTMLElement>(null)
  useEffect(() => {
    setTimeout(() => {
      if (!mainRef.current) {
        return
      }
      console.log(mainRef.current.scrollTop)
      console.log('props.scrollTop :>> ', props.scrollTop)
      mainRef.current.scrollTop = props.scrollTop
    }, 2000)
  }, [props.scrollTop])
  return (
    <Wrapper>
      <TopTitle title={props.title} />
      <Main ref={mainRef}>{props.children}</Main>
      <Nav />
    </Wrapper>
  )
}
Layout.defaultProps = {
  scrollTop: 0,
}
export default Layout
