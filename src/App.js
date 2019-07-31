/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { ContextProvider } from './context'
import WithThemes from './theme'
import styled from 'styled-components'

const MainContainer = styled.div`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  width: 100%;
  min-height: 100%;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
`
function App() {
  return (
    <ContextProvider>
      <WithThemes>
        <MainContainer>
        </MainContainer>
      </WithThemes>
    </ContextProvider>)
}
export default App
