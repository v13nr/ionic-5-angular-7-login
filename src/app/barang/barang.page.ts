import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ConfService } from '../conf.service';
import { BarangserviceService } from '../service/barangservice.service';
import { Storage } from '@ionic/storage';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-barang',
  templateUrl: './barang.page.html',
  styleUrls: ['./barang.page.scss'],
})
export class BarangPage implements OnInit {
  arrBarang: string [];
  tokenz: string
  databarang: string

  constructor(
    private httpService: HttpClient,
    public config:ConfService,
    private service:BarangserviceService,
    
    private storage: Storage

    ) { 

      
    this.tokenz = this.storage.get('token_user').toString();
    this.storage.get('token_user').then((val) => {
      console.log('Token User adalah = ', val)
      this.tokenz = val

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/x-www-form-urlencoded',
          'X-Api-Key': this.config.API.toString(),
          'X-Token': this.tokenz,
          'Accept': 'application/json, */*'
        })};
    
        this.httpService.get(this.config.ProdukAll_URL+'?X-Api-Key='+this.config.API,httpOptions).subscribe(
          data => {
            this.arrBarang = data as string [];	 // FILL THE ARRAY WITH DATA.
             console.log(this.arrBarang["data"]["coamu_produk"][1]["id_produk"]);
             this.databarang = this.arrBarang["data"]["coamu_produk"]
          },
          (err: HttpErrorResponse) => {
            console.log (err.message);
          }
        );

    });





    }

  ngOnInit() {



  
  }

}
