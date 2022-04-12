import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/Service/course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  courseForm:FormGroup;
  course:any={}
  id:any
  constructor(private formBuilder:FormBuilder, private activateRoute:ActivatedRoute, private courseService:CourseService ,private route:Router  ) { }

  ngOnInit() {
    this.courseForm=this.formBuilder.group({
      Name:[''],
      detail:[''],
      teacher:[''],
      Hour:['']
    })
    this.id=this.activateRoute.snapshot.paramMap.get('id')
    console.log(this.id);
    
    this.course=this.courseService.getById(this.id)
  }
  editCourse(){
    this.courseService.editCourse(this.course);
    this.route.navigate(['admin'])
  }
  

}
