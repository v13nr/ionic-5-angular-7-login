import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {
    this.ionViewWillEnter();
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

