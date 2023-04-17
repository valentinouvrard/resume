import React from "react";
import styled from "styled-components";
import { faPhone, faAt, faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import CustomFaIcon from "../decoration/custom-fa-icon";
const Container = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.palette.greys.ultraLight};
  padding: 2mm 0mm;
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
`;

const Column = styled.div`
  width: 25%;
  word-wrap: break-word;
  box-sizing: border-box;
`;

const InfoText = styled.p`
  font-weight: 150;
  display: inline-block;
  color: ${(props) => props.theme.palette.primary};
  margin-left: 2mm;
`;

const InfoLink = styled.a`
  margin-left: 2mm;
  font-size: 0.7rem;
`;

const NewTabLink = (props) => (
  <InfoLink target="_blank" rel="noopener noreferrer" href={props.href}>
    {" "}
    {props.children}{" "}
  </InfoLink>
);

const InfoContainer = styled.div`
  padding: 1mm 0mm;
`;

function PersonalInfos() {
  return (
    <Container>
      <Column>
        <InfoContainer>
          <CustomFaIcon icon={faPhone} />
          <InfoText>+33 6 52 77 23 18</InfoText>
        </InfoContainer>
      </Column>
      <Column>
        <InfoContainer>
          <CustomFaIcon icon={faAt} />
          <NewTabLink href="mailto:valentin.ouvrard@yahoo.fr">
            valentin.ouvrard@yahoo.fr
          </NewTabLink>
        </InfoContainer>
      </Column>
      <Column>
        <InfoContainer>
          <CustomFaIcon icon={faGithub} />
          <NewTabLink href="https://github.com/valentinouvrard">
            valentin.ouvrard
          </NewTabLink>
        </InfoContainer>
      </Column>
      <Column>
        <InfoContainer>
          <CustomFaIcon icon={faLinkedin} />
          <NewTabLink href="https://www.linkedin.com/in/valentin-ouvrard/">
            Valentin Ouvrard
          </NewTabLink>
        </InfoContainer>
      </Column>
    </Container>
  );
}
export default PersonalInfos;
