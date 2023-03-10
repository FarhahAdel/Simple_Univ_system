import { Injectable } from '@angular/core';
import { Student } from '../student/student';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  bufferStudent!:Student;
  constructor(private http:HttpClient) { }

  loginServiceURL:string = "http://localhost:8080/api/students";

  login(username:string, password:string): Observable<Student>{
     return this.http.get<Student>(this.loginServiceURL + "/" + username+"/"+password);
  }
}
