import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from 'src/app/classes/payment';
import { PaymentserviceService } from 'src/app/services/paymentservice.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  payments: Payment[] | undefined;
  
  constructor(private paymentserviceService: PaymentserviceService,
    private router: Router){}
    ngOnInit(){
      this.viewAllPaymentDetails();
    }
   public  viewAllPaymentDetails() {
     this.paymentserviceService.viewAllPaymentDetails().subscribe(data => {
       this.payments = data;
     });
  }
  
  getUrl()
  {
    return "url('assets/images/img5.jpg')";
  }
  // payments:any=[
  //   {
  //     paymentId:"100002281",
  //     emailIdOfStudent:"jayashree@gmail.com",
  //     applicationId:"2U66T5",
  //     paymentAmount:"500.00",
  //     description:"For Resistration",
  //     paymentDate:"22-01-2019",
  //     paymentStatus:"success"
  //   },
  //   {
  //     paymentId:"100002281",
  //     emailIdOfStudent:"jayashree@gmail.com",
  //     applicationId:"2U66T5",
  //     paymentAmount:"500.00",
  //     description:"For Resistration",
  //     paymentDate:"22-01-2019",
  //     paymentStatus:"success"
  //   },
  //   {
  //     paymentId:"100002281",
  //     emailIdOfStudent:"jayashree@gmail.com",
  //     applicationId:"2U66T5",
  //     paymentAmount:"500.00",
  //     description:"For Resistration",
  //     paymentDate:"22-01-2019",
  //     paymentStatus:"success"
  //   }
  // ]
}
