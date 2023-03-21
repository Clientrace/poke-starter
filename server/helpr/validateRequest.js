


const validateRequest = (event, requestFormat) => {

  // Extract request object
  var requestObj = {
    pathParams: event.pathParameters || {},
    queryParams: event.queryParameters || {},
    requestBody: JSON.parse(event.body) || {}
  }

  // validate path parameters
  Object.keys(requestFormat.pathParams).map(key=>{
    if(!(key in requestObj.pathParams)){
      throw new Error('Missing required path parameter field: '+key);
    }
    const paramValue = requestObj.pathParams[key];
    if(typeof(paramValue) !== requestFormat.pathParams[key]){
      throw new Error(`Invalid field type. ${key}  must be ${requestFormat.pathParams[key]}.`);
    }
  });

  // validate query parameters
  Object.keys(requestFormat.queryParams).map(key=>{
    if(!(key in requestObj.queryParams)){
      throw new Error('Missing required query parameter field: '+key);
    }
    const paramValue = requestObj.queryParams[key];
    if(typeof(paramValue) !== requestFormat.queryParams[key]){
      throw new Error(`Invalid field type. ${key}  must be ${requestFormat.queryParams[key]}.`);
    }
  });

  // validate request body
  Object.keys(requestFormat.requestBody).map(key=>{
    if(!(key in requestObj.requestBody)){
      throw new Error('Missing required request body field: '+key);
    }
    const paramValue = requestObj.requestBody[key];
    if(typeof(paramValue) !== requestFormat.requestBody[key]){
      // throw new Error(`Invalid field type. ${key}  must be ${requestFormat.requestBody[key]}.`);
    }
  });

  return requestObj;
}

module.exports.validateRequest = validateRequest;




