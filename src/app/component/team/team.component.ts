import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  team:any=[];

  constructor() { }

  ngOnInit() {
    this.team=[{name:"katiba", punshline:"3andi 3azimaw el fekrabech ta5tef"},
    {name:"farzit", punshline:"ya bey3etni soum maw fibelek"},
    {name:"katiba", punshline:"3andi 3azimaw el fekrabech ta5tef"},
    {name:"psyco M", punshline:"3aychin f 3alem des image mozayfa k sarab"},{name:"katiba", punshline:"e5dem taw rabi yaatik"}];
  }

}
