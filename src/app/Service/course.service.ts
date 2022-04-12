import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses:any= [{ id: 1, Name: 'ghaith', detail: 'ghaith',teacher:'katiba',Hour:5,idUser:1 },
  { id: 2, Name: 'ghaith', detail: 'ghaith',teacher:'psycoM',Hour:8,idUser:1},
  { id: 3, Name: 'katiba', detail: '3akess sereb',teacher:'psycoM',Hour:8,idUser:2},
  { id: 4, Name: 'psyco', detail: 'last breath',teacher:'psycoM',Hour:8,idUser:2},]

  constructor() { }

  getAllCourses(){
    return this.courses
  }
  editCourse(cour:any){
    for( let i=0;i<this.courses.length;i++ ){
      if (this.courses[i].id===cour.id) {
       this.courses[i]= cour
       console.log(this.courses[i]);
       
      }
        
      }
    
    console.log(cour);
    
  }
  delete(id:number){
    let list=[]
    for( let i=0;i<this.courses.length;i++ ){
      if (this.courses[i].id!==id) {
      list.push(this.courses[i])
      }
        
      }
      this.courses=list

  }
getById(id:any){
  for( let i=0;i<this.courses.length;i++ ){
    if (this.courses[i].id==id) {
    return(this.courses[i])
    }
      
    }

}
getByUserId(id:any){
  let list=[]
  for(let i=0;i<this.courses.length;i++){
    if (this.courses[i].idUser==id) {
      list.push(this.courses[i])      
    }
  }
  return list
}

}
