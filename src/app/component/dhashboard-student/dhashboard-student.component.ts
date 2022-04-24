import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/Service/student.service';

@Component({
  selector: 'app-dhashboard-student',
  templateUrl: './dhashboard-student.component.html',
  styleUrls: ['./dhashboard-student.component.css']
})
export class DhashboardStudentComponent implements OnInit {
  courses:any=[]
  id:any;
  user:any
  student:any

  constructor(private studentService:StudentService) { }

  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem("user"))
    this.studentService.getById(this.user.id).subscribe(data=>{
      //console.log(data);
      
      this.student=data
      console.log(this.student);
      
      this.courses=this.student.courses
      console.log(this.courses);
      
    })
  }

}
