import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { Storage } from '@ionic/storage';

import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import {LoadingController , NavController} from '@ionic/angular';

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

  constructor(
    private loginService:LoginserviceService,
    private storage: Storage,
    private toastController: ToastController,
    private router: Router,
    public nav: NavController,
    public loadingController: LoadingController
  ) { 
    this.user = new User(this.id,'','');
    
  }

  ngOnInit() {
  
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please Wait',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
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
    this.loginService.doLogin(this.user.username,this.user.password)
          .subscribe (
            response => this.handleSuccessfullResponse(response),
            error => this.handleErrorRest(error),
            () => {

      
            }
            
          )
          
  }

  handleSuccessfullResponse(response){
    
    this.token = response.token
    this.id = response.id
    this.email = response.email
    this.storage.set('token_user',response.token)
    this.storage.set('id_user',response.data["id"])
    this.storage.set('email_user',response.data["email"])
    
    this.storage.get('token_user').then((val) => {
      console.log('Token User adalah = ', val);
    });
    this.storage.get('email_user').then((val) => {
      console.log('Email User adalah = ', val);
    });

    this.showToast('bottom', response.message)
    this.router.navigate(['/tabs/listmenu'])
}

handleErrorRest(error){
  
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