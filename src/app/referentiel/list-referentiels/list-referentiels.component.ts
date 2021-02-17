import { Component, OnInit } from '@angular/core';
import {ReferentielService} from '../../services/referentiel.service';
import {GroupeDeCompetencesService} from '../../services/groupe-de-competences.service';

@Component({
  selector: 'app-list-referentiels',
  templateUrl: './list-referentiels.component.html',
  styleUrls: ['./list-referentiels.component.css']
})
export class ListReferentielsComponent implements OnInit {
  referentiels:any = []
  p=1;
  search: string=''
  index: any
  grpCompetence: any = [];
  constructor(private referentielS: ReferentielService,
              private grp: GroupeDeCompetencesService) { }

  ngOnInit(): void {
    this.grp.getGrpCompetences().subscribe(
      (data:any)=>{
        for (let g of data['hydra:member']){
          this.grpCompetence.push(g)
        }
      }
    )

    this.referentielS.getReferentiels().subscribe(
      (referentiel:any)=>{

        for (let r of referentiel['hydra:member']){
          this.referentiels.push(r)
        }
      }
    )
  }

  indexAtrribute(e:any) {
   if (e.type=="keyup"){
    this.index= 'libelle'
     this.search= e.target.value
     console.log(e.target.value);
   }else {
     this.index='groupeCompetences'
     console.log(e.target.value);
     this.search= e.target.value
   }
  }
}
