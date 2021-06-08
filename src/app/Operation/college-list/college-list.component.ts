import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-college-list',
  templateUrl: './college-list.component.html',
  styleUrls: ['./college-list.component.css']
})
export class CollegeListComponent implements OnInit {

  constructor(private eventService:UserDataService,private route:Router) { }
  collegelist:any;
  ngOnInit(): void {
    this.eventService.on<any>().subscribe(
      data=>{
        this.collegelist=data;
      }
    );
  }
  getUrl()
  {
    return "url('assets/images/img11.jpg')";
  }
  back(){
    this.route.navigate(["./adminHome/university"]);
  }
}
