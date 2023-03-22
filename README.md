## Poke Starter

Poke-starter demonstrates an interactive pokemon experience. The user can create a profile, login and choose the starter pokemon. This project showcases my full stack development knowledge.

### Tech Stack
The project utilizes NextJS (ReactJS typescript) for the frontend client, serverless nodejs for the backend, and AWS DynamoDB for the database. I also used a bit of python for integration test.

### Setup
___
### Prerequsites
* aws cli (https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
* npm (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* nodejs (version 18+) (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* serverless framework (https://www.serverless.com/framework/docs/getting-started)
```npm install -g serverless```
* python (optional for running integration test) (https://www.python.org/downloads/)
* JRE for dynamodb local
* Configure aws cli locally (just put random keys if you don't have an AWS account):
```
aws configure
```

### Server Setup
* Under the server folder, install the required server dependencies by running:
```npm install```
* Setup dynamodb local (this runs on java runtime environment). Download from http://dynamodb-local.s3-website-us-west-2.amazonaws.com/dynamodb_local_latest.tar.gz then extract it to **.dynamodb** folder. Or use the script below:
```
wget http://dynamodb-local.s3-website-us-west-2.amazonaws.com/dynamodb_local_latest.tar.gz
mkdir .dynamodb
tar zxvf dynamodb_local_latest.tar.gz -C .dynamodb
```
* Run the dynamodb app server by running ```serverless dynamodb start --migrate``` inside the server folder.
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

### Test(s)
* Run integration test if the API is working by using the **integration_test.py** python file.
```python3 integration_test.py```


### Possible Improvements
* Add more pokemon types badge color in client/src/components/pokedata.tsx
* Create a seperate model for pokemon if ever the number of pokemon that the user will grow.
* Utilize the pokeapi to add more pokemon data.
* Add loading animation while fetching the API data.
* Catch server timeout from pokeapi for multiple api calls and display it on the frontend.


### Production/Deployment Plans
* Point the server to prod by updating the server serverless yml file. Setup AWS credentials. ```serverless deploy --stage prod```. This will setup the dynamodb resource, api gateway and lambda functions.
* Deploy the frontend to vercel or setup serverless deployment folder with this blueprint:
```
app:
  component: "@sls-next/serverless-component@3.5.3-alpha.4"
  inputs:
    nextConfigDir: "../../"
    bucketName: poke-starter-bucket
    bucketRegion: ap-southeast-1
    cors:
      - enabled: true
    build:
      env:
        STAGE: prod
```
* Create a deployment folder and create a serverless yml with the content above.
* Deploy the frontend by running ```serverless``` inside the deployment server.

### Others
___
#### Updating the default starter pokemons
* Open the ***serverless.yml** under server and upate the field starter_pokemons under environment variables.



