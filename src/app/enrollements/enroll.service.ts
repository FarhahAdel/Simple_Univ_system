import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enrollment } from './enrollment';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  enrollmentServiceUrl="http://localhost:8080/api/"
  constructor(private http:HttpClient) { }

  getAll(id:number): Observable <Enrollment[]>{
    return this.http.get<Enrollment[]>(this.enrollmentServiceUrl+'enrolled/course/'+id);
  }

  deleteUniv(id:number): Observable<any> {
    return this.http.delete<any>("http://localhost:8080/api/enrolled/"+ id);
  }
}
