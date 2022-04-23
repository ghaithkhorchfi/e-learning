import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  loggedInUser: any = [];

  constructor() { }

  ngOnInit() {
    this.getLoggedInUser();
  }

  getLoggedInUser() {
    this.loggedInUser = JSON.parse(localStorage.getItem("user"));
    console.log(this.loggedInUser);
    console.log("3asba")
  }

}
