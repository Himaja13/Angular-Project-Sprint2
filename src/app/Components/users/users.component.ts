import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  getUrl()
{
  return "url('assets/images/img2.jpg')";
}
goToUserHomePage(){
  this.route.navigate(["./userHome"]);
}
goToUserSignUpPage(){
  this.route.navigate(["./signup"]);
}
}
