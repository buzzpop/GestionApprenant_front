import { Component, OnInit } from '@angular/core';
import {GroupeDeCompetencesService} from '../../services/groupe-de-competences.service';
import {CompetencesService} from '../../services/competences.service';


@Component({
  selector: 'app-list-competences',
  templateUrl: './list-competences.component.html',
  styleUrls: ['./list-competences.component.css', '../../groupe-competences/list-group-competences/list-group-competences.component.css']
})
export class ListCompetencesComponent implements OnInit {
  gcompetences:any=[]
  competences:any=[]
  niveauxCompetences: any=[]
  private idG: any;

  constructor(private gCompetenceService: GroupeDeCompetencesService,
              private competenseS: CompetencesService
              ) { }

  ngOnInit(): void {
    this.gCompetenceService.refreshC().subscribe(

    )

    this.gCompetenceService.getGrpCompetences().subscribe(
      (gcompetence:any)=> {
        for (let gc of gcompetence['hydra:member']){
          this.gcompetences.push(gc)
        }
      this.getCompetences(this.gcompetences[0].id)
      }
    );
  }

  getCompetences(select:any) {
    this.idG= select
    this.competences=[]
    this.niveauxCompetences=[]
    this.gCompetenceService.getCompetencesByGroup(select).subscribe(
      (comp:any)=> {
        for (let c of comp['hydra:member']){
          this.competences.push(c)
        }
      }
    )
  }

  getNiveaux(index: number) {
    this.niveauxCompetences=[]
    for (let n of this.competences[index].niveaux){
      this.niveauxCompetences.push(n)
    }

    var header = document.getElementById("myDIV");
    // @ts-ignore
    var btns = header.getElementsByClassName("btnn");
    console.log(btns);
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {

        var current = document.getElementsByClassName("active");

        current[0].className = current[0].className.replace(" active", "");

        // @ts-ignore
        this.className += " active";

      });
    }
  }

  archive(id:any) {
    console.log(id);
    if(confirm("Etes-vous sure de vouloir supprimer?")) {
      this.competenseS.deleteCompetence(id).subscribe(
        success=>{console.log(success)
          alert('Sppression réussie')
        },
        error => console.log(error)
      )
    }
  }

}
