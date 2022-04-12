import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent implements OnInit {
  @Input() membre:any;

  constructor() { }

  ngOnInit() {
  }

}
