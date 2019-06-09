import { Component, OnInit } from '@angular/core';
import { RegisterserviceService } from '../registerservice.service';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  register: Register

  constructor(
    private registerService:RegisterserviceService,
    private storage: Storage,
    private toastController: ToastController,
    private router: Router,
    public nav: NavController,
    public loadingController: LoadingController) {

    this.register = new Register(0,'','','','')
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

  doregister(){
    this.presentLoading();
    this.registerService.doregisterAPI(this.register.username,this.register.password, this.register.full_name, this.register.email)
          .subscribe (
            response => this.handleSuccessfullResponse(response),
            error => this.handleErrorRest(error),
            () => {

      
            }
            
          )
          
  }

  
  async showToast(position: string, pesan) {
    const toast = await this.toastController.create({
      message: pesan,
      duration: 1000,
      position: 'bottom',
    });
    toast.present();
  }


  handleSuccessfullResponse(response){
    
    this.showToast('bottom', response.message)
    this.router.navigate(['/tabs/login'])

  }

  handleErrorRest(error){
  
    this.showToast('bottom', error.message)
  }


}



export class Register {
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public full_name: string,
    public email: string
  ){

  }
}