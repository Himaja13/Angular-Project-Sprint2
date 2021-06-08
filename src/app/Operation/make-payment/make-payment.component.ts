import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from 'src/app/classes/payment';
import { PaymentserviceService } from 'src/app/services/paymentservice.service';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {
  paymentId = Math.floor(1000 + Math.random() * 9000);
  payments2: Payment = new Payment(0, "", 0, 0, "", new Date(), "");
  constructor(private paymentserviceService: PaymentserviceService,
    private router: Router){}
  ngOnInit(): void {
  }
  public addPayment(payments2: any){
    this.paymentserviceService.addPayment(this.payments2).subscribe(data => {
      // this.payments=data;
    })
  }
  onSubmit(){
    alert("Payment Successful");
  }
  
  getUrl()
  {
    return "url('assets/images/img18.jpg')";
  }

}
