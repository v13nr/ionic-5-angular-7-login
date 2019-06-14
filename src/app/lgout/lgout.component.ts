import { Component, OnInit } from '@angular/core';
import { V13serviceService } from '../service/v13service.service';

@Component({
  selector: 'app-lgout',
  templateUrl: './lgout.component.html',
  styleUrls: ['./lgout.component.scss'],
})
export class LgoutComponent implements OnInit {

  constructor(
    private hardcodedAuthservice:V13serviceService) { }

  ngOnInit() {
    this.hardcodedAuthservice.logout()
  }

}
