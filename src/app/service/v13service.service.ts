import { Injectable } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class V13serviceService {

  constructor(
    private loginService3:LoginserviceService,
    
    private toastController: ToastController,
  ) {
   }



   authenticate(username, password){
     console.log('before '+ this.isUserLogin())
     if(username='atikah@atikah.com' && password === 'atikah'){



       sessionStorage.setItem('authenticateUser', username)
       
      console.log('after '+ this.isUserLogin())
        return true
     }
     return false
   }




   isUserLogin(){
     let user =  sessionStorage.getItem('authenticateUser')
     return !(user === null)
   }

   logout(){
    sessionStorage.removeItem('authenticateUser')
   }
}
