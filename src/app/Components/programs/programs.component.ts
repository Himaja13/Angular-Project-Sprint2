import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  route: any;

  constructor() { }

  ngOnInit(): void {
  }
  program:any=[
    {
      programId:"77R56",
      programName:"B-Tech",
      programEligibility:"yes",
      programDuration:"4 Years",
      degreeOffered:"No"
    },
    {
      programId:"77R56",
      programName:"B-Tech",
      programEligibility:"yes",
      programDuration:"4 Years",
      degreeOffered:"No"  
    },
    {
      programId:"77R56",
      programName:"B-Tech",
      programEligibility:"yes",
      programDuration:"4 Years",
      degreeOffered:"No"
    }
  ]
  getUrl()
{
  return "url('assets/images/img13.jpg')";
}
}
