import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { CourseService } from 'src/app/Service/course.service';
import { Course } from 'src/app/Service/course';
import { QuestionService } from 'src/app/Service/question.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public courseList: any = [];
  selectedValue: any;
  index: number;
  questionList: any = [];
  questionList1: any = [];

  @ViewChild('name', {static: true}) nameKey: ElementRef;

  constructor(private CourseService: CourseService, private QuestionService: QuestionService) { }

  ngOnInit() {
    window.localStorage.removeItem("questionList1")
    this.getAllCourses();
    this.getAllQuestions();
   
  }


  handleChange(e) {
    console.log(e.target.value);
    this.selectedValue = e.target.value;
    let id;
    for (let i=0; i < this.courseList.length; i++) {
      if (this.courseList[i].name == e.target.value) {
        id = this.courseList[i].id;
      }
    }
    let j = 0;
    console.log(id);
    for (let i=0; i < this.questionList.length; i++) {
      if (this.questionList[i].courseId == id) {
        console.log(this.questionList[i]);
        this.questionList1[j] = this.questionList[i];
        j++;
      }
    }
    console.log(this.questionList1)
    localStorage.setItem("questionList1", JSON.stringify(this.questionList1));

}

   getAllQuestions() {
     this.QuestionService.getQuestions()
     .subscribe(res => {
       this.questionList = res;
       console.log(this.questionList);
     })
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
