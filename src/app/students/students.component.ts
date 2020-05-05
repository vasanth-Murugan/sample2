import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private Studentservice: StudentService) { }
       Students=[]
  ngOnInit() {
    this.getStudents()
  }
  getStudents(){
    this.Students=this.Studentservice.getStudents();
  }

}
