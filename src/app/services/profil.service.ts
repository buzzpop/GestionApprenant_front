import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  private env= environment.apiUrl

  constructor( private http: HttpClient) { }

  findAllProfil(){
    return this.http.get(this.env+'/admin/profils?archivage=false',
      {headers:{'Accept':'application/json'}})
  }
  findProfilById(id:number){
    return this.http.get(this.env+`/admin/profils/${id}`)
  }


  postProfil(credentials: any){

    return this.http.post(this.env+'/admin/profils',credentials)
      .pipe(
        tap(elmt=>{
          this._refresh.next(elmt);
        })
      )
  }

  usersProfil(id: number){

    return this.http.get(this.env+`/admin/profils/${id}/users`)
  }

private _refresh = new Subject<any>();

  get refresh(){
    return this._refresh ;
  }

  form: FormGroup = new FormGroup({
      $id:new  FormControl(''),
      libelle: new FormControl('',Validators.required),
    }
  )

  archiveProfil(id: number) {
    return this.http.delete(this.env+`/admin/profils/${id}`)
      .pipe(
        tap(()=>{
          this._refresh.next();
        })
      )
  }

  editProfil(body:any, id:number){
    return this.http.put(this.env+`/admin/profils/${id}`,body)
      .pipe(
        tap(()=>{
          this._refresh.next();
        })
      )
  }

}
