import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Documents } from 'src/app/classes/documents';
import { DocumentserviceService } from 'src/app/services/documentservice.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  documents: Documents[] | undefined;
  constructor(private documentserviceService: DocumentserviceService,
    private router: Router){}
    ngOnInit(){
      this.viewAllDocumentDetails();
    }
   private  viewAllDocumentDetails() {
     this.documentserviceService.viewAllDocumentDetails().subscribe(data => {
       this.documents = data;
     });
    }
getUrl()
  {
    return "url('assets/images/img4.jpg')";
  }
  // documents:any=[
  //   {
  //     documentId:"42511SS01",
  //     documentName:"SaiDoct",
  //     documentUrl:"http://saiurlo3/king",
  //     applicantId:"33245RT67",
  //     emailId:"saitezawasi@gmail.com",
  //     documentStatus:"submitted"
  //   },
  //   {
  //     documentId:"42511SS01",
  //     documentName:"SaiDoct",
  //     documentUrl:"http://saiurlo3/king",
  //     applicantId:"33245RT67",
  //     emailId:"saitezawasi@gmail.com",
  //     documentStatus:"submitted"
  //   },
  //   {
  //     documentId:"42511SS01",
  //     documentName:"SaiDoct",
  //     documentUrl:"http://saiurlo3/king",
  //     applicantId:"33245RT67",
  //     emailId:"saitezawasi@gmail.com",
  //     documentStatus:"submitted"
  //   }
  // ]

    // function getUrl() {
  //   throw new Error('Function not implemented.');
  // }
}
