import { match } from 'assert'
import React, { useEffect } from 'react'
import { Link, Route, Switch, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Nav from 'components/Nav'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
)

const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
)
const NoMatch = () => {
  let location = useLocation()

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
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
    <Wrapper>
      <Main>
        <Switch>
          <Route exact path="/tags" component={Home}></Route>
          <Route path="/money">
            <Category />
          </Route>
          <Route path="/statistics" component={Products}></Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Main>
      <Nav />
    </Wrapper>
  )
}
