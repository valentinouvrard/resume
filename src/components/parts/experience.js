import React from 'react'
import styled from 'styled-components'

import LogoEpita from '../../ressources/epita.svg'
import LogoMySG from '../../ressources/mysg.jpg'
const Container = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 7mm;
`

const Title = styled.h2`
  font-weight: 350;
  margin-bottom: 4mm;
`

const ExperienceLogo = styled.img`
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

const ExperienceTitle = styled.h4`
  color: ${props => props.theme.palette.greys.dark};
`
const ExperienceSubInfos = styled.p`
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

function Experience() {
  return (
    <Container>
      <Title>Experiences</Title>
      <SubContainer>
        <LogoContainer>
          <ExperienceLogo src={LogoEpita}/>
        </LogoContainer>
        <ExperienceTitle>EPITA - École Pour l'Informatique et les Techniques Avancées <Light>January 2019 - Now</Light> </ExperienceTitle>
        <ExperienceSubInfos>Teaching Assistant C / C++ / Java / SQL / Web</ExperienceSubInfos>
      </SubContainer>
      <SubContainer>
        <LogoContainer>
          <ExperienceLogo src={LogoMySG}/>
        </LogoContainer>
        <ExperienceTitle> My-Serious-Game <Light>September 2018 - January 2019</Light> </ExperienceTitle>
        <ExperienceSubInfos> Internship in innovation department. Realized a Slack chatbot and various proofs of concepts.</ExperienceSubInfos>
      </SubContainer>
    </Container>
  )
}
export default Experience;
