import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user:any
  constructor(private router:Router) { }

  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem('user'))
  }
isLogged(){
  if(this.user){
    return false

  }
  else{
    return true
  }
}
logOut(){
  console.log("logout");
  
  localStorage.clear()
  this.router.navigate(["sign"])

}
goto(){
  if(this.user.role=="admin"){
    this.router.navigate(["admin"])
  }
  else if(this.user.role=="student"){
    this.router.navigate(["adminstudent"])

  }
  else{
    this.router.navigate(["adminteacher"])
  }
}

}
