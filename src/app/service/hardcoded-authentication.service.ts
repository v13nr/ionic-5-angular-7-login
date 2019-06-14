import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  

  constructor(private storage: Storage) { }

  isUserLoggedIn() {
    let user = this.storage.get('token_user').then((val) => {
      console.log('Token User adalah = ', val);
      return !(user === null)
    });
  }


  logout(){
    this.storage.remove('user_token')
    let user = this.storage.get('token_user').then((val) => {
      console.log('Token User Logout adalah = ', val);
      window.location.reload();
    });
  }

}
