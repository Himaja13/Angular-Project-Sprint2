import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.css']
})
export class UsersHomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  goToHomePage(){
    this.route.navigate(["./user"]);
  }
}
