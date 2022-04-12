import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  lesson:any=[];


  constructor() { }

  ngOnInit() {
    this.lesson=[{name:"katiba", punshline:"3andi 3azimaw el fekrabech ta5tef"},
    {name:"farzit", punshline:"ya bey3etni soum maw fibelek"},
    {name:"katiba", punshline:"3andi 3azimaw el fekrabech ta5tef"},
    {name:"psyco M", punshline:"3aychin f 3alem des image mozayfa k sarab"},{name:"katiba", punshline:"e5dem taw rabi yaatik"}];
  }

}
