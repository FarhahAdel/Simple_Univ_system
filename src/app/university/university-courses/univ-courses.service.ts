import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnivCourses } from './univ-courses';
import { University } from '../university';
import { UniVCoursesRel } from './uni-courses-rel';

@Injectable({
  providedIn: 'root'
})
export class UnivCoursesService {
  password:string="";
  private univServiceURL = "http://localhost:8080/api/university";
  constructor(private http:HttpClient) {}

  getUnivById(id:number,univ_id:number): Observable<UnivCourses[]> {
    return this.http.get<UnivCourses[]>(this.univServiceURL + "/enrollment/" + id + "/"+univ_id );
  }

  updateCourse( univ:UniVCoursesRel):Observable<any>{
    return this.http.post<University>(this.univServiceURL+'/add/course/',univ);
  }

  deleteCourse(id:number):Observable<any>{
    return this.http.delete<any>(this.univServiceURL+'/course/'+id)
  }

  getUnivCourses(id:number):Observable<any>{
    return this.http.get<any>(this.univServiceURL+'/courses/'+id)
  }

  getEnrollment(id:number):Observable<any>{
    return this,this.http.get<any>(this.univServiceURL+'/enrollment/'+id)
  }
}
