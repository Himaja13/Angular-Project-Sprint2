import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../classes/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentserviceService {
  
 private baseURL = "http://localhost:8080/Payment/"; 
  constructor(private httpClient:HttpClient) { }
  viewAllPaymentDetails(): Observable<Payment[]> {  
    return this.httpClient.get<Payment[]>(`${this.baseURL}`+`Viewallpaymentdetails`);  
  }
  addPayment(payment: Payment): Observable<Payment[]> {  
    return this.httpClient.post<Payment[]>(`${this.baseURL}`+`addPayment`, payment, {responseType:'text' as 'json'});  
  }
  


}
