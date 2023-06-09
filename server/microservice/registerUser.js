'use strict';

const dbRepo = require('../db/dynamodb.js');
const requestValidator = require('../helpr/validateRequest.js');

const requestFormat = {
  pathParams: {},
  queryParams: {},
  requestBody: {
    username: 'string'
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
  repo.registerUser(reqObj.requestBody['username']);

  return {
    statusCode: 200,
    body: JSON.stringify({
      'message': 'user successfully registered'
    }, null, 2)
  }
}

