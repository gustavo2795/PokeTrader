import React from 'react';

import { Container, InfoContainer, ImageContainer, Image } from './styles';

const Card = ({ pokemon }) => {
  return (
    <Container>
      <InfoContainer>
        <ImageContainer>
          <Image src={pokemon.sprites.front_default} />
        </ImageContainer>
        <h4>{pokemon.name} - Base Experience: {pokemon.base_experience}</h4>
      </InfoContainer>
    </Container>
  );
}

export default Card;
