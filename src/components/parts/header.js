import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
`

const NameTitle = styled.h1`
  font-weight: 150;
  margin-bottom: 0.2cm;
`

const SubTitle = styled.h3`
  font-weight: 150;
  color: ${props => props.theme.palette.greys.normal};
`

const Bold = styled.span`
  font-weight: 200;
`
function Header() {
  return (
    <Container>
      <NameTitle>Valentin <Bold>Ouvrard</Bold></NameTitle>
      <SubTitle>Front-end developer looking for a 6 months internship</SubTitle>
    </Container>
  )
}
export default Header
