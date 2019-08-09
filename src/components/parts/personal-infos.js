import React from 'react'
import styled from 'styled-components'
import { faPhone, faAt, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGitlab, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import CustomFaIcon from '../decoration/custom-fa-icon';
const Container = styled.div`
  border-bottom: 1px solid ${props => props.theme.palette.greys.ultraLight};
  padding: 2mm 0mm;
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
  margin-left: 2mm;
`

const NewTabLink = (props) => <a target="_blank" rel="noopener noreferrer" href={props.href}> {props.children} </a>

const InfoLink = styled(NewTabLink)`
  margin-left: 2mm;
`

const InfoContainer = styled.div`
  padding: 1mm 0mm;
`

function PersonalInfos() {
  return (
    <Container>
      <Column>
        <InfoContainer>
          <CustomFaIcon icon={faPhone}/>
          <InfoText>+33 6 52 77 23 18</InfoText>
        </InfoContainer>
        <InfoContainer>
          <CustomFaIcon icon={faAt}/>
          <InfoText>valentin.ouvrard@yahoo.fr</InfoText>
        </InfoContainer>
      </Column>
      <Column>
        <InfoContainer>
          <CustomFaIcon icon={faGitlab}/>
          <InfoLink href="https://gitlab.com/Valentin.ouvrard">valentin.ouvrard</InfoLink>
        </InfoContainer>
        <InfoContainer>
          <CustomFaIcon icon={faTwitter}/>
          <InfoLink href="https://twitter.com/Valentin_Ovrd">valentin_ovrd</InfoLink>
        </InfoContainer>
      </Column>
      <Column>
        <InfoContainer>
          <CustomFaIcon icon={faLinkedin}/>
          <InfoLink href="https://www.linkedin.com/in/valentin-ouvrard/">Valentin Ouvrard</InfoLink>
        </InfoContainer>
        <InfoContainer>
          <CustomFaIcon icon={faGlobe}/>
          <InfoLink href="https://valentinouvrard.fr">valentinouvrard.fr</InfoLink>
        </InfoContainer>
      </Column>
    </Container>
  )
}
export default PersonalInfos;
