

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: auto;
`

const Comment = styled.h6`
  font-weight: 150;
  font-size: 0.6rem;
  text-align: center;
  margin-top: 2rem;
  color: ${props => props.theme.palette.greys.normal};
`

function BottomNote() {
  return (
    <Container>
      <Comment>Note that an online version is available at valentinouvrard.fr/resume</Comment>
    </Container>
  )
}
export default BottomNote

