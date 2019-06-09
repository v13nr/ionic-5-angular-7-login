import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ConfService } from '../conf.service';

@Injectable({
  providedIn: 'root'
})
export class BarangserviceService {

  arrBarang: string [];

  constructor(private config: ConfService,
    private http:HttpClient,) { }

  retrieveAllBarang(){


    let body = new URLSearchParams();
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'X-Api-Key': this.config.API.toString(),
        'Accept': 'application/json, */*'
      })};

    
 
    return this.http.get('./assets/birds.json').subscribe(
      data => {
        this.arrBarang = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }


}

export class Barang{

}
