'use strict';

var dbRepo = require('../db/dynamodb.js');
var requestValidator = require('../helpr/validateRequest.js');

var requestFormat = {
  pathParams: {},
  queryParams: {},
  requestBody: {
    username: 'string'
  }
}

module.exports.execute = async (event) => {
  try{
    requestValidator.validateRequest(event, requestFormat);
  } catch(err){
    console.log(err);
    return {
      statusCode: 400,
      body: JSON.stringify({'message': err.message})
    }
  }

  const repo = new dbRepo.DynamoDBRepo('usersTable');
  repo.registerUser('testUser');

  return {
    statusCode: 200,
    body: JSON.stringify({}, null, 2)
  };
}

