import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from '../classes/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private baseURL = "http://localhost:8080/User/"; 
  constructor(private httpClient:HttpClient) { }
  getAllUserDetails(): Observable<Students[]> {  
    return this.httpClient.get<Students[]>(`${this.baseURL}`+`getAllUserDetails`);  
  }  
}
