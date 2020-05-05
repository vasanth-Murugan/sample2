import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeeService } from '../employeee.service';
import { Idata } from '../idata';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public response: any;

  constructor(public service: EmployeeeService) { 

     this.service.getPosts().subscribe(result =>{
      this.response = result['data'];
  })
}
  ngOnInit(): void {
  }

}