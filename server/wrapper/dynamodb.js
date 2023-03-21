

var AWS = require('aws-sdk');

class DynamoDB {

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

  putItem = async (itemObj) => {
    const resp = await this.dynamodb.putItem({
      TableName: this.tableName,
      Item: itemObj
    }).promise();
    return resp;
  }

  getItem = async (key) => {
    const resp = await this.dynamodb.getItem({
      TableName: this.tableName,
      Key: key,
      ReturnConsumedCapacity: 'TOTAL'
    }).promise();

    return resp;
  }

}

exports.DynamoDB = DynamoDB;

