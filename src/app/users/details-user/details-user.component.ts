import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {
detailsUser:any

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.route.data.subscribe(
    (data:Data)=>{
      this.detailsUser=data['userDetails']
      console.log(this.detailsUser)
    }
  )

  }
}
