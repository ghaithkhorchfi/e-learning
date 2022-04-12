import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-admin-teacher',
  templateUrl: './admin-teacher.component.html',
  styleUrls: ['./admin-teacher.component.css']
})
export class AdminTeacherComponent implements OnInit {
   list:any=[]

  constructor(private userService:UserService, private route:Router ) { }

  ngOnInit() {
    this.list=this.userService.getAllTeacher()
    console.log(this.list);
    
    
  }
  edit(id:any){
    this.route.navigate([`edituser/${id}`])    
  }
  delete(id:any){
    this.userService.delete(id);
    this.list=this.userService.getAlluserlist()
  }

}
