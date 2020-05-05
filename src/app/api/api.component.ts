import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    this.http.get(' http://dummy.restapiexample.com/api/v1/employees').subscribe(data=> {
      console.log(data);
    },
    err => {
      console.log("error occured");
    });
    
    // this.http.post(' http://dummy.restapiexample.com/api/v1/create',
    // {
    //   name: 'vasanth',
    //   salary: '123',
    //   age:21
    // })
    // .subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   err =>{
    //     console.log("Error Occured");
    //   }
    // );
    
    // this.http.put(' http://dummy.restapiexample.com/api/v1/update/25',
    // {"name":"test1","salary":"2222","age":"23"})
    // .subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   err =>{
    //     console.log("Error Occured");
    //   }
    // );

    // this.http.delete('')
    // .subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   err =>{
    //     console.log("Error Occured");
    //   }
    // );


  }
}
