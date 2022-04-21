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
      name:[''],
      detail:[''],
      link:['']
    })
    this.id=this.activateRoute.snapshot.paramMap.get('id')
    console.log(this.id);
    
   this.courseService.getById(this.id).subscribe(data=>{
     this.course=data
   });
  
  }
  editCourse(){
    this.courseService.editCourse(this.course).subscribe();
    this.route.navigate(['admin'])
  }
  

}
