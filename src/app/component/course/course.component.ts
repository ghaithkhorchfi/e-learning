import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/Service/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  lesson:any=[];


  constructor(private courseService:CourseService) { }

  ngOnInit() {
    this.courseService.getAllCourses().subscribe(data=>{
      this.lesson=data
      console.log(this.lesson);
      
    })
  
  }

}
