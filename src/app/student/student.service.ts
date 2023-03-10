import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from '../courses/courses';
import { Enrollment } from '../enrollements/enrollment';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentServiceURL:string="http://localhost:8080/api/students";
  constructor(private http:HttpClient) { }

  save(student : Student): Observable<Student> {
    return this.http.post<Student>(this.studentServiceURL, student);
  }

  getCourses(id:number):Observable<Enrollment[]>{
    return this.http.get<Enrollment[]>("http://localhost:8080/api/enrolled/student/"+id)
  }
}
