import React from 'react'
import styled from 'styled-components'

import LogoEpita from '../../ressources/epita.svg'
import LogoMySG from '../../ressources/mysg.jpg'
import LocationDateInfo from '../decoration/location-date-info';
const Container = styled.div`
  display: block;
  width: 100%;
`

const Title = styled.h2`
  font-weight: 400;
  margin-bottom: 3mm;
`

const LogoContainer = styled.div`
  width: 2cm;
  height: 1.5cm;
  float: left;
  margin-right: 4mm;
`

const ExperienceLogo = styled.img`
  max-width: 2cm;
  max-height: 1.5cm;
  display: block;
  margin: auto;
`

const SubContainer = styled.div`
  margin-bottom: 6mm;
`

const ExperienceTitle = styled.h4`
  font-weight: 600;
  color: ${props => props.theme.palette.greys.dark};
`
const ExperienceSubInfos = styled.p`
  font-weight: 400;
  color: ${props => props.theme.palette.greys.normal};
`

function Experience() {
  return (
    <Container>
      <Title>Experiences</Title>
      <SubContainer>
        <LogoContainer>
          <ExperienceLogo src={LogoEpita}/>
        </LogoContainer>
        <ExperienceTitle>EPITA - École Pour l'Informatique et les Techniques Avancées</ExperienceTitle>
        <ExperienceSubInfos>Teaching Assistant C / C++ / Java / SQL / Web</ExperienceSubInfos>
        <LocationDateInfo dates={"Jan 2019 - Now"} location={"France, Paris"}/>
      </SubContainer>
      <SubContainer>
        <LogoContainer>
          <ExperienceLogo src={LogoMySG}/>
        </LogoContainer>
        <ExperienceTitle> My-Serious-Game </ExperienceTitle>
        <ExperienceSubInfos> Internship in innovation department. Realized a Slack chatbot and various proofs of concepts.</ExperienceSubInfos>
        <LocationDateInfo dates={"Sept 2018 - Jan 2019"} location={"France, Tours"}/>
      </SubContainer>
    </Container>
  )
}
export default Experience;
