import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/Service/student.service';
import { TeacherService } from 'src/app/Service/teacher.service';
import { UserService } from 'src/app/Service/user.service';
import {MustMatch } from 'src/app/Validators/MustMatch';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUp:FormGroup;
  constructor( private formBuilder: FormBuilder,private userService:UserService,private teacherservice:TeacherService, private studentservice: StudentService ) { }

  ngOnInit() {
    this.signUp=this.formBuilder.group({
      name:['',[Validators.minLength(8),Validators.required]],
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.minLength(8),Validators.required]],
      pwd:['',[Validators.required,Validators.minLength(8)]],
      role:['']
    },
    {
      validator:MustMatch('password','pwd')
    }
    )
    
  }
sign(){

  console.log('user',this.signUp.value);
  if(this.signUp.value.role=="teacher"){
    this.teacherservice.addteacher(this.signUp.value).subscribe(data=>console.log(data));
  }
  else if(this.signUp.value.role=="student"){
    this.studentservice.addUser(this.signUp.value).subscribe(data=>console.log(data));
  }
  else{
    this.userService.addUser(this.signUp.value).subscribe((data)=>{console.log("here data ", data);
  })
  }  

}

}

