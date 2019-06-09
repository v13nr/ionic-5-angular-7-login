import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfService {
  public API_URL : string
  public Login_URL : string
  public Register_URL : string
  public API : StringMapWithRename

  constructor(){
      this.API_URL = 'http://project.nasadmedia.id/api'
      this.Login_URL = this.API_URL+'/user/login'
      this.Register_URL = this.API_URL+'/user/register'
      this.API = 'D21ECCBC90180DFCB2E9F16BBE381B20'
  }
}
