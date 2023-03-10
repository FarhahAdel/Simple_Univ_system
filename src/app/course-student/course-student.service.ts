import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseStudent } from './course-student';

@Injectable({
  providedIn: 'root'
})
export class CourseStudentService {

  courseStudentServiceURL="http://localhost:8080/api/enrolled"
  constructor(private http:HttpClient) { }


  saveCourse(student_course:CourseStudent): Observable<CourseStudent> {
    return this.http.post<CourseStudent>(this.courseStudentServiceURL, student_course);
  }
}
