import React from 'react'
import styled from 'styled-components'

import LogoEpita from '../../ressources/epita.svg'
import LogoGCD from '../../ressources/gcd.png'

const Container = styled.div`
`

const Title = styled.h2`
  font-weight: 350;
  margin-bottom: 4mm;
`

const EducationLogo = styled.img`
  max-width: 1.5cm;
  max-height: 1cm;
  display: block;
  margin: auto;
`

const SubContainer = styled.div`
  margin-bottom: 8mm;
`

const Light = styled.span`
  font-weight: 150;
`

const EducationTitle = styled.h4`
  color: ${props => props.theme.palette.greys.dark};
`
const EducationSubInfos = styled.p`
  font-weight: 150;
  margin-top: 2mm;
  color: ${props => props.theme.palette.greys.normal};
`
const LogoContainer = styled.div`
  width: 1.5cm;
  height: 1cm;
  float: left;
  margin-right: 4mm;
`

function Education() {
  return (
    <Container>
      <Title>Education <Light>(Graduated in 2020)</Light></Title>
      <SubContainer>
        <LogoContainer>
          <EducationLogo src={LogoEpita}/>
        </LogoContainer>
        <EducationTitle> EPITA - École Pour l'Informatique et les Techniques Avancées <Light>2015 - 2020</Light> </EducationTitle>
        <EducationSubInfos> Computer Engineering School - Master degree - Multimedia Specialization</EducationSubInfos>
      </SubContainer>
      <SubContainer>
        <LogoContainer>
          <EducationLogo src={LogoGCD}/>
        </LogoContainer>
        <EducationTitle> GCD - Griffith College Dublin <Light>2017</Light> </EducationTitle>
        <EducationSubInfos> One semester abroad - Studying Computer Science</EducationSubInfos>
      </SubContainer>
    </Container>
  )
}
export default Education;
