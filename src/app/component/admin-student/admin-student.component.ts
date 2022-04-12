import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-student.component.html',
  styleUrls: ['./admin-student.component.css']
})
export class AdminStudentComponent implements OnInit {
  list:any=[]

  constructor(private userService:UserService,private route:Router) { }

  ngOnInit() {
    this.list=this.userService.getAllStudent()
  }
  edit(id:any){
    this.route.navigate([`edituser/${id}`])    
  }
  delete(id:any){
    this.userService.delete(id);
    this.list=this.userService.getAlluserlist()
  }

}
