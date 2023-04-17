import React from "react";
import styled from "styled-components";

import LogoEpita from "../../ressources/epita.svg";
import LogoGCD from "../../ressources/gcd.png";
import LocationDateInfo from "../decoration/location-date-info";

const Container = styled.div``;

const Title = styled.h2`
  font-weight: 400;
  margin-bottom: 3mm;
`;

const LogoContainer = styled.div`
  width: 2cm;
  height: 1.2cm;
  display: flex;
  align-self: center;
  float: left;
  margin-right: 4mm;
`;

const EducationLogo = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: auto;
`;

const SubContainer = styled.div`
  margin-bottom: 6mm;
`;

const Light = styled.span`
  font-weight: 150;
`;

const EducationTitle = styled.h5`
  font-weight: 600;
  color: ${(props) => props.theme.palette.greys.dark};
`;
const EducationSubInfos = styled.p`
  font-weight: 400;
  color: ${(props) => props.theme.palette.greys.normal};
`;

function Education() {
  return (
    <Container>
      <Title>
        Education <Light>(Graduated in 2020)</Light>
      </Title>
      <SubContainer>
        <LogoContainer>
          <EducationLogo src={LogoEpita} />
        </LogoContainer>
        <EducationTitle>
          {" "}
          EPITA - École Pour l'Informatique et les Techniques Avancées{" "}
        </EducationTitle>
        <EducationSubInfos>
          {" "}
          Computer Engineering School - Master degree - Multimedia
          Specialization
        </EducationSubInfos>
        <LocationDateInfo dates={"2015 - 2020"} location={"France, Paris"} />
      </SubContainer>
      <SubContainer>
        <LogoContainer>
          <EducationLogo src={LogoGCD} />
        </LogoContainer>
        <EducationTitle> GCD - Griffith College Dublin </EducationTitle>
        <EducationSubInfos>
          {" "}
          One semester abroad - Studying Computer Science
        </EducationSubInfos>
        <LocationDateInfo
          dates={"Jan 2017 - June 2017"}
          location={"Ireland, Dublin"}
        />
      </SubContainer>
    </Container>
  );
}
export default Education;
