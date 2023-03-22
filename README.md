## Poke Starter
___

Poke-starter demonstrates an interactive pokemon experience. The user can create a profile, login and choose the starter pokemon. This project showcases my full stack development knowledge.

### Tech Stack
The project utilizes NextJS (ReactJS typescript) for the frontend client, serverless nodejs for the backend, and AWS DynamoDB for the database. I also used a bit of python for integration test.

### Setup
### Prerequsites
* npm (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* nodejs (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* serverless framework (https://www.serverless.com/framework/docs/getting-started)
```npm install serverless```
* python (optional for running integration test) (https://www.python.org/downloads/)
* JRE for dynamodb local

### Server Setup
* Under the server folder, install the required server dependencies by running:
```npm install```
* Setup dynamodb local (this runs on java runtime environment). Download from http://dynamodb-local.s3-website-us-west-2.amazonaws.com/dynamodb_local_latest.tar.gz then extract it to **.dynamodb** folder. Or use the script below:
```
wget http://dynamodb-local.s3-website-us-west-2.amazonaws.com/dynamodb_local_latest.tar.gz
mkdir .dynamodb
tar zxvf dynamodb_local_latest.tar.gz -C .dynamodb
```
* Run the dynamodb app server by running ```serverless start --migrate``` inside the server folder.
* Run the API server by running ```serverless offline``` inside the server folder
* Make sure the API server runs on the correct port (4000) that matches the host url in .env.local in the client's root folder.


#### Client Setup
* Under the client folder, install the required project dependencies by running:
``` npm install ``` 
* Run the project local development environment with:
``` npm run dev ```
* The dynamodb server and api server runs on port 8000 and 4000 so make sure that the web app dev environment runs on port 3000.
* Look for the .env.local in the client root directory, this will contain the env vars for the server host url. Make sure it's on the app client folder path.
* Open http://localhost:3000 on chrome and check the web application.


### Possible Improvements




