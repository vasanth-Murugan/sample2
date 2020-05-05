import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiComponent } from './api/api.component';
import { PostComponent } from './post/post.component';
import { EmployeeComponent } from './employee/employee.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { StudentsComponent } from './students/students.component';


@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    PostComponent,
    EmployeeComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ScrollingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
