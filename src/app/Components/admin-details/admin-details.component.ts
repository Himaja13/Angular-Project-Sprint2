import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getUrl()
{
  return "url('assets/images/img14.jpg')";
}
}
