/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import isEmpty from 'lodash.isempty';

import Calculator from '../../components/Calculator';
import History from '../../components/History';
import { getAllPokemons, loadingPokemon, searchPokemon } from '../../services/pokemon';
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
  const [offset, setOffSet] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pokemonName, setPokemonName] = useState('');

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
    setPlayer1Slots([]);
    setPlayer2Slots([]);
  }

  const renderResult = () => {
    if (isFair === true) {
      return 'This trade is Fair';
    }
    return 'This trade is not Fair';
  };

  const resetFilter = () => {
    setPokemonName('');
    fetchData(0);
  };

  const fetchData = async (offset) => {
    let response = await getAllPokemons(offset);
    let pokemons = await loadingPokemon(response.results);
    setLoading(false);
    setPokemonsArray(pokemons);
  };

  const searchData = async () => {
    let array = [];
    let response = await searchPokemon(pokemonName);
    array.push(response);
    setPokemonsArray(array);
  }

  const next = async () => {
    setOffSet(offset + 20);
    setLoading(true);
  };

  const previous = async () => {
    setOffSet(offset - 20);
    setLoading(true);
  };

  useEffect(() => {
    fetchData(offset);
  }, []);

  useEffect(() => {
    fetchData(offset);
  }, [offset])

  useEffect(() => {
    if(pokemonName !== '') {
      searchData();
    }
  }, [pokemonName])

  useEffect(() => {
    if(!isEmpty(player1Slots) && !isEmpty(player2Slots)) {
      handleCalculateFair();
    }
  }, [player1Slots, player2Slots]);

  return (
    <Container>
      <Header>
        <h2>PokeTrader</h2>
      </Header>
      <DescriptionContainer>
        <p>Selects 1 or more P??kemon in both sides to check if the trade is fair.
        The comparison attribute is the base experience. If the diference is less or equal
        than 50 is a fair trade.</p>
      </DescriptionContainer>
      <Calculator 
        pokemons={pokemonsArray}
        player1Slots={player1Slots}
        player2Slots={player2Slots}
        setPlayer1Slots={setPlayer1Slots}
        setPlayer2Slots={setPlayer2Slots}
        next={next}
        previous={previous}
        offset={offset}
        loading={loading}
        setPokemonName={setPokemonName}
        resetFilter={resetFilter}
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
        Trade Pok??mons
      </Button>
      <HistoryContainer>
        <History trades={tradeHistory} />
      </HistoryContainer>
    </Container>
  );
}

export default PokeTrader;
