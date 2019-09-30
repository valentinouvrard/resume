import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
`

const SubContainer = styled.div`
`

const InfoText = styled.p`
  font-weight: 150;
  display: inline-block;
  color: ${props => props.theme.palette.primary};
  margin-right: 1rem;
`

const SkillSection = styled.div`
  margin-bottom: 0.7rem;
`

const ColumnTitle = styled.h5`
`

const Title = styled.h2`
  font-weight: 400;
  margin-bottom: 3mm;
`

function Skills() {
  return (
    <Container>
      <Title>Skills</Title>
      <SubContainer>
        <SkillSection>
          <ColumnTitle>Languages</ColumnTitle>
          <InfoText>Javascript</InfoText>
          <InfoText>C++</InfoText>
          <InfoText>Java</InfoText>
          <InfoText>Python</InfoText>
          <InfoText>C#</InfoText>
          <InfoText>C</InfoText>
        </SkillSection>
        <SkillSection>
          <ColumnTitle>Frameworks</ColumnTitle>
          <InfoText>React</InfoText>
          <InfoText>React Native</InfoText>
          <InfoText>J2EE</InfoText>
          <InfoText>Django</InfoText>
          <InfoText>.NET</InfoText>
        </SkillSection>
        <SkillSection>
          <ColumnTitle>Softwares</ColumnTitle>
          <InfoText>Adobe Photoshop</InfoText>
          <InfoText>Adobe Premiere Pro</InfoText>
          <InfoText>Unity3d</InfoText>
        </SkillSection>
      </SubContainer>
    </Container>
  )
}
export default Skills;
