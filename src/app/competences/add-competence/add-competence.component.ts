import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GroupeDeCompetencesService} from '../../services/groupe-de-competences.service';
import {CompetencesService} from '../../services/competences.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrls: ['./add-competence.component.css']
})
export class AddCompetenceComponent implements OnInit {
  addCompetence: any;
  gcompetences: any=[];

  selectedItems :any= [];
  dropdownSettings: any = {};
  id: any;
  compById: any;

  constructor(private formBuilder: FormBuilder, private gcomp: GroupeDeCompetencesService,
              private comp: CompetencesService,
              private route: ActivatedRoute) { }

              formInitialized(){
                this.addCompetence= <FormGroup> this.formBuilder.group({
                  libelle:['', Validators.required],
                  groupeCompetence:['', Validators.required],
                  niveaux: this.formBuilder.array([this.createNiveau()])
                });
              }

  ngOnInit(): void {
    this.formInitialized()
    this.id=this.route.snapshot.paramMap.get('id');
    if (this.id){
      this.comp.getCompetencesId(this.id).subscribe(
        comp=>{
          this.compById= comp;
          this.addCompetence.patchValue(this.compById)
        }
      )
    }

    this.addNiveau()

    this.gcomp.getGrpCompetences().subscribe(
      (data: any)=>{
        for (let g of data['hydra:member']){
          this.gcompetences.push(g)
        }
        console.log(this.gcompetences);
    }
    )

    this.dropdownSettings = {
      singleSelection: false,
      primaryKey: 'id',
      labelKey: 'libelle',
      text:"Select Groupe Competence",
      enableSearchFilter: true,
    };
  }

  createNiveau(): FormGroup {

   return  this.formBuilder.group({
        id: '',
        libelle: '',
        groupe_action: '',
        critere_evaluation: ''
      }) ;


  }

  addNiveau(): void {
    for(let i=0; i<2; i++){
      (<FormArray>this.addCompetence.get('niveaux')).push(this.createNiveau())
    }
  }

  onSubmitForm() {
    if (this.id==null){
      console.log(this.id);
      for (let g of this.addCompetence.controls['groupeCompetence'].value){
        for (let key in g){
          if ( g.hasOwnProperty(key) && key!="id"){
            delete g[key]
          }
        }
        console.log(g);
      }

      this.comp.postCompetences(this.addCompetence.value).subscribe(
        success=>{
          console.log(success)
        }
      )
    }
    else {
      this.comp.editCompetences(this.addCompetence.value, this.id).subscribe(
        success=>{
          console.log(success)
        }
      )
    }



  }
}
