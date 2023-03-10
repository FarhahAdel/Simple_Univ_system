import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../student/student';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  studentServiceURL:string = "http://localhost:8080/api/students";
  constructor(private http:HttpClient) { }

  get() : Observable<Student[]>{
    return this.http.get<Student[]>(this.studentServiceURL);
  }
  save(student : Student): Observable<Student> {
    return this.http.post<Student>(this.studentServiceURL, student);
    
  }
}
