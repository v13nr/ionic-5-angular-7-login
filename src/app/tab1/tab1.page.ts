import { Component } from '@angular/core';
import { ServerDataService } from '../service/data/server-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  pesarServer:string

  constructor(private service: ServerDataService, private router: Router) {
    this.router.navigate(['/tabs/coamu'])
    this.ionViewWillEnter()
  }

  getWelcomeMessage(){
    console.log(this.service.executeMessageServer())
    this.service.executeMessageServer().subscribe(
      response => this.handleSuccessfullResponse(response),
      error => this.handleErrorRest()
    )
  }
  
  handleSuccessfullResponse(response){
      console.log(response.message);
      this.pesarServer = response.message
  }

  handleErrorRest(){
    this.pesarServer = 'Offline, Periksa Koneksi'
  }

  ionViewWillEnter(){
    // Try to remove META-Tags
    try{
      document.querySelector("meta[name='description']").remove();
    } catch (e){
  
    }
    try{
      document.querySelector("meta[name='keywords']").remove();
    } catch (e){
  
    }
  
    // Add the new META-Tags
    var description = document.createElement('meta');
    description.name = "description";
    description.content = "COAmu adalah aplikasi Penjualan retail berbasis Android yang terjurnal otomatis, langsung menerbitkan laporan Keuangan ketika terjadi penjualan.";
    document.getElementsByTagName('head')[0].appendChild(description);
  
    var keywords = document.createElement('meta');
    keywords.name = "akunting mobile pos";
    keywords.content = "Akunting, POS, Program Penjualan";
    document.getElementsByTagName('head')[0].appendChild(keywords);
  }
}
