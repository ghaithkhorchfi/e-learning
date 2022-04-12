import { Injectable } from '@angular/core';
import {users} from '../data/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userlist:any= users

  constructor() { }
  getAlluserlist(){
    return this.userlist
  }
  editUser(user:any){
    for( let i=0;i<this.userlist.length;i++ ){
      if (this.userlist[i].id===user.id) {
       this.userlist[i]= user
       console.log(this.userlist[i]);
       
      }
        
      }
    
    console.log(user);
    
  }
  delete(id:number){
    let list=[]
    for( let i=0;i<this.userlist.length;i++ ){
      if (this.userlist[i].id!==id) {
      list.push(this.userlist[i])
      }
        
      }
      this.userlist=list

  }
getById(id:any){
  for( let i=0;i<this.userlist.length;i++ ){
    if (this.userlist[i].id==id) {
    return(this.userlist[i])
    }
      
    }

}
addUser(user:any){
  this.userlist.push(user);

}
getAllTeacher(){
  return this.userlist.filter((e)=>e.role=='teacher')
}
getAllStudent(){
  return this.userlist.filter((e)=>e.role=='student')
}

}
