

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

  getUser = async (username) => {
    const resp = await this.db.getItem({
      'username': { 'S': username }
    })
    return resp;
  }

  addPokemon = (username, pokemonId, pokemonNickname) => {
    const resp = this.db.updateItem({
      'username': {'S': username}
    },{
      'pokemonId': { 'Value': {'S': pokemonId }},
      'pokemonNickname': {'Value': {'S': pokemonNickname}}
    });
    return resp
  }

}

exports.DynamoDBRepo = DynamoDBRepo;





