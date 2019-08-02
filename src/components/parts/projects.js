import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: block;
  width: 100%;
`

const Title = styled.h2`
  font-weight: 400;
  margin-bottom: 3mm;
`

const SubContainer = styled.div`
  margin-bottom: 4mm;
`

const ProjectTitle = styled.h4`
  color: ${props => props.theme.palette.greys.dark};
  display: inline-block;
  margin-right: 4mm;
`
const ProjectSubInfos = styled.p`
  font-weight: 150;
  margin-bottom: 3mm;
  color: ${props => props.theme.palette.greys.normal};
`

const ProjectTechs = styled(ProjectSubInfos)`
  color: ${props => props.theme.palette.primary};
  display: inline-block;
`

function Projects() {
  return (
    <Container>
      <Title>Projects</Title>
      <SubContainer>
        <ProjectTitle>Bananup</ProjectTitle>
        <ProjectTechs>Django, React</ProjectTechs>
        <ProjectSubInfos>Website made for semi-competitor gamers that want to improve their gaming skills thanks to a community-driven feedbacks.</ProjectSubInfos>
      </SubContainer>
      <SubContainer>
        <ProjectTitle> NetflixRoulette </ProjectTitle>
        <ProjectTechs>Django, React</ProjectTechs>
        <ProjectSubInfos>Website made for french Netflix users. It allows you to choose randomly in the french catalog. For now, nothing more than categories are purposed as filter.</ProjectSubInfos>
      </SubContainer>
      <SubContainer>
        <ProjectTitle> Sportizen </ProjectTitle>
        <ProjectTechs> NodeJs, React Native</ProjectTechs>
        <ProjectSubInfos>Application that permit to generate sportive activities and keep track of your performances.</ProjectSubInfos>
      </SubContainer>
    </Container>
  )
}
export default Projects;
