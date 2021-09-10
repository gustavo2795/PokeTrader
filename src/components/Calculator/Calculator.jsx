import React, { useState } from 'react';
import isEmpty from 'lodash.isempty';

import Slot from '../Slot';

import { Container, PlayerContainer, Button } from './styles';

const Calculator = () => {
  const [player1Slots, setPlayer1Slots] = useState([]);
  const [player2Slots, setPlayer2Slots] = useState([]);

  const addSlotPlayer1 = () => {
    const transformed = [...player1Slots];
    transformed.push({
      description: '',
    });
    setPlayer1Slots(transformed);
  };

  const addSlotPlayer2 = () => {
    const transformed = [...player2Slots];
    transformed.push({
      description: '',
    });
    setPlayer2Slots(transformed);
  };

  const handleRemoveSlotPlayer1 = (index) => {
    setPlayer1Slots(
      player1Slots.filter((s, sindex) => index !== sindex)
    );
  };

  const handleRemoveSlotPlayer2 = (index) => {
    setPlayer2Slots(
      player2Slots.filter((s, sindex) => index !== sindex)
    );
  };

  return (
    <Container>
      <PlayerContainer>
        {!isEmpty(player1Slots) && player1Slots.map((value, index) => (
          <Slot 
            key={index}
            index={index}
            removeSlot={handleRemoveSlotPlayer1}
          />
        ))}
        {player1Slots.length < 6 && (
          <Button onClick={() => addSlotPlayer1()}>
            Add Pókemon
          </Button>
        )}
      </PlayerContainer>
      <h3> {'->'} </h3>
      <PlayerContainer>
        {!isEmpty(player2Slots) && player2Slots.map((value, index) => (
            <Slot 
              key={index}
              index={index}
              removeSlot={handleRemoveSlotPlayer2}
            />
          ))}
        {player2Slots.length < 6 && (
          <Button onClick={() => addSlotPlayer2()}>
            Add Pókemon
          </Button>
        )}
      </PlayerContainer>
    </Container>
  );
}

export default Calculator;
