import React, { useEffect, useState } from 'react';

import Calculator from '../../components/Calculator';
import { getAllPokemons, getPokemon } from '../../services/pokemon';

import { Container, Header, DescriptionContainer, Button } from './styles';

const PokeTrader = () => {
  const initialUrl = "https://pokeapi.co/api/v2/pokemon/";
  const [pokemonsArray, setPokemonsArray] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);

  const loadingPokemon = async (data) => {
    let pokemons = await Promise.all(
      data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
    }));

    setPokemonsArray(pokemons);
  }

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemons(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    };
    fetchData();

  }, []);

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
      <Calculator />
      <Button>
        Test Trade
      </Button>
    </Container>
  );
}

export default PokeTrader;
