import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  httpClient=inject(HttpClient);

  private apiUrl = 'http://ec2-65-2-39-105.ap-south-1.compute.amazonaws.com:3000/Student/guestregister';

  constructor(private http: HttpClient) {}

  registerStudent(studentdata: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, studentdata);
  }
}
