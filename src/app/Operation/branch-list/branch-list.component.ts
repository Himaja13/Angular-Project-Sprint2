import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {

  constructor(private eventService:UserDataService,private route:Router) { }
  Branchlist:any;
  ngOnInit(): void {
    this.eventService.on<any>().subscribe(
      data=>{
        this.Branchlist=data;
      }
    );
  }
  getUrl()
  {
    return "url('assets/images/img7.jpg')";
  }
  back(){
    this.route.navigate(["./adminHome/courses"]);
  }
}
