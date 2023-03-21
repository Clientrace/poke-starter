'user strict'

const pokeApi = require('../wrapper/pokeApi');
const requestValidator = require('../helpr/validateRequest.js');

const requestFormat = {
  pathParams: {
    'nameId': 'string'
  },
  queryParams: {},
  requestBody: {}
};

module.exports.execute = async (event) => {

  var reqObj = {};
  try{
    reqObj = requestValidator.validateRequest(event, requestFormat);
  } catch(err){
    console.log(err);
    return {
      statusCode: 400,
      body: JSON.stringify({'message': err.message})
    }
  }

  // get starter pokemon info
  const api = new pokeApi.PokeAPI();
  const pokeInfo = await api.getPokemon(reqObj.pathParams['nameId']);
  
  return {
    statusCode: 200,
    body: JSON.stringify(pokeInfo, null, 2)
  }
}




