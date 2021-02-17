import { Component, OnInit } from '@angular/core';
import {GroupeDeCompetencesService} from '../../services/groupe-de-competences.service';

@Component({
  selector: 'app-list-group-competences',
  templateUrl: './list-group-competences.component.html',
  styleUrls: ['./list-group-competences.component.css']
})
export class ListGroupCompetencesComponent implements OnInit {
  groupeDeC:any = []

  constructor(private grpCService: GroupeDeCompetencesService,
       ) { }

  ngOnInit(): void {
    this.grpCService.getGrpCompetences().subscribe(

      (grpC:any)=>{
        this.grpCService.getC(grpC["hydra:member"])
        this.grpCService.refreshC().subscribe(
          data=>{
            for (let gC of grpC['hydra:member']){
              this.groupeDeC.push(gC)
            }
          }
        )

      }
    )

  }

}
