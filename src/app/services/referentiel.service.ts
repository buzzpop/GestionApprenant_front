import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {UserModel} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ReferentielService {
  private env= environment.apiUrl

  constructor( private http: HttpClient) { }


  getReferentiels(){

    return this.http.get(this.env+'/admin/referentiels?isArchived=false')
  }
  getCompetencesByGroup(id:number){

    return this.http.get(this.env+`/admin/groupe_competences/${id}/competences?isArchived=false`)
  }

  postGrpCompetences(credentials: any){

    return this.http.post(this.env+'/admin/groupe_competences',credentials)
  }

  editGrpCompetences(body:any,id:number){
    return this.http.put(this.env+`/admin/grpcomp/${id}`,body)
  }
  getG_competenceById(id:number){
    return this.http.get(this.env+`/admin/groupe_competences/${id}`)
  }
  archiveGById(id:number){
    return this.http.delete(this.env+`/admin/groupe_competences/${id}`)
  }

  fillFields(g_competence:any, form:NgForm){
    form.controls.$id.setValue(g_competence.id)
    form.controls.libelle.setValue(g_competence.libelle)
    form.controls.descriptif.setValue(g_competence.descriptif);
  }


}
