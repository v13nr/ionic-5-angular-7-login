import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { Storage } from '@ionic/storage';

import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import {LoadingController , NavController} from '@ionic/angular';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { V13serviceService } from '../service/v13service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  user:User
  id:number
  token: string
  email:string
  imgToast: HTMLElement;
  public loading = LoadingController;
  public invalidLogin: boolean =true

  constructor(
    private loginService:LoginserviceService,
    private storage: Storage,
    private toastController: ToastController,
    private router: Router,
    public nav: NavController,
    public loadingController: LoadingController,
    public auth: HardcodedAuthenticationService,
    private hardcodedauth: V13serviceService
  ) { 
    this.user = new User(this.id,'','');
    
  }

  ngOnInit() {
    
  }

  
  handleLogin() {
    if(this.hardcodedauth.authenticate(this.user.username, this.user.password)) {
      this.invalidLogin = false
      this.login()
      sessionStorage.setItem('authenticateUser', this.user.username)
    } else {
      
      sessionStorage.setItem('authenticateUser', this.user.password)
      this.invalidLogin = true
    }
  }




  async showToastOnImage() {
    const toast = await this.toastController.create({
      message: 'On MouseOver event on an image',
      duration: 2000,
      position: 'middle',
    });
    toast.present();
  }


  async showToast(position: string, pesan) {
    const toast = await this.toastController.create({
      message: pesan,
      duration: 1000,
      position: 'bottom',
    });
    toast.present();
  }

  async showToastWithCloseButton() {
    const toast = await this.toastController.create({
      message: 'Your files were successfully saved',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  async showLongToast() {
    const toast = await this.toastController.create({
      message: 'Example of showing long toast',
      duration: 4000,
    });
    toast.present();
  }

  async save() {
    console.log(this.user);
    debugger
    if (this.user && this.email) {
      const toast = await this.toastController.create({
        message: 'User profile was saved successfully',
        position: 'bottom',
        duration: 3000
      });
      toast.present();
    } else {
      const toast = await this.toastController.create({
        message: 'User profile field is not filled',
        position: 'bottom',
        duration: 3000
      });
      toast.present();
    }

  }



  login(){

    
    this.presentLoading();
    this
    this.loginService.doLogin(this.user.username,this.user.password)
          .subscribe (
            response => this.handleSuccessfullResponse(response),
            error => this.handleErrorRest(error),
            () => {
                
            }
            
          )
          
  }
  presentLoading() {
    
  }

  handleSuccessfullResponse(response){
    this.invalidLogin = false 
    this.token = response.token
    this.id = response.id
    this.email = response.email
    this.storage.set('token_user',response.token+"&&&&&"+response.data["id"])
    this.storage.set('id_user',response.data["id"])
    this.storage.set('email_user',response.data["email"])
    
    this.storage.get('token_user').then((val) => {
      console.log('Token User adalah = ', val);
    });
    this.storage.get('email_user').then((val) => {
      console.log('Email User adalah = ', val);
      sessionStorage.setItem('email_user_sesi', val);
      console.log("sesi email "+val)
    });

    this.showToast('bottom', response.message)
    this.router.navigate(['/tabs/listmenu'])
    this.isUserLoggedIn();

    sessionStorage.setItem('authenticateUser', this.user.username)
    this.invalidLogin = false
}


isUserLoggedIn() {
  let user = sessionStorage.getItem('email_user_sesi')
  return !(user === null)
}


handleErrorRest(error){
  this.invalidLogin = true
  

  this.showToast('bottom', error.message)
}

}


export class User {
  constructor(
    public id: number,
    public username: string,
    public password: string
  ){

  }
}