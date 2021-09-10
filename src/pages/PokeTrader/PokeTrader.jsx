import React, { useEffect, useState } from 'react';
import isEmpty from 'lodash.isempty';

import Calculator from '../../components/Calculator';
import { getAllPokemons, loadingPokemon } from '../../services/pokemon';
import { CalcutateTradeIsFair } from '../../helpers/calculate';

import { Container, Header, DescriptionContainer, Button } from './styles';

const PokeTrader = () => {
  const [pokemonsArray, setPokemonsArray] = useState([]);
  const [player1Slots, setPlayer1Slots] = useState([]);
  const [player2Slots, setPlayer2Slots] = useState([]);
  const [isFair, setIsFair] = useState(undefined);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);

  const handleCalculate = () => {
    const fair = CalcutateTradeIsFair(player1Slots, player2Slots);
    console.log(fair);
    setIsFair(fair);
  };

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemons();
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      let pokemons = await loadingPokemon(response.results);
      setLoading(false);
      setPokemonsArray(pokemons);
    };
    fetchData();

  }, []);

  const renderResult = () => {
    if (isFair === true) {
      return (
        <h3>IS FAIR</h3>
      )
    }
    return (
      <h3>IS NOT FAIR</h3>
    )
  }

  console.log(pokemonsArray);

  return (
    <Container>
      <Header>
        <h2>PokeTrader</h2>
      </Header>
      <DescriptionContainer>
        <p>Selects 1 or more Pókemon in both sides to check if the trade is fair.
        The comparison attribute is the base experience.</p>
      </DescriptionContainer>
      <Calculator 
        pokemons={pokemonsArray}
        player1Slots={player1Slots}
        player2Slots={player2Slots}
        setPlayer1Slots={setPlayer1Slots}
        setPlayer2Slots={setPlayer2Slots}
      />
      <Button 
        onClick={() => handleCalculate()}
        disabled={isEmpty(player1Slots) || isEmpty(player2Slots)}
      >
        Test Trade
      </Button>
      {isFair !== undefined ? (
        renderResult()
      ) : (
        <></>
      )}
    </Container>
  );
}

export default PokeTrader;
