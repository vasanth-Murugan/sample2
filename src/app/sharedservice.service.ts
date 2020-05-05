import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Idata } from './idata';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  constructor(private httpc: HttpClient) { }
  public get():Observable<any[]>
  {
    return this.httpc.get<any[]>
    //('https://jsonplaceholder.typicode.com/posts');
    ('http://localhost:3000/student');
  } 
}
