import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/Service/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  courseForm:FormGroup;
  course:any={}
  user:any;
  constructor(private formBuilder:FormBuilder,private courseService:CourseService,private router:Router ) { }

  ngOnInit() {
    this.courseForm=this.formBuilder.group({
      name:[''],
      detail:[''],
      teach:[{}],
      hour:[''],
      link:['']
    })
    this.user= JSON.parse(localStorage.getItem("user"));
  }
  addCourse(){
    this.course.teach=this.user
    console.log('course : ',this.course);
    this.courseService.addCourse(this.course).subscribe((data)=>{console.log(data);
      this.router.navigate(['admin'])
    })
    
  }

}
