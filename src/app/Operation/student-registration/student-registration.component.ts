import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  //private _Router: any;
  constructor(private _Router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this._Router.navigateByUrl('/documents');

}
  getUrl()
  {
    return "url('assets/images/img18.jpg')";
  }
}
