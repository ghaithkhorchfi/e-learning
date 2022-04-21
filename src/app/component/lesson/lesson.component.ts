import { Component, OnInit,Input } from '@angular/core';
import { CourseService } from 'src/app/Service/course.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  @Input() cours:any;
  user:any;

  constructor( private courseService:CourseService ) { }

  ngOnInit() {
    
    this.user=JSON.parse(localStorage.getItem("user"))
    //console.log(this.user);
    console.log(this.cours);
    
    
    
  }
  inscrire(){
    
    this.courseService.inscri(this.cours,this.user.id).subscribe(data=>console.log(data));
    

  }

}
