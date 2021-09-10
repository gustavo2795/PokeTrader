import React from 'react';

import { Container, InfoContainer, ImageContainer, RemoveButton, Image } from './styles';

const Slot = ({index, removeSlot}) => {
  return (
    <Container>
      <InfoContainer>
        <ImageContainer>
          <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png" />
        </ImageContainer>
        <h4>Poke name -{'>'}</h4>
        <h4> XP: 303</h4>
      </InfoContainer>
      <RemoveButton onClick={() => removeSlot(index)}>X</RemoveButton>
    </Container>
  );
}

export default Slot;
