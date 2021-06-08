import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Students } from 'src/app/classes/students';
import { StudentsService } from 'src/app/services/students.service';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  // constructor(){}
  // ngOnInit(): void{

  // }
  

  // Users:any=[
  //   {
  //     userId:"1001",
  //     firstName:"Sai",
  //     middleName:"Tejaswi",
  //     lastName:"Reddy",
  //     email:"saiTez5reddy@gmail.com",
  //     mobileNumber:"8989765488",
  //     aadharCardNo:"44584756565"
  //   },
  //   {
  //     userId:"1002",
  //     firstName:"Himaja",
  //     middleName:"Reddy",
  //     lastName:"Salkapuram",
  //     email:"himaja@gmail.com",
  //     mobileNumber:"9704848698",
  //     aadharCardNo:"672652385432"
  //   },
  //   {
  //     userId:"1003",
  //     firstName:"Supraja",
  //     middleName:"",
  //     lastName:"Asari",
  //     email:"supraja@gmail.com",
  //     mobileNumber:"8989765720",
  //     aadharCardNo:"661273621877"
  //   }
    
  //  ]
//    Users: any;
Users: Students[] | undefined;
  constructor(private studentsService: StudentsService,
  private router: Router){}
  ngOnInit(): void {
    this.getAllUserDetails();
  }
 private  getAllUserDetails() {
   this.studentsService.getAllUserDetails().subscribe(data => {
     this.Users = data;
   });
}
// getUserDetailsById(userId: number){
//   this.router.navigate(['userdetails', userId]);
//   }

// updateUserDetails(userId: number){
//   this.router.navigate(['updateuser', userId]);
//   }
//   deleteUserDetailsById(userId: number){
//     this.userService.deleteUserDetailsById(userId).subscribe(data => {
//       console.log(data);
//       this.getAllUserDetails();
//     })
//   }
  getUrl()
{
  return "url('assets/images/img9.jpg')";
}
}
//Hello
