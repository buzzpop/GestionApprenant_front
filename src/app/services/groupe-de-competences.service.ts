import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {UserModel} from '../models/user.model';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupeDeCompetencesService {
  private env= environment.apiUrl

  constructor( private http: HttpClient) { }

  private _refresh = new Subject<any>();

  get refresh(){
    return this._refresh ;
  }

  getGrpCompetences(){

    return this.http.get(this.env+'/admin/groupe_competences?isArchived=false')
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
      .pipe(
        tap(()=>{
          this._refresh.next();
        })
      )
  }

  fillFields(g_competence:any, form:NgForm){
    form.controls.$id.setValue(g_competence.id)
    form.controls.libelle.setValue(g_competence.libelle)
    form.controls.descriptif.setValue(g_competence.descriptif);
  }

  private updateTable = new BehaviorSubject<any>('')

  getC(table:any){
    return this.updateTable.next(table)
  }
  refreshC():Observable<any>{
    return this.updateTable.asObservable();
  }


}
