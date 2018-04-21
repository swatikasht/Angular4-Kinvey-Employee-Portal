import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HttpClientService {

  baseUrl = 'https://baas.kinvey.com/appdata/kid_Hy4AQCsJf/';
  constructor(private http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic a2lkX0h5NEFRQ3NKZjpkZDNhMzcxYjJhMzU0YzE0OTFhNWVlNGU4Zjg1OGY2Yw==');
  }

  get(url) {
    url = this.baseUrl + url;
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    //console.log(headers)
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url,obj) {
  	//console.log(url);
  	//console.log(obj);
    url = this.baseUrl + url;
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    let options = new RequestOptions({ headers: headers, method:'post' });
    //console.log(this.http.post(url, obj, options))
    return this.http.post(url, obj, options).map(response=>{
    	//console.log(response);
    	return response;
    });
  }

  put(url,obj) {
  	//console.log(url);
  	//console.log(obj);
    url = this.baseUrl + url;
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    let options = new RequestOptions({ headers: headers, method:'put' });
    return this.http.put(url, obj, options).map(response=>{
    	//console.log(options);
      //console.log(response);
      //console.log(response.json());  
    	return response;
    });
  }

  delete(url,obj) {
    //console.log(url);
    //console.log(obj);
    url = this.baseUrl + url;
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    let options = new RequestOptions({ headers: headers, method:'delete' });
    return this.http.delete(url, options).map(response=>{
      //console.log(options);
      //console.log(response);
      //console.log(response.json());  
      return response;
    });
  }

  getEmpProjMap(url,id){
    //console.log(url)
   
    //console.log(id)
    url = this.baseUrl + url ;
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    //console.log(headers)
    return this.http.get(url, {
      headers: headers
    });

  }


}
