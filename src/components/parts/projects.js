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

const ProjectTitle = styled.h5`
  color: ${props => props.theme.palette.greys.dark};
  display: inline-block;
  margin-right: 4mm;
  margin-bottom: 1mm;
  font-weight: 600;
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

function Projects() {
  return (
    <Container>
      <Title>Projects</Title>
      <SubContainer>
        <ProjectTitle>Bananup</ProjectTitle>
        <ProjectTechs>Django, React</ProjectTechs>
        <ProjectSubInfos>Website made for semi-competitor gamers that want to improve their gaming skills thanks to community-driven feedbacks.</ProjectSubInfos>
      </SubContainer>
      <SubContainer>
        <ProjectTitle> NetflixRoulette </ProjectTitle>
        <ProjectTechs>Django, React</ProjectTechs>
        <ProjectSubInfos>Website made for french Netflix users. It allows you to choose randomly in the french catalog. For now, nothing more than categories are offered as filters.</ProjectSubInfos>
      </SubContainer>
      <SubContainer>
        <ProjectTitle> Sportizen </ProjectTitle>
        <ProjectTechs> NodeJs, React Native</ProjectTechs>
        <ProjectSubInfos>Application that allows users to generate sport activities and keep track of their performances.</ProjectSubInfos>
      </SubContainer>
    </Container>
  )
}
export default Projects;
