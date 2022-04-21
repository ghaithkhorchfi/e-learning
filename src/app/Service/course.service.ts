import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseUrl:string="http://localhost:8082/api/courses"

  constructor(private httpClient: HttpClient) { }


  addCourse(cour:any){
    return this.httpClient.post(this.courseUrl,cour);
  }
  getAllCourses(){
    return this.httpClient.get(this.courseUrl);
  }
  editCourse(cour:any){
    return this.httpClient.put(`${this.courseUrl}/${cour.id}`,cour);    
  }
  delete(id:any){
   return this.httpClient.delete(`${this.courseUrl}/${id}`)

  }
getById(id:any){
  return this.httpClient.get(`${this.courseUrl}/${id}`)

}
inscri(cours:any,id:any){
  return this.httpClient.put(`${this.courseUrl}/abon/${id}`,cours);

}


}
