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
    this.msg=this.authService.login(this.user)
    if (this.msg=='ok') {
      this.token=localStorage.getItem('JWT')
      console.log(this.token);
      this.route.navigate(['admin']);  
            
    }
    else{ console.log(this.msg);
    }
    
    
  }

}
