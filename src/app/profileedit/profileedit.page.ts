import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profileedit',
  templateUrl: './profileedit.page.html',
  styleUrls: ['./profileedit.page.scss'],
})
export class ProfileeditPage implements OnInit {
  profile: Profile

  constructor() { 

    this.profile = new Profile(1,'','','','')
  }

  ngOnInit() {
  }

}


export class Profile {
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public full_name: string,
    public email: string
  ){

  }
}