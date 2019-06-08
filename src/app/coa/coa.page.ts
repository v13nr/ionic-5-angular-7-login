import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coa',
  templateUrl: './coa.page.html',
  styleUrls: ['./coa.page.scss'],
})
export class CoaPage implements OnInit {

  constructor() { }

  coas = [
    new coa(1,'A0001','Aktiva','Aktiva adalah segala kekayaan yang dimiliki oleh suatu perusahaan, yang dimaksud dengan kekayaan ini adalah sumber daya yang dapat berupa benda atau hak yang dikuasai dan yang sebelumnya diperoleh perusahaan melalui transaksi atau kegiatan masa lalu.',true,new Date()),
    new coa(2,'P0001','Passiva','Pasiva adalah suatu pengorbanan ekonomi yang dilakukan oleh suatu entitas bisnis atau perusahaan di masa yang akan datang kepada pihak ketiga karena adanya suatu aktivitas usaha.',true,new Date()),
    new coa(3,'L0001','Laba Rugi','Laporan laba rugi (Inggris: Income Statement atau Profit and Loss Statement) adalah bagian dari laporan keuangan suatu perusahaan yang dihasilkan pada suatu periode akuntansi yang menjabarkan unsur-unsur pendapatan dan beban perusahaan sehingga menghasilkan suatu laba (atau rugi) bersih.',true,new Date()),
    

  ]

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
