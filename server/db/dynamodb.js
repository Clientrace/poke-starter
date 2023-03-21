

var db = require('../wrapper/dynamodb');
var user = require('../models/user');

class DynamoDBRepo {
  constructor(tableName){
    this.tableName = tableName;
    this.db = new db.DynamoDB(tableName, 'ap-southeast-1');
  }

  registerUser = (username) => {
    const userObj = user(username, '', '');
    this.db.putItem(userObj);
  }

  getUser = (username) => {
    this.db.getItem({
      'username': { 'S': username }
    })
  }

}

exports.DynamoDBRepo = DynamoDBRepo;


