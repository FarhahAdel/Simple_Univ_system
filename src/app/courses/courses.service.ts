import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Courses } from './courses';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  // courses:Courses[];
  private courseServiceURL = "http://localhost:8080/api/courses";
  constructor(private http:HttpClient) { }
  getCourses(): Observable < Courses[]> {
    return this.http.get<Courses[]>(this.courseServiceURL);
  }

  getCoursesById(id:number): Observable<Courses> {
    return this.http.get<Courses>(this.courseServiceURL + "/" + id);
  }

  deleteCourses(id:number): Observable<any> {
    return this.http.delete<any>(this.courseServiceURL + "/" + id);
  }

  saveCourse(course: Courses): Observable<Courses> {
    return this.http.post<Courses>(this.courseServiceURL, course);
  }
}
