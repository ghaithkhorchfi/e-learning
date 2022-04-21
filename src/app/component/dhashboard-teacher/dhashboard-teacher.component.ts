import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/Service/course.service';

@Component({
  selector: 'app-dashboard-teacher',
  templateUrl: './dhashboard-teacher.component.html',
  styleUrls: ['./dhashboard-teacher.component.css']
})
export class DhashboardTeacherComponent implements OnInit {
  courses:any=[{ id: 1, Name: 'ghaith', detail: 'ghaith',teacher:'katiba',Hour:5,idUser:1 }]
  id:any=1;
  constructor(private courseService:CourseService) { }

  ngOnInit() {

    
   
    console.log(this.id);
    
    
    // this.courses=coursList.filter(e=>e.idUser!=this.id)
    
    // console.log(this.courses);
    
  }

}
