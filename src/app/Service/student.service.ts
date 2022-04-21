import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  userUrl:string="http://localhost:8082/api/students";


  constructor(private httpClient:HttpClient) { }

  addUser(user:any){
    console.log(user);
    
    return this.httpClient.post(this.userUrl,user);
  
  }

  getAlluserlist(){
    return this.httpClient.get(this.userUrl)
  }
  editUser(user:any){

    
    console.log(user);
    return this.httpClient.put(`${this.userUrl}/${user.id}`,user)
    
  }
  delete(id:number){

     return this.httpClient.delete(`${this.userUrl}/${id}`)

  }
getById(id:any){

  return this.httpClient.get(`${this.userUrl}/${id}`)

}
}
