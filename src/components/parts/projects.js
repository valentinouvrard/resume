import React from 'react'
import styled from 'styled-components'

import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import CustomFaIcon from '../decoration/custom-fa-icon';
const Container = styled.div`
  display: block;
  width: 100%;
`

const Title = styled.h2`
  font-weight: 400;
`

const SubContainer = styled.div`
  margin-bottom: 4mm;
`

const ProjectTitle = styled.h5`
  color: ${props => props.theme.palette.greys.dark};
  display: inline-block;
  font-weight: 600;
  margin-right: 4mm;
`
const ProjectSubInfos = styled.p`
  font-weight: 400;
  color: ${props => props.theme.palette.greys.normal};
`

const ProjectTechs = styled(ProjectSubInfos)`
  color: ${props => props.theme.palette.primary};
  display: inline-block;
  font-weight: 150;
`

const Details = styled.div`
  margin-left: 2rem;
`


const SubInfos = styled.p`
  font-weight: 200;
  color: ${props => props.theme.palette.greys.normal};
`

const InfoLink = styled.a`
  font-size: 0.7rem;
`

const NewTabLink = (props) => <InfoLink target="_blank" rel="noopener noreferrer" href={props.href}> {props.children} </InfoLink>

const ProjectLink = styled.div`
  margin-right: 4mm;
  display: inline-block;
`

function Projects() {
  return (
    <Container>
      <Title>Projects</Title>
      <SubContainer>
        <ProjectTitle>Bananup</ProjectTitle>
        <ProjectTechs>Django, React</ProjectTechs>
        <div>
          <ProjectLink>
            <CustomFaIcon icon={faLink} size="xs"/>
            <NewTabLink href="https://bananup.co/">bananup.co</NewTabLink>
          </ProjectLink>
          <ProjectLink>
            <CustomFaIcon icon={faGithub} size="xs"/>
            <NewTabLink href="https://github.com/valentinouvrard/bananup-front">Bananup-front</NewTabLink>
          </ProjectLink>
        </div>
        <ProjectSubInfos>In the context of Epita's StartupLab, we created a website made for semi-competitive gamers that want to improve their gaming skills thanks to community-driven feedbacks.</ProjectSubInfos>
        <Details>
          <SubInfos>- Creating a startup project</SubInfos>
          <SubInfos>- Learning the concept of MVP</SubInfos>
        </Details>
      </SubContainer>
      <SubContainer>
        <ProjectTitle> Sportizen </ProjectTitle>
        <ProjectTechs>NodeJs, React Native</ProjectTechs>
        <div>
          <ProjectLink>
            <CustomFaIcon icon={faGithub} size="xs"/>
            <NewTabLink href="https://github.com/valentinouvrard/sportizen-app">Sportizen-app</NewTabLink>
          </ProjectLink>
        </div>
        <ProjectSubInfos>An application that allows users to generate sport activities and keep track of their performances.</ProjectSubInfos>
        <Details>
          <SubInfos>- Learning cross-platform mobile development with React Native</SubInfos>
          <SubInfos>- Facing geolocation problematics on mobile devices</SubInfos>
          <SubInfos>- Organizing a 1 year long project with a team of 4</SubInfos>
        </Details>
      </SubContainer>
    </Container>
  )
}
export default Projects;
