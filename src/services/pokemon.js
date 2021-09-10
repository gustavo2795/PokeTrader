export async function getAllPokemons(initialUrl) {
  return new Promise((resolve, reject) => {
    fetch(initialUrl)
      .then(response => response.json())
      .then(data => {
        resolve(data);
      });
  });
};

export async function getPokemon(initialUrl) {
  return new Promise((resolve, reject) => {
    fetch(initialUrl)
      .then(response => response.json())
      .then(data => {
        resolve(data);
      });
  });
};