
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeeService {

  constructor(private httpc: HttpClient) { }
  public getPosts():Observable<any[]>{
    return this.httpc.get<any[]>
    ('http://dummy.restapiexample.com/api/v1/employees');
  } 
}
