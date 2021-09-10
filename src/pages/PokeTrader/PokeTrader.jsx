import React from 'react';

import Calculator from '../../components/Calculator';

import { Container, Header, DescriptionContainer, Button } from './styles';

const PokeTrader = () => {
  return (
    <Container>
      <Header>
        <h2>Poketrader</h2>
      </Header>
      <DescriptionContainer>
        <p>Selects 1 or more Pókemon in both sides to check if the trade is fair.
        The comparison attribute is the base experience.</p>
      </DescriptionContainer>
      <Calculator />
      <Button>
        Test Trade
      </Button>
    </Container>
  );
}

export default PokeTrader;
