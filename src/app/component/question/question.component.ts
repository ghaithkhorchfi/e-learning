import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from 'src/app/Service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  public name : String="";
  public questionList: any = [];
  public questionList1: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  index: any;
  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$:any;
  progress: string = "0";
  isQuizCompleted : Boolean = false;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.name = localStorage.getItem("name")!;
    this.index = localStorage.getItem("index");
    console.log(this.index);
    this.getAllQuestions();
    this.startCounter();
    
  }

  getAllQuestions() {
    var j = 0;
    this.questionService.getQuestions()
    .subscribe(res => {
      this.questionList = res;
      console.log(this.questionList);
      for (var i = 0; i < this.questionList.length; i++) {
        if (this.questionList[i].courseId == this.index) {
          this.questionList1[j] = this.questionList[i];
          j++;
        }
      }
      console.log(this.questionList1.length);
    })
    
  }

  nextQuestion() {
    this.currentQuestion++;
  }


  previousQuestion() {
    this.currentQuestion--;
  }

  answer(currentQno: number, choice: any) {
    if (choice.correct) {
      this.points += 10;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000)
    } else {
      setTimeout(() => {
        this.inCorrectAnswer++;
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
        
      }, 1000);
      
      this.points -= 10;
    }
    console.log(this.currentQuestion);
    console.log(this.questionList1.length);
    if (this.currentQuestion + 1 == this.questionList1.length) {
      this.isQuizCompleted = true;
      this.stopCounter();
    }
  }

  startCounter() {
    this.interval$ = interval(1000)
    .subscribe(val => {
      this.counter--;
      if (this.counter == 0) {
        this.currentQuestion++;
        this.points -= 10;
        this.counter = 60;
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000)

  }

  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }

  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress="0";
  }

  getProgressPercent() {
    this.progress = ((this.currentQuestion/this.questionList1.length)*100).toString();
    return this.progress;
  }

}
