import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private route:Router,private eventService:UserDataService) { }

  ngOnInit(): void {
  }
  course:any=[
    {
      id:"101",
      courseName:"B-Tech",
      eligibility:"12th pass",
      college:"Delhi University",
      list:[
        {
        collegeRegId:"1001",
        collegeName:"ABC"
        },
        {
        collegeRegId:"1002",
        collegeName:"DBC"
        },
        {
        collegeRegId:"1003",
        collegeName:"EBC"
        }
      ]},
    {
      id:"102",
      courseName:"B-Tech",
      eligibility:"12th pass",
      college:"Delhi University",
      list:[
        {
        collegeRegId:"1001",
        collegeName:"ABC"
        },
        {
          collegeRegId:"1002",
          collegeName:"DBC"
        },
        {
          collegeRegId:"1003",
          collegeName:"EBC"
        }
      ]
    },
    {
      id:"103",
      courseName:"B-Tech",
      eligibility:"12th pass",
      college:"Delhi University",
      list:[
        {
        collegeRegId:"1001",
        collegeName:"ABC"
        },
        {
          collegeRegId:"1002",
          collegeName:"DBC"
        },
        {
          collegeRegId:"1003",
          collegeName:"EBC"
        }
      ]
    }
  ]
  collegeList:any;
  goToBranchList(id:number){
      for(let i of this.course){
        if(i.id==id){
            this.collegeList=i.list;
        }
      }
      this.eventService.emit<any>(this.collegeList);
      this.route.navigate(["./branchList"]);
  }
  getUrl()
{
  return "url('assets/images/img8.jpg')";
}
}
