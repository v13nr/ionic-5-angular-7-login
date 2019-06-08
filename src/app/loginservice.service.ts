import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(
    private http:HttpClient
  ) { }

  doLogin(username:string, password:string){
 

    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);

   const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      'X-Api-Key': 'D21ECCBC90180DFCB2E9F16BBE381B20'
    })};

    
 
    return this.http.post(
              'http://project.nasadmedia.id/api/user/login'
                , body.toString(), httpOptions);
  }

  

}
