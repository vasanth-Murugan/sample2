import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedserviceService } from '../sharedservice.service';
//import { Idata } from '../idata';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public response: Observable<any[]>

  constructor(public service: SharedserviceService) { 

     this.response=this.service.get();
  }

  ngOnInit(): void {
  }

}
