import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CompetencesService} from '../../services/competences.service';
import {GroupeDeCompetencesService} from '../../services/groupe-de-competences.service';
import {ActivatedRoute, Data, Router} from '@angular/router';


@Component({
  selector: 'app-add-group-competences',
  templateUrl: './add-group-competences.component.html',
  styleUrls: ['./add-group-competences.component.css']
})

export class AddGroupCompetencesComponent implements OnInit {
  competences:any[]=[]
  selectedItems :any= [];
  dropdownSettings: any = {};

  form: any;

  constructor(private competenceS: CompetencesService,
              private g: GroupeDeCompetencesService,
              private route: ActivatedRoute,
              private router:Router ) {

  }

  ngOnInit(): void {

    this.form= <FormGroup> new FormGroup({
      $id: new FormControl(''),
      libelle: new FormControl(''),
      descriptif: new FormControl(''),
      competences: new FormControl(''),

    });


    this.route.data.subscribe(
      (data:Data)=> {
        console.log(data['gCompetence'])
        if (data['gCompetence']){
          this.g.fillFields(data['gCompetence'],this.form)
          for (let c of data['gCompetence'].competences){
            this.selectedItems.push(c)
          }
          console.log(this.selectedItems)
        }

      }
    )

    this.competenceS.getCompetences().subscribe(
      (comp:any)=>{
        for (let c of comp['hydra:member']){
          this.competences.push(c)
        }
        console.log(this.competences);
      }
    )



    this.dropdownSettings = {
      singleSelection: false,
      primaryKey: 'id',
      labelKey: 'libelle',
      text:"Select Competences",
      enableSearchFilter: true,
    };

  }

  onSubmit() {
    for (let elm of  this.form.controls['competences'].value){
      for (let key in elm){
        if ( elm.hasOwnProperty(key) && key!="id"){
          delete elm[key]
        }
      }
    }

    if (!this.form.controls.$id.value) {
      this.g.postGrpCompetences(this.form.value).subscribe(
        response => {
          console.log(response)
        }
      )
    }else {

      this.g.editGrpCompetences(this.form.value,this.form.controls.$id.value).subscribe(
        response=>{
          console.log(response)
          this.router.navigate(['/groupe-competences'])
        },
        error => console
          .log(error)
      )
    }
  }
}
