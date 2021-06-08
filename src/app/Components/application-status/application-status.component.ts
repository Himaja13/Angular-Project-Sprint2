import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.component.html',
  styleUrls: ['./application-status.component.css']
})
export class ApplicationStatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  appStatus:any=[
    {
      id:"45656RT55",
      status:"completed"
    },
    {
      id:"45656RT78",
      status:"Pending"
    },
    {
      id:"45656RT35",
      status:"completed"
    }
    
  ]
  getUrl()
{
  return "url('assets/images/img12.jpg')";
}
confirm(){
  alert("Saved Successfully");
}
}
