'use strict';

import DynamoDBRepo from '../db/dynamodb';

module.exports.registerUser = async (event) => {
  const repo = new DynamoDBRepo('usersTable');
  repo.registerUser('testUser');
  return {
    statusCode: 200,
    body: JSON.stringify({}, null, 2)
  };
}


