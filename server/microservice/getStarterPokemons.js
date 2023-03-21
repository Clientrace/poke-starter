'user strict'

const pokeApi = require('../wrapper/pokeApi');

module.exports.execute = async (event) => {

  const starters = process.env.starter_pokemons.split(',');
  var respObject = [];

  // get starter pokemon info
  const api = new pokeApi.PokeAPI();
  for(var index in starters){
    const pokeInfo = await api.getPokemon(starters[index]);
    respObject.push(pokeInfo)
  }
  
  return {
    statusCode: 200,
    body: JSON.stringify({'starters': respObject}, null, 2)
  }
}

