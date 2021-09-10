import React from 'react';

import { Container, PlayerContainer } from './styles';

const Calculator = () => {
  return (
    <Container>
      <PlayerContainer />
      <h3> {'->'} </h3>
      <PlayerContainer />
    </Container>
  );
}

export default Calculator;
