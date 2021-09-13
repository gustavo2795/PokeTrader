import React, { useState } from 'react';
import isEmpty from 'lodash.isempty';
import  { 
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from '@material-ui/core';

import Slot from '../Slot';
import Card from '../Card';

import { Container, PlayerContainer, Button, ButtonContainer } from './styles';

const Calculator = (props) => {
  const {
    pokemons,
    player1Slots,
    player2Slots,
    setPlayer1Slots,
    setPlayer2Slots,
    next,
    previous,
    offset,
    loading
  } = props;
  const [playerChoosing, setPlayerChoosing] = useState();
  const [open, setOpen] = useState(false);

  const handleClickOpen = (playerChoosing) => {
    setOpen(true);
    setPlayerChoosing(playerChoosing);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addSlotPlayer1 = (pokemon) => {
    const transformed = [...player1Slots];
    transformed.push({
      name: pokemon.name,
      img: pokemon.sprites.front_default,
      baseXp: pokemon.base_experience
    });
    setPlayer1Slots(transformed);
    setOpen(false);
  };

  const addSlotPlayer2 = (pokemon) => {
    const transformed = [...player2Slots];
    transformed.push({
      name: pokemon.name,
      img: pokemon.sprites.front_default,
      baseXp: pokemon.base_experience
    });
    setPlayer2Slots(transformed);
    setOpen(false);
  };

  const handleSelection = (pokemonSelected) => {
    if (playerChoosing === 1) {
      addSlotPlayer1(pokemonSelected);
    } else {
      addSlotPlayer2(pokemonSelected);
    }
  }

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
        <p>Player1</p>
        {!isEmpty(player1Slots) && player1Slots.map((value, index) => (
          <Slot 
            key={index}
            index={index}
            pokemon={value}
            removeSlot={handleRemoveSlotPlayer1}
          />
        ))}
        {player1Slots.length < 6 && (
          <Button onClick={() => handleClickOpen(1)}>
            Add Pókemon
          </Button>
        )}
      </PlayerContainer>
      <h3> {'->'} </h3>
      <PlayerContainer>
        <p>Player2</p>
        {!isEmpty(player2Slots) && player2Slots.map((value, index) => (
            <Slot 
              key={index}
              index={index}
              pokemon={value}
              removeSlot={handleRemoveSlotPlayer2}
            />
          ))}
        {player2Slots.length < 6 && (
          <Button onClick={() => handleClickOpen(2)}>
            Add Pókemon
          </Button>
        )}
      </PlayerContainer>
      <Dialog
        fullWidth
        maxWidth={'lg'}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Pokedéx</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select one Pókemon
          </DialogContentText>
          <ButtonContainer>
          <Button onClick={previous} disabled={offset === 0}>
              Previous
            </Button>
            <Button onClick={next}>
              Next
            </Button>
          </ButtonContainer>
          {loading ? (
            <h3>Loading</h3>
          ) : (
            <Grid container spacing={3}>
              {pokemons.map((item, index) => (
                <Grid item key={index} sm={4} onClick={() => handleSelection(item)}>
                  <Card pokemon={item} />
                </Grid>
              ))}
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Calculator;
