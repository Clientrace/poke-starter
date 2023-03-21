
import Dynamodb from "../wrapper/dynamodb";
import User from "../models/user";

class DynamoDBRepo {
  constructor(tableName){
    this.db = new Dynamodb(tableName, 'ap-southeast-1');
  }

  registerUser = (username) => {
    const user = User(username, '', '');
    this.db.putItem(user);
  }

}



export default DynamoDBRepo;
