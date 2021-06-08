import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminComponent } from './Components/admin/admin.component';
import { UsersComponent } from './Components/users/users.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HeaderComponent } from './Components/header/header.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { UniversityComponent } from './Components/university/university.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { StudentsComponent } from './Components/students/students.component';
import { PaymentsComponent } from './Components/payments/payments.component';
import { ProgramsComponent } from './Components/programs/programs.component';
import { DocumentsComponent } from './Components/documents/documents.component';
import { AdminDetailsComponent } from './Components/admin-details/admin-details.component';
import { ApplicationStatusComponent } from './Components/application-status/application-status.component';
import { UsersHomeComponent } from './Components/users-home/users-home.component';
import { UsersDetailsComponent } from './Components/users-details/users-details.component';
import { AddComponent } from './Operation/add/add.component';
import { CollegeListComponent } from './Operation/college-list/college-list.component';
import { BranchListComponent } from './Operation/branch-list/branch-list.component';
import { StudentRegistrationComponent } from './Operation/student-registration/student-registration.component';
import { AddCourseComponent } from './Operation/add-course/add-course.component';
import { CheckStatusComponent } from './Operation/check-status/check-status.component';
import { MakePaymentComponent } from './Operation/make-payment/make-payment.component';
import { UploadDocumentsComponent } from './Operation/upload-documents/upload-documents.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './Components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UsersComponent,
    ContactUsComponent,
    HeaderComponent,
    AdminHomeComponent,
    UniversityComponent,
    CoursesComponent,
    StudentsComponent,
    PaymentsComponent,
    ProgramsComponent,
    DocumentsComponent,
    AdminDetailsComponent,
    ApplicationStatusComponent,
    UsersHomeComponent,
    UsersDetailsComponent,
    AddComponent,
    CollegeListComponent,
    BranchListComponent,
    StudentRegistrationComponent,
    AddCourseComponent,
    CheckStatusComponent,
    MakePaymentComponent,
    UploadDocumentsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
