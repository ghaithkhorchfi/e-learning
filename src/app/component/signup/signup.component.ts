import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Service/user.service';
import {MustMatch } from 'src/app/Validators/MustMatch';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUp:FormGroup;
  constructor( private formBuilder: FormBuilder,private userService:UserService ) { }

  ngOnInit() {
    this.signUp=this.formBuilder.group({
      Name:['',[Validators.minLength(8),Validators.required]],
      Email:['',[Validators.email,Validators.required]],
      Password:['',[Validators.minLength(8),Validators.required]],
      pwd:['',[Validators.required,Validators.minLength(8)]],
      role:['']
    },
    {
      validator:MustMatch('Password','pwd')
    }
    )
    
  }
sign(){
  if (this.signUp.invalid) {
    console.log('wrong input');
    
    
  }
  else{
  console.log('user',this.signUp.value);
  this.userService.addUser(this.signUp.value)}

  

}

}

