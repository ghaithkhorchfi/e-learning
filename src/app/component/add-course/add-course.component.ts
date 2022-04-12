import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  courseForm:FormGroup;
  course:any={}
  constructor(private formBuilder:FormBuilder ) { }

  ngOnInit() {
    this.courseForm=this.formBuilder.group({
      Name:[''],
      detail:[''],
      teacher:[''],
      Hour:['']
    })
  }
  addCourse(){
    console.log('course : ',this.course);
    
  }

}
