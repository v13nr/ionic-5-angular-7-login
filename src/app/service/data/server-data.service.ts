import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeMessageServer(){
    return this.http.get('http://project.nasadmedia.id/angular/hellonative.php')
  }

  createTodo(username, todo){
    let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' })
    return this.http.post(
              'http://project.nasadmedia.id/angular/todos.php'
                , todo, headers);
  }
}
