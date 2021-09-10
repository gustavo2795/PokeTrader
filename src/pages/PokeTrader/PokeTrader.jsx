import React from 'react';

import Calculator from '../../components/Calculator';

import { Container, Header, DescriptionContainer } from './styles';

const PokeTrader = () => {
  return (
    <Container>
      <Header>
        <h2>Poketrader</h2>
      </Header>
      <DescriptionContainer>
        <p>Selects 1 or more Pókemon in both sides to check if the trade is fair.</p>
      </DescriptionContainer>
      <Calculator />
    </Container>
  );
}

export default PokeTrader;
