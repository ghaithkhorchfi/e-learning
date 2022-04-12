import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private route:Router,private authService:AuthService){}
  canActivate() {
    if (this.authService.loggedIn()) {
      return true      
    }
    else{
      this.route.navigate(['sign'])
      return false
    }
    
  }
  
}
