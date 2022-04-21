import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/Service/course.service';

@Component({
  selector: 'app-admin-course',
  templateUrl: './admin-course.component.html',
  styleUrls: ['./admin-course.component.css']
})
export class AdminCourseComponent implements OnInit {
  list:any=[]

  constructor(private Course:CourseService,private route:Router) { }

  ngOnInit() {
    this.Course.getAllCourses().subscribe((data)=>{
      console.log(data);
      
      this.list=data});
    

  }
  edit(id:any){
    this.route.navigate([`editcourse/${id}`])

  }
  delete(id:any){
    console.log(id);
    this.Course.delete(id).subscribe(data=>{
      console.log('deleted');
      this.Course.getAllCourses().subscribe((data)=>{ 
        this.list=data});
      
    });
  }

}
