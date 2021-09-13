import React, { useEffect, useState } from 'react';
import isEmpty from 'lodash.isempty';

import Calculator from '../../components/Calculator';
import History from '../../components/History';
import { getAllPokemons, loadingPokemon } from '../../services/pokemon';
import { CalcutateTradeIsFair } from '../../helpers/calculate';

import {
  Container,
  Header,
  DescriptionContainer,
  Button,
  ResultContainer,
  HistoryContainer
} from './styles';

const PokeTrader = () => {
  const [pokemonsArray, setPokemonsArray] = useState([]);
  const [player1Slots, setPlayer1Slots] = useState([]);
  const [player2Slots, setPlayer2Slots] = useState([]);
  const [tradeHistory, setTradeHistory] = useState([]);
  const [isFair, setIsFair] = useState(undefined);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);

  const handleCalculateFair = () => {
    const fair = CalcutateTradeIsFair(player1Slots, player2Slots);
    setIsFair(fair);
  };

  const handleTrade = () => {
    const transformedHistory = [...tradeHistory];
    transformedHistory.push({
      player1: player1Slots,
      player2: player2Slots,
      isFair: isFair
    });
    setTradeHistory(transformedHistory);
  }

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

  useEffect(() => {
    if(!isEmpty(player1Slots) && !isEmpty(player2Slots)){
      handleCalculateFair();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [player1Slots, player2Slots]);

  const renderResult = () => {
    if (isFair === true) {
      return 'This trade is Fair';
    }
    return 'This trade is not Fair';
  };

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
      {isFair !== undefined ? (
        <ResultContainer isFair={isFair}>
          <h3>{renderResult()}</h3>
        </ResultContainer>
      ) : (
        <></>
      )}
      
      <Button 
        onClick={() => handleTrade()}
        disabled={isEmpty(player1Slots) || isEmpty(player2Slots)}
      >
        Trade Pokémons
      </Button>
      <HistoryContainer>
        <History trades={tradeHistory} />
      </HistoryContainer>
    </Container>
  );
}

export default PokeTrader;
