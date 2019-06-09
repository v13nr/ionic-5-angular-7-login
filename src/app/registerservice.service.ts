import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ConfService } from './conf.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  constructor(
    private http:HttpClient,
    private config: ConfService
    
    ) { }

  
    doregisterAPI(username:string, password:string, full_name:string, email:string){
 

    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    body.set('full_name', full_name);
    body.set('email', email);

   const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      'X-Api-Key': this.config.API.toString(),
      'Accept': 'application/json, */*'
    })};

    
 
    return this.http.post(
              this.config.Register_URL
                , body.toString(), httpOptions);
  }

  

}
