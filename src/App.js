import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Header from './components/parts/header'
import GlobalStyle from './style/global-style'
import theme from './style/theme'
import Education from './components/parts/education';
import Experience from './components/parts/experience';
import Projects from './components/parts/projects';
import Skills from './components/parts/skills';

const MainContainer = styled.div`
  font-family: 'Open Sans', "Helvetica Neue", Helvetica, Arial, sans-serif;
  background: white;
  display: block;
  margin: 0 auto;
  padding: 1cm;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
  width: 21cm;
  height: 29.7cm;
  > * {
    margin-bottom: 3mm;
  }
`
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle/>
        <MainContainer>
          <Header/>
          <Education/>
          <Experience/>
          <Projects/>
          <Skills/>
        </MainContainer>
      </>
    </ThemeProvider>
  )
}
export default App
