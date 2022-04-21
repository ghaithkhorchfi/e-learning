import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  teacherUrl:string="http://localhost:8082/api/teachers"

  constructor(private httpClient:HttpClient) { }

  addteacher(teacher:any){
    return this.httpClient.post(this.teacherUrl,teacher);
  }
  getAllteachers(){
    return this.httpClient.get(this.teacherUrl);
  }
  editteacher(teacher:any){
    return this.httpClient.put(`${this.teacherUrl}/${teacher.id}`,teacher);    
  }
  delete(id:number){
   return this.httpClient.delete(`${this.teacherUrl}/${id}`)

  }
getById(id:any){
  return this.httpClient.get(`${this.teacherUrl}/${id}`)

}
}
