import { Component } from '@angular/core';
import { ServerDataService } from '../service/data/server-data.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  todo: Todo
  id: number

  constructor(private todoService: ServerDataService, private router:Router,
    public toastController: ToastController
    ) {
    
    
    this.todo = new Todo(this.id,'','','','','','',false,new Date());

  }

  addsurvey(){
    this.todoService.createTodo('Nanang Rustianto, 08 123 540 1617', this.todo)
          .subscribe (
            data => {
              alert("Data Survey Telah Terkirim")
              console.log(data)
              this.todo.nama_lengkap = ''
              //this.router.navigate(['tabs/surversukses'])
            }
          )
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

}

export class Todo {
  constructor(
    public id: number,
    public nama_lengkap: string,
    public nama_toko: string,
    public alamat_toko: string,
    public nomor_hp: string,
    public email: string,
    public saran: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

