import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/Service/course.service';
import { TeacherService } from 'src/app/Service/teacher.service';

@Component({
  selector: 'app-dashboard-teacher',
  templateUrl: './dhashboard-teacher.component.html',
  styleUrls: ['./dhashboard-teacher.component.css']
})
export class DhashboardTeacherComponent implements OnInit {
  courses:any=[]
  id:any;
  user:any
  teacher:any
  constructor(private courseService:CourseService,private teacherService:TeacherService,private route:Router) { }

  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem("user"))
    this.teacherService.getById(this.user.id).subscribe(data=>{
      console.log(data);
      this.teacher=data
      this.courses=this.teacher.courses
      
    })

      
    
  }
  edit(id:any){
    this.route.navigate([`editcourse/${id}`])

  }
  delete(id:any){
    console.log(id);
    this.courseService.delete(id).subscribe(data=>{
      console.log('deleted');
      this.teacherService.getById(this.user.id).subscribe(data=>{
        console.log(data);
        this.teacher=data
        this.courses=this.teacher.courses
        
      })
      
    });
  }
  goto(){
    this.route.navigate(["addCourse"])
  }

}
