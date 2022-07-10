import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private APIURL: string = 'https://whispering-tor-10704.herokuapp.com';
  public title: string = '';
  constructor(private http: HttpClient) {}
  getStudentsList(): Observable<any> {
    return this.http.get(`${this.APIURL}`);
  }
  getStudentDetails(id: any): Observable<any> {
    return this.http.get(`${this.APIURL}/student/${id}`);
  }
}
