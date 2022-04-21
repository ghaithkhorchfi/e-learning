import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { users } from '../data/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userlist:any=users
  userUrl:string="http://localhost:8082/api/users"

  constructor(private httpClient:HttpClient) { }

  login(user:any){
    return this.httpClient.get(`${this.userUrl}/info/${user.email}/${user.password}`)

  }
  loggedIn(){
    return !!localStorage.getItem('JWT');
  }
}
