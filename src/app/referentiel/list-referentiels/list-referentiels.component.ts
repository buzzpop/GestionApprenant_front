import { Component, OnInit } from '@angular/core';
import {ReferentielService} from '../../services/referentiel.service';

@Component({
  selector: 'app-list-referentiels',
  templateUrl: './list-referentiels.component.html',
  styleUrls: ['./list-referentiels.component.css']
})
export class ListReferentielsComponent implements OnInit {
  referentiels:any = []
  p=1;
  search: any;
i:any
  constructor(private referentielS: ReferentielService) { }

  ngOnInit(): void {

    this.referentielS.getReferentiels().subscribe(
      (referentiel:any)=>{

        for (let r of referentiel['hydra:member']){
          this.referentiels.push(r)
        }
        console.log(this.referentiels)
      }
    )
  }
}
