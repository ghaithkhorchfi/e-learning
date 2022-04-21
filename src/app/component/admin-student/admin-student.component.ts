import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/Service/student.service';
import { TeacherService } from 'src/app/Service/teacher.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-student.component.html',
  styleUrls: ['./admin-student.component.css']
})
export class AdminStudentComponent implements OnInit {
  list:any=[]

  constructor(private studentService:StudentService,private route:Router) { }

  ngOnInit() {
   this.studentService.getAlluserlist().subscribe(data=>{
    let t:any=[]
    t=data
    this.list=t.filter(e=>e.role='student')
   })
  }
  edit(id:any){
    this.route.navigate([`edituser/${id}`])    
  }
  delete(id:any){
    console.log(id);
    this.studentService.delete(id).subscribe(()=>{
      this.studentService.getAlluserlist().subscribe(data=>{
        let t:any=[]
        t=data
        this.list=t.filter(e=>e.role='student')
      })
    }
      
    );

  }

}
