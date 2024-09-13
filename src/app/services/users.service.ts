import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private myClient:HttpClient) {
    }
   private URl_DB="http://localhost:3000/students"
    getAllStudents(){
      return this.myClient.get(this.URl_DB);
    }
    getAllStudentById(id:number){
      return this.myClient.get(this.URl_DB+"/"+id);
    }
  createStudent(newStd:any)
  {
    return this.myClient.post(this.URl_DB,newStd);
  }
}
