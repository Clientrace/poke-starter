'user strict'


const dbRepo = require('../db/dynamodb.js');
const requestValidator = require('../helpr/validateRequest.js');

const requestFormat = {
  queryParams: {},
  pathParams: {
    'username': 'string'
  },
  requestBody: {
    'pokemonId': 'string',
    'pokemonNickname': 'string'
  }
}

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

  const repo = new dbRepo.DynamoDBRepo('usersTable');
  const resp = await repo.addPokemon(
    reqObj.pathParams.username,
    reqObj.requestBody.pokemonId,
    reqObj.requestBody.pokemonNickname
  )
  console.log(resp);

  return {
    statusCode: 200,
    body: JSON.stringify({'message': 'Successfully added pokemon'}, null, 2)
  }

}

