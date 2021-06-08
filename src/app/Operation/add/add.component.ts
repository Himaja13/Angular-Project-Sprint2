import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  getUrl()
  {
    return "url('assets/images/img6.jpg')";
  }
  back(){
    this.route.navigate(["./adminHome/university"]);
  }
}
