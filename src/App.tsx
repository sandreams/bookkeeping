import React from 'react'
import './App.scss'
import styled from 'styled-components'

const Button = styled.button`
  line-height: 40px;
  color: red;
`
function App() {
  return (
    <div className="App">
      <Button>fan</Button>
    </div>
  )
}

export default App
