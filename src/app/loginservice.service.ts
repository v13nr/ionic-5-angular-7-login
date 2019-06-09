import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfService } from './conf.service';



@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(
    private http:HttpClient,
    public config:ConfService
  ) { }

  doLogin(username:string, password:string){
 

    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);

   const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      'X-Api-Key': this.config.API.toString() 
    })};

    
 
    return this.http.post(
              this.config.Login_URL
                , body.toString(), httpOptions);
  }

  

}
