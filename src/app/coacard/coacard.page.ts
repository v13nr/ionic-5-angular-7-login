import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { Router, UrlTree, UrlSegmentGroup, UrlSegment, PRIMARY_OUTLET } from '@angular/router';

@Component({
  selector: 'app-coacard',
  templateUrl: './coacard.page.html',
  styleUrls: ['./coacard.page.scss'],
})
export class CoacardPage implements OnInit {
  jenisCoa = ''
  coas = []

  constructor(location: Location, router: Router) {
    const tree: UrlTree = router.parseUrl(window.location.href);
    const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;
    //s[0].path; // returns 'coacard'
    //s[0].parameters; // returns {id: 33}
    console.log(location.path())
    var str = location.path();
    var res = str.split("/");
    this.jenisCoa = res[3]
    console.log(this.jenisCoa)
    if(this.jenisCoa ==='A0001'){
      this.coas = [
        new coa(1,'A0001','Aktiva','Aktiva adalah segala kekayaan yang dimiliki oleh suatu perusahaan, yang dimaksud dengan kekayaan ini adalah sumber daya yang dapat berupa benda atau hak yang dikuasai dan yang sebelumnya diperoleh perusahaan melalui transaksi atau kegiatan masa lalu.',true,new Date()),
    
      ]
    }
    if(this.jenisCoa ==='P0001'){
      this.coas = [
        new coa(1,'P0001','Pasiva','Pasiva adalah suatu pengorbanan ekonomi yang dilakukan oleh suatu entitas bisnis atau perusahaan di masa yang akan datang kepada pihak ketiga karena adanya suatu aktivitas usaha.',true,new Date()),

      ]
    }
    if(this.jenisCoa ==='L0001'){
      this.coas = [
        new coa(1,'L0001','Laba Rugi','Laporan laba rugi (Inggris: Income Statement atau Profit and Loss Statement) adalah bagian dari laporan keuangan suatu perusahaan yang dihasilkan pada suatu periode akuntansi yang menjabarkan unsur-unsur pendapatan dan beban perusahaan sehingga menghasilkan suatu laba (atau rugi) bersih.',true,new Date()),
      
      ]
    }
  }

  

  
  ngOnInit() {
  }

}


export class coa{
  constructor(
    public id: number,
    public kode_coa: string,
    public nama_coa: string,
    public description: string,
    public active: boolean,
    public created_date: Date
  ){

  }
}