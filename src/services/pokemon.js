const Pokedex = require('pokedex-promise-v2');

const P = new Pokedex();

//Fetch all pokemons urls
export async function getAllPokemons(offset) {
  const interval = {limit: 20, offset: offset}
   return P.getPokemonsList(interval)
    .then(function(response) {
      return response;
    })
};

async function getPokemon(initialUrl) {
  return new Promise((resolve, reject) => {
    fetch(initialUrl)
      .then(response => response.json())
      .then(data => {
        resolve(data);
      });
  });
};

// Fetch each pokemon url
export async function loadingPokemon(data) {
  let pokemons = await Promise.all(
    data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord;
  }));

  return pokemons;
}