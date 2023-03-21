


const getUserDynamoDBModel = (username, pokemonId, pokemonNickname) => {
  return {
    'username': { 'S': username },
    'pokemonId': { 'S': pokemonId },
    'pokemonNickname': { 'S': pokemonNickname }
  }
}


module.exports = getUserDynamoDBModel;


