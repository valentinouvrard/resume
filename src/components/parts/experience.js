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
  margin-right: 4mm;
`

const ExperienceLogo = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: auto;
`

const SubContainer = styled.div`
  margin-bottom: 4mm;
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
`

const ExperienceTitle = styled.h5`
  font-weight: 600;
  color: ${props => props.theme.palette.greys.dark};
`
const SubInfos = styled.p`
  font-weight: 200;
  color: ${props => props.theme.palette.greys.normal};
`

const ExpSubInfos = styled.p`
  font-weight: 400;
  color: ${props => props.theme.palette.greys.normal};
`


const Details = styled.div`
  margin-left: 2rem;
`
function Experience() {
  return (
    <Container>
      <Title>Experiences</Title>
      <SubContainer>
        <LogoContainer>
          <ExperienceLogo src={LogoEpita}/>
        </LogoContainer>
        <div>
          <ExperienceTitle>EPITA - École Pour l'Informatique et les Techniques Avancées</ExperienceTitle>
          <LocationDateInfo dates={"Jan 2019 - Now"} location={"France, Paris"}/>
          <ExpSubInfos>Teaching Assistant C / C++ / Java / SQL / Web (YAKA/ACU)</ExpSubInfos>
          <Details>
            <SubInfos>- Work on subjects and exercises in different languages</SubInfos>
            <SubInfos>- Explain programming concepts to first year students</SubInfos>
          </Details>
        </div>
      </SubContainer>
      <SubContainer>
        <LogoContainer>
          <ExperienceLogo src={LogoMySG}/>
        </LogoContainer>
        <div>
          <ExperienceTitle> My-Serious-Game </ExperienceTitle>
          <LocationDateInfo dates={"Sept 2018 - Jan 2019"} location={"France, Tours"}/>
          <ExpSubInfos> Internship in innovation department.</ExpSubInfos>
          <Details>
            <SubInfos>- Made VR projects with several technologies (HTC Vive, LeapMotion, ...)</SubInfos>
            <SubInfos>- Create a Slack bot in order to explore the effects of micro-learning on a professional environment</SubInfos>
            <SubInfos>- Add a front-end to interract with the Slack bot datas (made with React)</SubInfos>
          </Details>
        </div>
      </SubContainer>
    </Container>
  )
}
export default Experience;
