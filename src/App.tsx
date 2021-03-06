import { Route, Switch, useLocation, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import Tags from 'src/views/tags'
import Money from 'src/views/money/index'
import Statistics from 'src/views/statistics'
import Tag from 'src/views/tag'
import Icons from 'src/views/icons'

const NoMatch = () => {
  let location = useLocation()
  return (
    <Wrapper>
      <Main>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </Main>
    </Wrapper>
  )
}
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
export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/money" />
      </Route>
      <Route exact path="/tags">
        <Tags />
      </Route>
      <Route exact path="/money">
        <Money />
      </Route>
      <Route exact path="/statistics">
        <Statistics />
      </Route>
      <Route path="/tag/edit">
        <Tag />
      </Route>
      <Route path="/tag/new" exact>
        <Tag />
      </Route>
      <Route exact path="/tag/icons">
        <Icons />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  )
}
