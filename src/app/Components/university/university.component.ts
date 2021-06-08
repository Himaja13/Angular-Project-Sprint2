import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  constructor(private route:Router,private eventService:UserDataService) { }

  ngOnInit(): void {
  }
  goToAddOps(){
    this.route.navigate(["./add"]);
  }
  universityList:any=[
    {
      universityId:"1001",
      name:"Delhi University",
      address:"Delhi",
      collegeList:[
        {
          collegeRegId:"20001",
          collegeName:"ABC"
        }
      ]
    },
    {
      universityId:"1001",
      name:"Delhi University",
      address:"Delhi",
      collegeList:[
        {
          collegeRegId:"20001",
          collegeName:"ABC"
        }
      ]
    },
    {
      universityId:"1001",
      name:"Delhi University",
      address:"Delhi",
      collegeList:[
        {
          collegeRegId:"20001",
          collegeName:"ABC"
        }
      ]
    }
  ]
  getUrl()
{
  return "url('assets/images/img10.jpg')";
}
collegeList:any;
goToCollegeList(collegeRegId:number){
  for(let val of this.universityList){
    if(collegeRegId==val.collegeRegId){
      this.collegeList=val.collegeList;
    }
  }
  this.eventService.emit<any>(this.collegeList);
  this.route.navigate(["./collegeList"]);
}
}
