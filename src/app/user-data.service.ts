import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Students } from './classes/students';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  // private baseURL = "http://localhost:8080/User/"; 
  // constructor(private httpClient:HttpClient) { }

  public subject = new BehaviorSubject<any>('');
 emit<T>(data:T){
    this.subject.next(data);
  }

  on<T>():Observable<T>{
    return this.subject.asObservable();
  }
  // getAllUserDetails(): Observable<Students[]> {  
  //   return this.httpClient.get<Students[]>(`${this.baseURL}`+`getAllUserDetails`);  
  // }  
  // addUserDetails(users: Students): Observable<any>{
  //   return this.httpClient.post(`${this.baseURL}`+`addUserDetails`,users)
  // }
  // deleteUserDetailsById(userId:number): Observable<Object>{
  //   return this.httpClient.delete(`${this.baseURL}/deleteUserDetailsById/${userId}`, { responseType: 'text' });
  // }
  // getUserDetailsById(userId: number): Observable<Students> {  
  //     return this.httpClient.get<Students>(`${this.baseURL}/getUserDetailsById/${userId}`);  
  //    }  
  
}
