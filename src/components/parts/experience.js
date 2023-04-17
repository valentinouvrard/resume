import React from "react";
import styled from "styled-components";

import LogoEpita from "../../ressources/epita.svg";
import LogoMySG from "../../ressources/mysg.jpg";
import LocationDateInfo from "../decoration/location-date-info";
import LogoSeraphin from "../../ressources/seraphin.jpg";
import LogoPigment from "../../ressources/pigment.svg";

const Container = styled.div`
  display: block;
  width: 100%;
`;

const Title = styled.h2`
  font-weight: 400;
  margin-bottom: 3mm;
`;

const LogoContainer = styled.div`
  width: 2cm;
  height: 1.2cm;
  margin-right: 4mm;
  display: flex;
  align-self: center;
`;

const ExperienceLogo = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: auto;
`;

const SubContainer = styled.div`
  margin-bottom: 6mm;
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
`;

const ExperienceTitle = styled.h5`
  font-weight: 600;
  color: ${(props) => props.theme.palette.greys.dark};
`;
const SubInfos = styled.p`
  font-weight: 400;
  margin-top: 1mm;
  margin-bottom: 1mm;
  color: ${(props) => props.theme.palette.greys.normal};
`;

const Details = styled.div`
  margin-left: rem;
`;
function Experience() {
  return (
    <Container>
      <Title>Experiences</Title>
      <SubContainer>
        <LogoContainer>
          <ExperienceLogo src={LogoPigment} />
        </LogoContainer>
        <div>
          <ExperienceTitle>Pigment</ExperienceTitle>
          <LocationDateInfo
            jobTitle={"Software Engineer"}
            dates={"Sept 2021 - Now"}
            location={"France, Paris"}
          />
          <Details>
            <SubInfos>- Improved the existing Data access management</SubInfos>
            <SubInfos>
              - Integrated new design for a Google Sheet addon
            </SubInfos>
            <SubInfos>
              - Designed and implemented a new feature from scratch, working
              with a team of software <br /> engineers and a project manager to
              deliver a successful solution.
            </SubInfos>
          </Details>
        </div>
      </SubContainer>
      <SubContainer>
        <LogoContainer>
          <ExperienceLogo src={LogoSeraphin} />
        </LogoContainer>
        <div>
          <ExperienceTitle>Seraphin Legal</ExperienceTitle>
          <LocationDateInfo
            jobTitle={"Lead Developer"}
            dates={"Feb 2020 - Aug 2021"}
            location={"France, Paris"}
          />
          <Details>
            <SubInfos>- Create a legal file management solution</SubInfos>
            <SubInfos>
              - Served as lead developer for a collaborative contract management
              solution.
            </SubInfos>
            <SubInfos>
              - Drove the technical direction of the product and collaborating
              with cross-functional teams <br /> to ensure successful delivery
            </SubInfos>
          </Details>
        </div>
      </SubContainer>
      <SubContainer>
        <LogoContainer>
          <ExperienceLogo src={LogoEpita} />
        </LogoContainer>
        <div>
          <ExperienceTitle>
            EPITA - École Pour l'Informatique et les Techniques Avancées
          </ExperienceTitle>
          <LocationDateInfo
            jobTitle={"Teaching Assistant (YAKA/ACU)"}
            dates={"Jan 2019 - Jan 2020"}
            location={"France, Paris"}
          />
          <Details>
            <SubInfos>
              - Worked with a team of ~40 teaching assistants and faculty to
              support instruction of introductory <br /> programming courses in
              C, C++, Java, SQL, and web development.
            </SubInfos>
            <SubInfos>
              - Developed and delivered tutorials to enhance students'
              understanding of programming concepts.
            </SubInfos>
            <SubInfos>
              - Provided personalized feedback to students on programming
              assignments and projects to promote <br />
              comprehension and success.
            </SubInfos>
            <SubInfos>
              - Mentored first-year students during weekly office hours to
              address individual questions and concerns.
            </SubInfos>
          </Details>
        </div>
      </SubContainer>
      <SubContainer>
        <LogoContainer>
          <ExperienceLogo src={LogoMySG} />
        </LogoContainer>
        <div>
          <ExperienceTitle> My-Serious-Game </ExperienceTitle>
          <LocationDateInfo
            jobTitle={"R&D Internship"}
            dates={"Sept 2018 - Jan 2019"}
            location={"France, Tours"}
          />
          <Details>
            <SubInfos>
              - VR projects with several technologies (HTC Vive, LeapMotion,
              ...)
            </SubInfos>
            <SubInfos>
              - Create a Slack bot in order to explore the effects of
              micro-learning on a professional environment
            </SubInfos>
            <SubInfos>
              - Add a front-end to interract with the Slack bot datas (made with
              React)
            </SubInfos>
          </Details>
        </div>
      </SubContainer>
    </Container>
  );
}
export default Experience;
