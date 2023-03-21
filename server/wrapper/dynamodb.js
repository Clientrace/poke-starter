

var AWS = require('aws-sdk');

class Dynamodb {

  constructor(tableName, region){
    this.tableName = tableName
    if(process.env.STAGE === 'dev'){
      this.dynamodb = new AWS.DynamoDB({
        region: 'localhost',
        endpoint: process.env.local_endpoint,
        tableName: tableName,
      });
    } else {
      this.dynamodb = new AWS.DynamoDB({
        region: region,
      })
    }
  }

  putItem = (itemObj) => {
    this.dynamodb.putItem({
      TableName: this.tableName,
      Item: itemObj
    })
  }

}

export default Dynamodb;

