import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  loginForm:FormGroup;
  user:any={}
  msg:string;
  token:string;

  constructor(private formBuilder:FormBuilder, private authService:AuthService,private route:Router) { }

  ngOnInit() {
  this.loginForm=this.formBuilder.group({
    email:[''],
    password:['']
  })
  
  }
  onSubmit(){
    console.log('info',this.user);
    let p:any;
    this.authService.login(this.user).subscribe((data)=>{
      p=data
      if (p) {
        localStorage.setItem("user",JSON.stringify(p))
        localStorage.setItem("JWT","token")
        
      }
      console.log(data);
      
    })
    
    
  }

}
