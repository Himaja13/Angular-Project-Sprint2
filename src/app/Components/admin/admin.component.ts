import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from './admin';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admin: Admin={
    adminId:'',
    password:''
  }
  errorMsg:any="";
  constructor(private route:Router) { }

  ngOnInit(): void {
    this.errorMsg="";
  }
  onSubmit(adminForm: any){
    if(adminForm.adminId==="777-888-999" && adminForm.password==="123456"){
      this.route.navigate(["./adminHome"]);
      console.log("Login succesfull");
    }
    else{
      this.errorMsg="Invalid Employee Id/ password";
      console.log("Login not succesfull");
    }
  }
  getUrl()
{
  return "url('assets/images/img1.jpg')";
}
goToAdminHome(){
  this.route.navigate(["./adminHome"]);
}
}
