import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Documents } from '../classes/documents';

@Injectable({
  providedIn: 'root'
})
export class DocumentserviceService {
  private baseURL = "http://localhost:8080/Document/"; 
  constructor(private httpClient:HttpClient) { }
  viewAllDocumentDetails(): Observable<Documents[]> {  
    return this.httpClient.get<Documents[]>(`${this.baseURL}`+`Viewalldocumentdetails`);  
  }  

}
