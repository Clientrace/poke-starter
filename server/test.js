
var pokeapi = require('./wrapper/pokeApi');

const api = new pokeapi.PokeAPI;


api.getPokemon('charmander').then(data=>{
  console.log(data);
});


