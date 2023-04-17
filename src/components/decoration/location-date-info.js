import React from "react";
import styled, { withTheme } from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text = styled.p`
  font-weight: 150;
  margin-right: 4mm;
  color: ${(props) => props.theme.palette.greys.normal};
`;
const JobTitle = styled.p`
  font-weight: 150;
  margin-right: 4mm;
  color: ${(props) => props.theme.palette.greys.normal};
`;

function LocationDateInfo(props) {
  return (
    <Container>
      <JobTitle>{props.jobTitle}</JobTitle>
      <Text>{props.dates}</Text>
      <Text>{props.location}</Text>
    </Container>
  );
}

export default withTheme(LocationDateInfo);
