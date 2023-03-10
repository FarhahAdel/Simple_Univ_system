import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { University } from './university';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UnivServiceService {
  // localhost:8080/api/university

  private univServiceURL = "http://localhost:8080/api/university";
  constructor(private http:HttpClient) { }
  getUnivs(): Observable < University[]> {
    console.log(this.http.get<University[]>(this.univServiceURL))
    return this.http.get<University[]>(this.univServiceURL);
  }

  getUnivById(id:number): Observable<University> {
    return this.http.get<University>(this.univServiceURL + "/" + id);
  }

  deleteUniv(id:number): Observable<any> {
    return this.http.delete<any>(this.univServiceURL + "/" + id);
  }

  saveUniv(univ: University): Observable<University> {
    return this.http.post<University>(this.univServiceURL, univ);
  }
}
