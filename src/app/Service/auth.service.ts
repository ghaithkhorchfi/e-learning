import { Injectable } from '@angular/core';
import { users } from '../data/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userlist:any=users

  constructor() { }

  login(user:any){
    for (let i = 0; i < this.userlist.length; i++) {
      if (user.email==this.userlist[i].email) {
        if(user.password==this.userlist[i].password){
          localStorage.setItem('user',JSON.stringify(user))
          localStorage.setItem('JWT','token')
          return 'ok'
        }
        else{
          return 'password incorrect'
        }

        
      }
      else{ return 'email invalid'}
      
    }


  }
  loggedIn(){
    return !!localStorage.getItem('JWT');
  }
}
