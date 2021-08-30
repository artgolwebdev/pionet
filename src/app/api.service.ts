import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Container { 
  "code" : number ; 
  "errorMessage" : string;
  "data" : [] 
}

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  baseURL = "http://test-api.marvilix.com/container/";

  constructor(private httpClient : HttpClient ) { }



  getContainer(xnumber:number){
    return this.httpClient.get<Container>(this.baseURL+xnumber);
  }

  doSMS(xnumber:number,phone:number){
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
     });
    let options = { headers: headers };
    let body = 'PhoneNumber='+phone;
    return this.httpClient.post<any>(this.baseURL+xnumber+'/sms',body,options);
  }


}
