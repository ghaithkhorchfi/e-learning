import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editForm:FormGroup;
  user:any;
  id:any;

  constructor(private formBuilder:FormBuilder,private userService:UserService,private activateRoute:ActivatedRoute,
     private route:Router
     ) { }

  ngOnInit() {
    this.editForm=this.formBuilder.group({
      name:[''],
      role:[''],
      email:[''],
      password:[''],
    })
    this.id=this.activateRoute.snapshot.paramMap.get('id');
    this.user=this.userService.getById(this.id).subscribe(data=>this.user=data);
  }
  edit(){
    console.log('user',this.user);
    this.userService.editUser(this.user).subscribe(data=>{
      console.log(data);
      
    })
    this.route.navigate(['admin'])
       
  }

}
