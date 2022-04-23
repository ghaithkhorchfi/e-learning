import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/Service/teacher.service';

@Component({
  selector: 'app-admin-teacher',
  templateUrl: './admin-teacher.component.html',
  styleUrls: ['./admin-teacher.component.css']
})
export class AdminTeacherComponent implements OnInit {
   list:any=[]

  constructor(private teacherService:TeacherService, private route:Router ) { }

  ngOnInit() {
    this.teacherService.getAllteachers().subscribe(data=>{
      let t:any=[]
      t=data
      this.list=t.filter(e=>e.role=='teacher')
    })
    console.log(this.list);
    
    
  }
  edit(id:any){
    this.route.navigate([`edituser/${id}`])    
  }
  delete(id:any){
    this.teacherService.delete(id).subscribe(()=>{
      this.teacherService.getAllteachers().subscribe(data=>{
        let t:any=[]
        t=data
        this.list=t.filter(e=>e.role='teacher')
      })
    })
  }

}
