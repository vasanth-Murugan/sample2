import { Injectable } from '@angular/core';
import { Students } from './data';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents(){
    return Students;
  }

}
