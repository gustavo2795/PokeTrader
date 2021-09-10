import React from 'react';

import { Container, InfoContainer, ImageContainer, RemoveButton, Image } from './styles';

const Slot = ({index, removeSlot, pokemon}) => {
  console.log(pokemon);
  return (
    <Container>
      <InfoContainer>
        <ImageContainer>
          <Image src={pokemon.img} />
        </ImageContainer>
        <h4>{pokemon.name} -{'>'}</h4>
        <h4> XP: {pokemon.baseXp}</h4>
      </InfoContainer>
      <RemoveButton onClick={() => removeSlot(index)}>X</RemoveButton>
    </Container>
  );
}

export default Slot;
