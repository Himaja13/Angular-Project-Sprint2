import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDetailsComponent } from './Components/admin-details/admin-details.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { AdminComponent } from './Components/admin/admin.component';
import { ApplicationStatusComponent } from './Components/application-status/application-status.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { DocumentsComponent } from './Components/documents/documents.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { PaymentsComponent } from './Components/payments/payments.component';
import { ProgramsComponent } from './Components/programs/programs.component';
import { SignupComponent } from './Components/signup/signup.component';
import { StudentsComponent } from './Components/students/students.component';
import { UniversityComponent } from './Components/university/university.component';
import { UsersDetailsComponent } from './Components/users-details/users-details.component';
import { UsersHomeComponent } from './Components/users-home/users-home.component';
import { UsersComponent } from './Components/users/users.component';
import { AddCourseComponent } from './Operation/add-course/add-course.component';
import { AddComponent } from './Operation/add/add.component';
import { BranchListComponent } from './Operation/branch-list/branch-list.component';
import { CheckStatusComponent } from './Operation/check-status/check-status.component';
import { CollegeListComponent } from './Operation/college-list/college-list.component';
import { MakePaymentComponent } from './Operation/make-payment/make-payment.component';
import { StudentRegistrationComponent } from './Operation/student-registration/student-registration.component';
import { UploadDocumentsComponent } from './Operation/upload-documents/upload-documents.component';

const routes: Routes = [
  {path:"",component:HeaderComponent,children:[
    {path:"",component:HomeComponent},
    {path:"home",component:HomeComponent},
    {path:"admin",component:AdminComponent},
    {path:"user",component:UsersComponent},
    {path:"contact",component:ContactUsComponent},
    {path:"signup", component:SignupComponent}
  ]},
  {path:"adminHome",component:AdminHomeComponent,children:[
    {path:"",component:AdminDetailsComponent},
    {path:"adminDetails",component:AdminDetailsComponent},
    {path:"university",component:UniversityComponent},
    {path:"courses",component:AddCourseComponent},
    {path:"students",component:StudentsComponent},
    {path:"programs",component:ProgramsComponent},
    {path:"documents",component:DocumentsComponent},
    {path:"payments",component:PaymentsComponent},
    {path:"applicationStatus",component:ApplicationStatusComponent}
  ]},
  {
    path:"userHome",component:UsersHomeComponent,children:[
      {path:"",component:UsersDetailsComponent},
      {path:"userDetails",component:UsersDetailsComponent},
      {path:"payments",component:MakePaymentComponent},
      {path:"status",component:CheckStatusComponent},
      {path:"courses",component:CoursesComponent},
    {path:"students",component:StudentRegistrationComponent},
    {path:"documents",component:UploadDocumentsComponent}
    ]
  },
  {
    path:"add",component:AddComponent
  },
  {
    path:"branchList",component:BranchListComponent
  },
  {
    path:"collegeList",component:CollegeListComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
