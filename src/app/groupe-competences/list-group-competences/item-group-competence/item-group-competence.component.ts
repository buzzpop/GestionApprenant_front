import {Component, Input, OnInit } from '@angular/core';
import {GroupeDeCompetencesService} from '../../../services/groupe-de-competences.service';
import {ListGroupCompetencesComponent} from '../list-group-competences.component';


@Component({
  selector: 'app-item-group-competence',
  templateUrl: './item-group-competence.component.html',
  styleUrls: ['./item-group-competence.component.css']
})
export class ItemGroupCompetenceComponent {

  @Input() itemGroupeDeCompetence:any

  constructor(private groupeC: GroupeDeCompetencesService,
              private params: ListGroupCompetencesComponent) { }

  delete(id:any) {
    if(confirm("Etes-vous sure de vouloir supprimer?")) {
      this.groupeC.archiveGById(id).subscribe(
        success=>{

        },
        error => console.log(error)
      )
    }
  }
}
