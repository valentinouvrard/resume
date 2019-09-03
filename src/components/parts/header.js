import React from 'react'
import styled from 'styled-components'
import PersonalInfos from './personal-infos';

const Container = styled.div`
  margin-bottom: 3mm;
`

const NameTitle = styled.h1`
  font-weight: 150;
`

const SubTitle = styled.h4`
  font-weight: 150;
  margin-bottom: 1mm;
  color: ${props => props.theme.palette.greys.normal};
`

const Bold = styled.span`
  font-weight: 400;
`
function Header() {
  return (
    <Container>
      <NameTitle>Valentin <Bold>Ouvrard</Bold></NameTitle>
      <SubTitle>Looking for a 6 months internship in Front-end Engineering</SubTitle>
      <PersonalInfos/>
    </Container>
  )
}
export default Header
