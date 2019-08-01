import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
`

const SubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
`

const Column = styled.div`
    width: 33.333%;
    word-wrap: break-word;
    box-sizing: border-box;
`

const InfoText = styled.p`
  font-weight: 150;
  display: inline-block;
  color: ${props => props.theme.palette.primary};
`

const NewTabLink = (props) => <a target="_blank" rel="noopener noreferrer" href={props.href}> {props.children} </a>

const InfoLink = styled(NewTabLink)`
  margin-left: 2mm;
`

const ColumnTitle = styled.h4`

`

const InfoContainer = styled.div`
  padding: 1mm 0mm;
`
const Title = styled.h2`
  font-weight: 350;
  margin-bottom: 4mm;
`

function Skills() {
  return (
    <Container>
      <Title>Skills</Title>
      <SubContainer>
        <Column>
          <ColumnTitle>Languages</ColumnTitle>
          <InfoContainer>
            <InfoText>Javascript</InfoText>
          </InfoContainer>
          <InfoContainer>
            <InfoText>C++</InfoText>
          </InfoContainer>
          <InfoContainer>
            <InfoText>Java</InfoText>
          </InfoContainer>
          <InfoContainer>
            <InfoText>Python</InfoText>
          </InfoContainer>
          <InfoContainer>
            <InfoText>C#</InfoText>
          </InfoContainer>
          <InfoContainer>
            <InfoText>C</InfoText>
          </InfoContainer>
        </Column>
        <Column>
          <ColumnTitle>Frameworks</ColumnTitle>
          <InfoContainer>
            <InfoText>React</InfoText>
          </InfoContainer>
          <InfoContainer>
            <InfoText>React Native</InfoText>
          </InfoContainer>
          <InfoContainer>
            <InfoText>J2EE</InfoText>
          </InfoContainer>
          <InfoContainer>
            <InfoText>Django</InfoText>
          </InfoContainer>
          <InfoContainer>
            <InfoText>.NET</InfoText>
          </InfoContainer>
        </Column>
        <Column>
          <ColumnTitle>Softwares</ColumnTitle>
          <InfoContainer>
            <InfoText>Adobe Photoshop</InfoText>
          </InfoContainer>
          <InfoContainer>
            <InfoText>Adobe Premiere Pro</InfoText>
          </InfoContainer>
          <InfoContainer>
            <InfoText>Unity3d</InfoText>
          </InfoContainer>
        </Column>
      </SubContainer>
    </Container>
  )
}
export default Skills;