'use strict';


const dbRepo = require('../db/dynamodb.js');
const requestValidator = require('../helpr/validateRequest.js');

const requestFormat = {
  queryParams: {},
  pathParams: {
    'username': 'string'
  },
  requestBody: {}
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
  const resp = await repo.getUser(reqObj.pathParams['username']);
  if(!('Item' in resp)){
    return {
      statusCode: 404,
      body: JSON.stringify({'message': 'user not found'}, null, 2)
    }
  }
  const respObject = {
    'username': resp.Item.username.S,
    'pokemonId': resp.Item.pokemonId.S,
    'pokemonNickname': resp.Item.pokemonNickname.S,
  }
  return {
    statusCode: 200,
    body: JSON.stringify(respObject, null, 2)
  }

}
