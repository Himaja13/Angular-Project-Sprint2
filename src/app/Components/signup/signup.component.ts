import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {UserRegistration = new FormGroup({
  userId : new FormControl(''),
  firstName : new FormControl(''),
  middleName : new FormControl(''),
  lastName : new FormControl(''),
  email : new FormControl(''),
  mobileNumber : new FormControl(''),
  aadharCardNo: new FormControl(''),
});
  //private _Router: any;
  constructor(private _Router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this._Router.navigateByUrl('/user');

}
getUrl()
{
  return "url('assets/images/img9.jpg')";
}
}
