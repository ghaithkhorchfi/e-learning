import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { CourseService } from 'src/app/Service/course.service';
import { Course } from 'src/app/Service/course';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public courseList: any = [];
  selectedValue: any;
  index: number;

  @ViewChild('name', {static: true}) nameKey: ElementRef;

  constructor(private CourseService: CourseService) { }

  ngOnInit() {
    this.getAllCourses();
  }


  handleChange(e) {
    console.log(e.target.value);
    this.selectedValue = e.target.value
    let index = this.courseList.findIndex(item => item.name == e.target.value)
    console.log(index + 1);
    localStorage.setItem("index", index + 1);
  }

  getAllCourses() {
    this.CourseService.getCourses()
    .subscribe(res => {
      this.courseList = res;
      console.log(this.courseList);
    })
  }

  startQuiz() {
    localStorage.setItem("name", this.nameKey.nativeElement.value)
  }

  


}
