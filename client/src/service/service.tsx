
import axios, { AxiosRequestConfig } from 'axios';

class Service {

  hostURL: string|undefined;
  headers: any;

  constructor(hostURL: string|undefined){
    this.hostURL = hostURL;
    this.headers = {
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer '+privateToken
    }
  }

  get = async (path: string, queryParameters: Object) => {
    /*
      Add get session from authprovider for cognito authentication
    */
    const config:AxiosRequestConfig= { headers: this.headers };
    if(queryParameters){
      config['params'] = queryParameters;
    }
    return axios.get(this.hostURL + path, config);
  }

  post = async (path: string, queryParameters: Object, body: Object) => {
    /*
      Add get session from authprovider for cognito authentication
    */
    const config:AxiosRequestConfig= { headers: this.headers };
    if(queryParameters){
      config['params'] = queryParameters;
    }
    return axios.post(this.hostURL + path, body, config);
  }

  put = async (path: string, queryParams: Object, body: Object) => {
    /*
      Add get session from authprovider for cognito authentication
    */
    const config:AxiosRequestConfig= { headers: this.headers };
    if(queryParams){
      config['params'] = queryParams;
    }
    return axios.put(this.hostURL + path, body, config)
  }

  upload = async (url: string, file: File, options: Object) => {
    /*
      No authentication needed (presigned url from s3)
    */
    return axios.put(url, file, options);
  }

  patch = async (path: string, body: object, queryParameters: object) => {
    /*
      Add get session from authprovider for cognito authentication
    */
    const config:AxiosRequestConfig= { headers: this.headers };
    if(queryParameters){
      config['params'] = queryParameters;
    }
    return axios.patch(this.hostURL + path, body, config);
  }

  delete = async (path:string, queryParameters: object) => {
    /*
      Add get session from authprovider for cognito authentication
    */
    const config:AxiosRequestConfig= { headers: this.headers };
    if(queryParameters){
      config['params'] = queryParameters;
    }
    return axios.delete(this.hostURL + path, config);
  }

}

export default Service;





