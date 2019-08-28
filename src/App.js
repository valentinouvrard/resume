import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Header from './components/parts/header'
import GlobalStyle from './style/global-style'
import theme from './style/theme'
import Education from './components/parts/education';
import Experience from './components/parts/experience';
import Projects from './components/parts/projects';
import Skills from './components/parts/skills';
import BottomNote from './components/parts/bottom-note';

const MainContainer = styled.div`
  font-family: 'Open Sans', "Helvetica Neue", Helvetica, Arial, sans-serif;
  
  padding: 1cm 1cm 0cm 1cm;
  * {
    -webkit-print-color-adjust: exact;
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
          <BottomNote/>
        </MainContainer>
      </>
    </ThemeProvider>
  )
}
export default App
